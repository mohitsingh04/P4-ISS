import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import { useTable, useSortBy, useGlobalFilter, usePagination, } from "react-table";
import { Table, Col, Card, Form, InputGroup } from 'react-bootstrap';

export function Basicdatatable() {
  const columns = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => [row.LASTNAME],
      sortable: true,
    },
    {
      name: "POSITION",
      selector: (row) => [row.POSITION],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true,
    },
    {
      name: " SALARY",
      selector: (row) => [row.SALARY],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.EMAIL],
      sortable: true,
    },
  ];
  const data = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <div className="table">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          striped={true}
          center={true}
          persistTableHead
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  );
}

export const DataTables = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => [row.LASTNAME],
      sortable: true,
    },
    {
      name: "POSITION",
      selector: (row) => [row.POSITION],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true,
    },
    {
      name: " SALARY",
      selector: (row) => [row.SALARY],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.EMAIL],
      sortable: true,
    },
  ];
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableDatas}>
      <DataTable
        title
        columns={columns}
        data={data}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </DataTableExtensions>
  );
};

function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Export = ({ onExport }) => (
  <Button onClick={(e) => onExport(e.target.value)}>Export</Button>
);
const data = [
  {
    id: "1",
    SNO: 1,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "i.bond@datatables.net",
  },
  {
    id: "2",
    SNO: 2,
    NAME: "Zonna",
    LASTNAME: "Jond",
    POSITION: "Accountant",
    DATE: "2012/02/21",
    SALARY: "$343,654",
    EMAIL: "a.bond@datatables.net",
  },
  {
    id: "3",
    SNO: 3,
    NAME: "Nonna",
    LASTNAME: "Tond",
    POSITION: "Chief Executive Officer",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "4",
    SNO: 4,
    NAME: "Bonna",
    LASTNAME: "Oond",
    POSITION: "Chief Operating Officer",
    DATE: "2012/02/21",
    SALARY: "$643,654",
    EMAIL: "w.bond@datatables.net",
  },
  {
    id: "5",
    SNO: 5,
    NAME: "Honna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "e.bond@datatables.net",
  },
  {
    id: "6",
    SNO: 6,
    NAME: "Fonna",
    LASTNAME: "Nond",
    POSITION: "Developer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "r.bond@datatables.net",
  },
  {
    id: "7",
    SNO: 7,
    NAME: "Aonna",
    LASTNAME: "Xond",
    POSITION: "Development lead",
    DATE: "2012/02/21",
    SALARY: "$843,654",
    EMAIL: "g.bond@datatables.net",
  },
  {
    id: "8",
    SNO: 8,
    NAME: "Qonna",
    LASTNAME: "Vond",
    POSITION: "Director",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "x.bond@datatables.net",
  },
  {
    id: "9",
    SNO: 9,
    NAME: "Jond",
    LASTNAME: "Zonna",
    POSITION: "Marketing Officer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "k.bond@datatables.net",
  },
  {
    id: "10",
    SNO: 10,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "11",
    SNO: 11,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "b.bond@datatables.net",
  },
  {
    id: "12",
    SNO: 12,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "o.bond@datatables.net",
  },
  {
    id: "13",
    SNO: 13,
    NAME: "Qonna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "q.bond@datatables.net",
  },
  {
    id: "14",
    SNO: 14,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "m.bond@datatables.net",
  },
];
const columns = [
  {
    name: "S.NO",
    selector: (row) => [row.SNO],
    sortable: true,
  },
  {
    name: "NAME",
    selector: (row) => [row.NAME],
    sortable: true,
  },
  {
    name: "LAST NAME",
    selector: (row) => [row.LASTNAME],
    sortable: true,
  },
  {
    name: "POSITION",
    selector: (row) => [row.POSITION],
    sortable: true,
  },
  {
    name: "DATE",
    selector: (row) => [row.DATE],
    sortable: true,
  },
  {
    name: " SALARY",
    selector: (row) => [row.SALARY],
    sortable: true,
  },
  {
    name: "EMAIL",
    selector: (row) => [row.EMAIL],
    sortable: true,
  },
];
const tableDatas = {
  columns,
  data,
};
export const ExportCSV = () => {
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  let selectdata = [];
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const Selectdata = () => {
      if (window.confirm(`download:\r ${selectedRows.map((r) => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared);
        data.map((e) => {
          selectedRows.map((sr) => {
            if (e.id === sr.id) {
              selectdata.push(e);
            }
            return sr;
          });
          return e;
        });
        downloadCSV(selectdata);
      }
    };

    return <Export onExport={() => Selectdata()} icon="true" />;
  }, [data, selectdata, selectedRows]);
  return (
    <DataTableExtensions {...tableDatas}>
      <DataTable
        columns={columns}
        data={data}
        actions={actionsMemo}
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        selectableRows
        pagination
      />
    </DataTableExtensions>
  );
};

export const fixedheader = () => {
  const data = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
    },
  ];
  const columns = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => [row.LASTNAME],
      sortable: true,
    },
    {
      name: "POSITION",
      selector: (row) => [row.POSITION],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true,
    },
    {
      name: " SALARY",
      selector: (row) => [row.SALARY],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.EMAIL],
      sortable: true,
    },
  ];
  const tableDatas = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableDatas}>
      <DataTable
        title=""
        columns={columns}
        data={data}
        fixedHeader
        pagination
      />
    </DataTableExtensions>
  );
};
export const tableDataItems = [
  {
    id: "1",
    SNO: 1,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "i.bond@datatables.net",
  },
  {
    id: "2",
    SNO: 2,
    NAME: "Zonna",
    LASTNAME: "Jond",
    POSITION: "Accountant",
    DATE: "2012/02/21",
    SALARY: "$343,654",
    EMAIL: "a.bond@datatables.net",
  },
  {
    id: "3",
    SNO: 3,
    NAME: "Nonna",
    LASTNAME: "Tond",
    POSITION: "Chief Executive Officer",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "4",
    SNO: 4,
    NAME: "Bonna",
    LASTNAME: "Oond",
    POSITION: "Chief Operating Officer",
    DATE: "2012/02/21",
    SALARY: "$643,654",
    EMAIL: "w.bond@datatables.net",
  },
  {
    id: "5",
    SNO: 5,
    NAME: "Honna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "e.bond@datatables.net",
  },
  {
    id: "6",
    SNO: 6,
    NAME: "Fonna",
    LASTNAME: "Nond",
    POSITION: "Developer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "r.bond@datatables.net",
  },
  {
    id: "7",
    SNO: 7,
    NAME: "Aonna",
    LASTNAME: "Xond",
    POSITION: "Development lead",
    DATE: "2012/02/21",
    SALARY: "$843,654",
    EMAIL: "g.bond@datatables.net",
  },
  {
    id: "8",
    SNO: 8,
    NAME: "Qonna",
    LASTNAME: "Vond",
    POSITION: "Director",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "x.bond@datatables.net",
  },
  {
    id: "9",
    SNO: 9,
    NAME: "Jond",
    LASTNAME: "Zonna",
    POSITION: "Marketing Officer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "k.bond@datatables.net",
  },
  {
    id: "10",
    SNO: 10,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "11",
    SNO: 11,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "b.bond@datatables.net",
  },
  {
    id: "12",
    SNO: 12,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "o.bond@datatables.net",
  },
  {
    id: "13",
    SNO: 13,
    NAME: "Qonna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "q.bond@datatables.net",
  },
  {
    id: "14",
    SNO: 14,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "m.bond@datatables.net",
  },
]




//
// Basic Table Data START******

export const COLUMNS = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "text-center wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "text-center wd-15p border-bottom-0 ",
  }
];

export const DATATABLE = [
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: 'Bella',
    LNAME: 'Chloe',
    POSITION: 'System Developer',
    START: '2018/03/12',
    SALARY: '$654,765',
    MAIL: 'b.Chloe@datatables.net',
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: 'Dominic',
    LNAME: 'Hudson',
    POSITION: 'Sales Assistant',
    START: '2015/10/16',
    SALARY: '$654,300',
    MAIL: 'd.hudson@datatables.net',
  },
  {
    FNAME: 'Donna',
    LNAME: 'Bond',
    POSITION: 'Account Manager',
    START: '2012/02/21',
    SALARY: '$543,654',
    MAIL: 'd.bond@datatables.net',
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: 'Harry',
    LNAME: 'Carr',
    POSITION: 'Technical Manager',
    START: '20011/02/87',
    SALARY: '$86,000',
    MAIL: 'h.carr@datatables.net',
  },
  {
    FNAME: 'Lucas',
    LNAME: 'Dyer',
    POSITION: 'Javascript Developer',
    START: '2014/08/23',
    SALARY: '$456,123',
    MAIL: 'l.dyer@datatables.net',
  },
  {
    FNAME: 'Karen',
    LNAME: 'Hill',
    POSITION: 'Sales Manager',
    START: '2010/7/14',
    SALARY: '$432,230',
    MAIL: 'k.hill@datatables.net',
  },
  {
    FNAME: 'Herrod',
    LNAME: 'Chandler',
    POSITION: 'Integration Specialist',
    START: '2012/08/06',
    SALARY: '$137,500',
    MAIL: 'h.chandler@datatables.net',
  },
  {
    FNAME: 'Jonathan',
    LNAME: 'Ince',
    POSITION: 'junior Manager',
    START: '2012/11/23',
    SALARY: '$345,789',
    MAIL: 'j.ince@datatables.net',
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },
  {
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  }
];
export const BasicDataTable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>

      <div className="e-table px-5 pb-5 table-responsive">
        <div className="d-block">
          <select
            className="mb-4 me-1"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        <Table
          {...getTableProps()}
          className="table-bordered text-nowrap border-bottom"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={column.className}
                  >
                    <span className="tabletitle">{column.render("Header")}</span>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa fa-angle-down"></i>
                        ) : (
                          <i className="fa fa-angle-up"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="text-center" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="ms-sm-auto">
            <Button
              variant=""
              className="btn-default tablebutton d-sm-inline d-block me-2 my-2"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {" Previous "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" << "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" < "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" > "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" >> "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Next "}
            </Button>
          </span>
        </div>
      </div>



    </>
  );
};
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto d-inline-flex float-end">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

// Responsive Table Data START******

export const COLUMN = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "text-center wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "text-center wd-15p border-bottom-0 ",
  }
];

export const RESDATATABLE = [
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: 'Bella',
    LNAME: 'Chloe',
    POSITION: 'System Developer',
    START: '2018/03/12',
    SALARY: '$654,765',
    MAIL: 'b.Chloe@datatables.net',
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: 'Dominic',
    LNAME: 'Hudson',
    POSITION: 'Sales Assistant',
    START: '2015/10/16',
    SALARY: '$654,300',
    MAIL: 'd.hudson@datatables.net',
  },
  {
    FNAME: 'Donna',
    LNAME: 'Bond',
    POSITION: 'Account Manager',
    START: '2012/02/21',
    SALARY: '$543,654',
    MAIL: 'd.bond@datatables.net',
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: 'Harry',
    LNAME: 'Carr',
    POSITION: 'Technical Manager',
    START: '20011/02/87',
    SALARY: '$86,000',
    MAIL: 'h.carr@datatables.net',
  },
  {
    FNAME: 'Lucas',
    LNAME: 'Dyer',
    POSITION: 'Javascript Developer',
    START: '2014/08/23',
    SALARY: '$456,123',
    MAIL: 'l.dyer@datatables.net',
  },
  {
    FNAME: 'Karen',
    LNAME: 'Hill',
    POSITION: 'Sales Manager',
    START: '2010/7/14',
    SALARY: '$432,230',
    MAIL: 'k.hill@datatables.net',
  },
  {
    FNAME: 'Herrod',
    LNAME: 'Chandler',
    POSITION: 'Integration Specialist',
    START: '2012/08/06',
    SALARY: '$137,500',
    MAIL: 'h.chandler@datatables.net',
  },
  {
    FNAME: 'Jonathan',
    LNAME: 'Ince',
    POSITION: 'junior Manager',
    START: '2012/11/23',
    SALARY: '$345,789',
    MAIL: 'j.ince@datatables.net',
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },
  {
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  }
];
export const ResponsiveDataTable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMN,
      data: RESDATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="e-table px-5 pb-5">
        <div className="d-flex">
          <select
            className="mb-4 me-1"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalResFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        <Table
          {...getTableProps()}
          className="table-bordered text-nowrap border-bottom"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={column.className}
                  >
                    <span className="tabletitle">{column.render("Header")}</span>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa fa-angle-down"></i>
                        ) : (
                          <i className="fa fa-angle-up"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="text-center" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="ms-sm-auto ">
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2 d-sm-inline d-block"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {" Previous "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" << "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" < "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" > "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" >> "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Next "}
            </Button>
          </span>
        </div>
      </div>

    </>
  );
};
const GlobalResFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

//
export const COLUMNS1 = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "text-center wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "text-center wd-15p border-bottom-0 ",
  }
];

export const DATATABLE1 = [
  {
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  },
  {
    FNAME: 'Bella',
    LNAME: 'Chloe',
    POSITION: 'System Developer',
    START: '2018/03/12',
    SALARY: '$654,765',
    MAIL: 'b.Chloe@datatables.net',
  },
  {
    FNAME: 'Donna',
    LNAME: 'Bond',
    POSITION: 'Account Manager',
    START: '2012/02/21',
    SALARY: '$543,654',
    MAIL: 'd.bond@datatables.net',
  },
  {
    FNAME: 'Harry',
    LNAME: 'Carr',
    POSITION: 'Technical Manager',
    START: '20011/02/87',
    SALARY: '$86,000',
    MAIL: 'h.carr@datatables.net',
  },
  {
    FNAME: 'Lucas',
    LNAME: 'Dyer',
    POSITION: 'Javascript Developer',
    START: '2014/08/23',
    SALARY: '$456,123',
    MAIL: 'l.dyer@datatables.net',
  },
  {
    FNAME: 'Karen',
    LNAME: 'Hill',
    POSITION: 'Sales Manager',
    START: '2010/7/14',
    SALARY: '$432,230',
    MAIL: 'k.hill@datatables.net',
  },
  {
    FNAME: 'Dominic',
    LNAME: 'Hudson',
    POSITION: 'Sales Assistant',
    START: '2015/10/16',
    SALARY: '$654,300',
    MAIL: 'd.hudson@datatables.net',
  },
  {
    FNAME: 'Herrod',
    LNAME: 'Chandler',
    POSITION: 'Integration Specialist',
    START: '2012/08/06',
    SALARY: '$137,500',
    MAIL: 'h.chandler@datatables.net',
  },
  {
    FNAME: 'Jonathan',
    LNAME: 'Ince',
    POSITION: 'junior Manager',
    START: '2012/11/23',
    SALARY: '$345,789',
    MAIL: 'j.ince@datatables.net',
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },

];
export const Datatable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE1,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Card className="shadow-none">
        <Card.Header className="border-bottom-0 p-4 flex-wrap">
          <Card.Title>1 - 30 of 546 users</Card.Title>
          <div className="page-options ms-auto">
            <Form.Select className="form-control select2 w-100">
              <option value="asc">Latest</option>
              <option value="desc">Oldest</option>
            </Form.Select>
          </div>
          <InputGroup className="mt-4">
            <GlobalFilter1 filter={globalFilter} setFilter={setGlobalFilter} />
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
        </Card.Header>
        <div className="e-table px-5 pb-5">
          <div className="table-responsive ">

            <div className="d-flex">
              <select
                className="mb-6 table-border me-1"
                value={pageSize}
                // onClick={()=>{getRandomUppercaseChar()}}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>

            </div>
            <table
              {...getTableProps()}
              className="table table-bordered text-nowrap mb-0"
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={column.className}
                      >
                        <span className="tabletitle">{column.render("Header")}</span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="text-center" {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-sm-flex mt-4 align-items-center">
              <span className="">
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <span className="ms-auto ps-2">
                <Button
                  variant=""
                  className="btn-default tablebutton me-2 my-2"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {" Previous "}
                </Button>
                <Button
                  variant=""
                  className="btn-default tablebutton me-2 my-2"
                  onClick={() => {
                    previousPage();
                  }}
                  disabled={!canPreviousPage}
                >
                  {" << "}
                </Button>
                <Button
                  variant=""
                  className="btn-default tablebutton me-2 my-2"
                  onClick={() => {
                    previousPage();
                  }}
                  disabled={!canPreviousPage}
                >
                  {" < "}
                </Button>
                <Button
                  variant=""
                  className="btn-default tablebutton me-2 my-2"
                  onClick={() => {
                    nextPage();
                  }}
                  disabled={!canNextPage}
                >
                  {" > "}
                </Button>
                <Button
                  variant=""
                  className="btn-default tablebutton me-2 my-2"
                  onClick={() => {
                    nextPage();
                  }}
                  disabled={!canNextPage}
                >
                  {" >> "}
                </Button>
                <Button
                  variant=""
                  className="btn-default tablebutton me-2 my-2"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {" Next "}
                </Button>
              </span>
            </div>
          </div>
        </div>
      </Card>

    </>
  );
};
const GlobalFilter1 = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      className="form-control"
      placeholder="Search..."
    />
  );
};
