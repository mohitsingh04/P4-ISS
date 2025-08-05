import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "../../../context/API";

export default function RankTable({ properties }) {
  const [topRanks, setTopRanks] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getCategories();
  }, [getCategories()]);

  const getCategoryToRelatedId = (id) => {
    const category = categories.find((item) => item.uniqueId === Number(id));
    return category ? category?.category_name : "Unknown";
  };
  const getTopRanks = useCallback(async () => {
    try {
      const response = await API.get(`/ranks`);
      const ranks = response.data;

      const sortedRanks = ranks.sort((a, b) => a.rank - b.rank).slice(0, 10);

      const mergedData = sortedRanks.map((rank) => {
        const property = properties.find(
          (prop) => prop.uniqueId === rank.property_id
        );
        return {
          mainId: property ? property._id : "",
          property_id: rank.property_id,
          rank: rank.rank,
          lastRank: rank.lastRank,
          property_name: property ? property.property_name : "Unknown",
          category: property ? property.category : "N/A",
        };
      });

      setTopRanks(mergedData);
    } catch (error) {
      console.log(error);
    }
  }, [properties]);

  useEffect(() => {
    getTopRanks();
  }, [getTopRanks]);

  return (
    <div>
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">Top 10 Ranked Properties</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive deals-table">
                <table className="table text-nowrap table-hover border table-bordered">
                  <thead className="border-top">
                    <tr>
                      <th className="bg-transparent border-bottom-0 text-uppercase">
                        Property Name
                      </th>
                      <th className="bg-transparent border-bottom-0 w-5 text-uppercase">
                        Rank
                      </th>
                      <th className="bg-transparent border-bottom-0 text-uppercase">
                        Last Rank
                      </th>
                      <th className="bg-transparent border-bottom-0 text-uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topRanks.map((item) => (
                      <tr key={item.property_id} className="border-bottom">
                        <td>
                          <div className="d-flex">
                            <div className="ms-2 mt-0 mt-sm-2 d-block">
                              <h6 className="mb-0 fs-14 fw-semibold">
                                {item.property_name}
                              </h6>
                              <span className="fs-12 text-muted">
                                {getCategoryToRelatedId(item.category)}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-muted fs-15 fw-semibold">
                          {item.rank}
                        </td>
                        <td className="text-muted fs-15 fw-semibold">
                          {item.lastRank}
                        </td>
                        <td>
                          <Link
                            to={`/dashboard/property/view/${item.mainId}`}
                            className="btn btn-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
