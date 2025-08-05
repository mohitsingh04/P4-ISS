import React from "react";
import { Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function EditProfileImageSkeleton() {
  return (
    <div>
      <Card>
        <Card.Body className="d-flex justify-content-between">
          <Skeleton width={50} height={50} circle={true} />
          <div className="d-flex">
            <Skeleton width={50} height={30} className="me-1" />
            <Skeleton width={50} height={30} className="me-1" />
            <Skeleton width={50} height={30} className="me-1" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
