import React from "react";
import { Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function EditPasswordSkeleton({ footer }) {
  return (
    <div>
      <Card>
        <Card.Header>
          <Skeleton width={100} height={30} />
        </Card.Header>
        <Card.Body>
          <Skeleton height={30} count={3} className="mb-2" />
        </Card.Body>
        {footer && (
          <Card.Footer className="text-end">
            <Skeleton width={100} height={30} />
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}
