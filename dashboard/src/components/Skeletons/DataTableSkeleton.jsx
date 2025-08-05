import React from "react";
import { Card } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DataTableSkeleton() {
  const columns = Array.from({ length: 5 }).map((_, index) => ({
    name: <Skeleton width={100} height={20} />,
    selector: (row) => row[`col${index + 1}`],
    sortable: false,
    center: true,
  }));

  const data = Array.from({ length: 5 }).map((_, rowIndex) => ({
    id: rowIndex,
    ...Array.from({ length: 5 }).reduce((acc, _, colIndex) => {
      acc[`col${colIndex + 1}`] = <Skeleton width={120} height={15} />;
      return acc;
    }, {}),
  }));

  return (
    <Card.Body>
      <DataTable
        columns={columns}
        data={data}
        noHeader={false}
        highlightOnHover
      />
    </Card.Body>
  );
}
