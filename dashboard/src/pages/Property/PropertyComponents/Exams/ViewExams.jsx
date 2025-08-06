import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

export default function ViewExams({ exam, getExamById }) {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => setShowMore((prev) => !prev);

  const getShortText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent.slice(0, 300);
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h5 className="mb-0">View Exam</h5>
            </Card.Header>

            <Card.Body>
              <Table responsive striped borderless>
                <tbody>
                  <tr>
                    <th>Exam Name</th>
                    <td>
                      {exam.exam_name || getExamById(exam?.exam_id)?.exam_name}
                    </td>
                  </tr>
                  <tr>
                    <th>Short Name</th>
                    <td>
                      {exam.exam_short_name ||
                        getExamById(exam?.exam_id)?.exam_short_name}
                    </td>
                  </tr>
                  <tr>
                    <th>Upcoming Exam Date</th>

                    <td>
                      {new Date(
                        exam.upcoming_exam_date ||
                          getExamById(exam?.exam_id)?.upcoming_exam_date
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th>Result Date</th>

                    <td>
                      {new Date(
                        exam.result_date ||
                          getExamById(exam?.exam_id)?.result_date
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th>Application Form Date</th>

                    <td>
                      {new Date(
                        exam.application_form_date ||
                          getExamById(exam?.exam_id)?.application_form_date
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th>Application Form Link</th>
                    <td>
                      <a
                        href={
                          exam.application_form_link ||
                          getExamById(exam?.exam_id)?.application_form_link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exam.application_form_link ||
                          getExamById(exam?.exam_id)?.application_form_link}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Exam Form Link</th>
                    <td>
                      <a
                        href={exam.exam_form_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exam.exam_form_link ||
                          getExamById(exam?.exam_id)?.exam_form_link}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Exam Mode</th>
                    <td>
                      {exam.exam_mode || getExamById(exam?.exam_id)?.exam_mode}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>

            <Card.Footer>
              <h5>Description</h5>
              {exam.description ||
              (getExamById(exam?.exam_id)?.description &&
                getShortText(
                  exam.description || getExamById(exam?.exam_id)?.description
                ).length >= 300) ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: showMore
                        ? exam.description ||
                          getExamById(exam?.exam_id)?.description
                        : (
                            exam.description ||
                            getExamById(exam?.exam_id)?.description
                          ).slice(0, 300) + "...",
                    }}
                  />
                  <Button
                    variant="link"
                    size="sm"
                    className="px-0"
                    onClick={toggleReadMore}
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </Button>
                </>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      exam.description ||
                      getExamById(exam?.exam_id)?.description,
                  }}
                />
              )}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
