import { PropertyProps } from "@/types/types";
import AmenityTable from "../_comparison_table_component/AmenityTable";
import ExamTable from "../_comparison_table_component/ExamTable";

const ComparisonTable = ({
  selectedProperties,
}: {
  selectedProperties: PropertyProps[];
}) => {
  return (
    <div className="space-y-0">
      <ExamTable selectedProperties={selectedProperties} />
      <AmenityTable selectedProperties={selectedProperties} />
    </div>
  );
};

export default ComparisonTable;
