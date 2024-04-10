import "./courseData.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { userRows, userColumns } from "./courseDatasource";
import { Link } from "react-router-dom";
import { useState } from "react";

const CourseDatasource = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id, event) => {
    event.stopPropagation();
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={(event) => handleDelete(params.row.id, event)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="courseDatasource">
      <div className="courseDatasourceTitle">
        Add new course
        <Link
          to="/products/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        key={Math.random()} 
        className="datagrid"
        rows={data} 
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default CourseDatasource;
