import React from "react";
import { Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function ViewCategorySkeleton() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Skeleton width={150} height={30} />
        </Card.Header>
        <Card.Body>
          <Skeleton height={300} />
        </Card.Body>
        <Card.Footer>
          <Skeleton height={100} />
        </Card.Footer>
      </Card>
    </div>
  );
}
