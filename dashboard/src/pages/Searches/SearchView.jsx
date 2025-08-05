import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Dropdown,
  Form,
  Breadcrumb,
  Button,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

export default function SearchView() {
  const { objectId } = useParams();
  const [search, setSearch] = useState(null);
  const [filter, setFilter] = useState("all");
  const [compare, setCompare] = useState(false);
  const navigator = useNavigate();

  const filterOptions = {
    "7d": 7,
    "14d": 14,
    "1m": 30,
    "6m": 180,
    "1y": 365,
    all: null,
  };

  const getSearch = useCallback(async () => {
    try {
      const response = await API.get(`/search/${objectId}`);
      setSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getSearch();
  }, [getSearch]);

  // Automatically switch to 1y when compare is enabled and filter is "all"
  useEffect(() => {
    if (compare && filter === "all") {
      setFilter("1y");
    }
  }, [compare]);

  const getFilteredData = (daysOffset, reference = dayjs()) => {
    if (!search?.searched) return [];
    return search.searched.filter((entry) => {
      const entryDate = dayjs(entry.date);
      return (
        entryDate.isAfter(reference.subtract(daysOffset, "day")) &&
        entryDate.isBefore(reference)
      );
    });
  };

  const prepareChartData = () => {
    if (!search?.searched) return { series: [], options: {} };

    let currentData = [];
    let previousData = [];

    if (filter === "all") {
      currentData = [...search.searched];
    } else {
      const offset = filterOptions[filter];
      currentData = getFilteredData(offset, dayjs());
      if (compare) {
        previousData = getFilteredData(offset, dayjs().subtract(offset, "day"));
      }
    }

    const getDateFormat = () => {
      if (filter === "7d" || filter === "14d") return "YYYY-MM-DD";
      if (filter === "1m" || filter === "6m") return "YYYY-MM";
      if (filter === "1y") return "YYYY";
      const totalDays = dayjs(search.searched.at(-1)?.date).diff(
        dayjs(search.searched[0]?.date),
        "day"
      );
      if (totalDays < 30) return "YYYY-MM-DD";
      else if (totalDays < 365) return "YYYY-MM";
      else return "YYYY";
    };

    const format = getDateFormat();

    const groupData = (data) => {
      const map = {};
      data.forEach((entry) => {
        const key = dayjs(entry.date).format(format);
        map[key] = (map[key] || 0) + 1;
      });
      return map;
    };

    const currentMap = groupData(currentData);
    const previousMap = groupData(previousData);

    const allKeys = Array.from(
      new Set([...Object.keys(currentMap), ...Object.keys(previousMap)])
    ).sort();

    const currentSeries = allKeys.map((k) => currentMap[k] || 0);
    const previousSeries = allKeys.map((k) => previousMap[k] || 0);

    const currentLabel = compare
      ? `Current (${dayjs()
          .subtract(filterOptions[filter], "day")
          .format("MMM D, YYYY")} - ${dayjs().format("MMM D, YYYY")})`
      : "Searches";
    const previousLabel = compare
      ? `Previous (${dayjs()
          .subtract(filterOptions[filter] * 2, "day")
          .format("MMM D, YYYY")} - ${dayjs()
          .subtract(filterOptions[filter], "day")
          .format("MMM D, YYYY")})`
      : "";

    const labels = allKeys;

    const series = [
      {
        name: currentLabel,
        data: currentSeries,
      },
    ];

    if (compare && previousSeries.length > 0) {
      series.push({
        name: previousLabel,
        data: previousSeries,
      });
    }

    return {
      series,
      options: {
        chart: {
          type: "line",
          height: 320,
          toolbar: { show: false },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        dataLabels: { enabled: true },
        xaxis: {
          categories: labels,
          title: { text: "Time" },
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3,
        },
        colors: ["#1d4b99", "#ff5733"],
        legend: { show: true, position: "top" },
      },
    };
  };

  const chartData = prepareChartData();

  const dropdownFilters = Object.entries(filterOptions).filter(([key]) =>
    compare ? key !== "all" : true
  );

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Searches</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>Searches</Breadcrumb.Item>
            <Breadcrumb.Item active>{search?.search}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator()}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title className="mb-0">{search?.search}</Card.Title>
              <div className="d-flex align-items-center gap-2">
                <Form.Check
                  type="switch"
                  id="compare-switch"
                  label="Compare"
                  checked={compare}
                  onChange={(e) => setCompare(e.target.checked)}
                />
                <Dropdown onSelect={(key) => setFilter(key)}>
                  <Dropdown.Toggle variant="outline-primary" size="sm">
                    {
                      {
                        "7d": "7 Days",
                        "14d": "2 Weeks",
                        "1m": "1 Month",
                        "6m": "6 Months",
                        "1y": "1 Year",
                        all: "All Time",
                      }[filter]
                    }
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {dropdownFilters.map(([key]) => (
                      <Dropdown.Item eventKey={key} key={key}>
                        {
                          {
                            "7d": "7 Days",
                            "14d": "2 Weeks",
                            "1m": "1 Month",
                            "6m": "6 Months",
                            "1y": "1 Year",
                            all: "All Time",
                          }[key]
                        }
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body>
              {chartData.series.length > 0 ? (
                <ReactApexChart
                  className="overflow-hidden"
                  options={chartData.options}
                  series={chartData.series}
                  type="line"
                  height={320}
                />
              ) : (
                <p className="text-muted">No data available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
