import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { allUsers, updateRole } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { TableMenu } from "../../components";


const handleRole = (cellValues) => {
  console.log(cellValues.id)
}
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "address",
    headerName: "Address",
    width: 130,
  },

  {
    field: "isAdmin",
    headerName: "Role",
    width: 130,
    renderCell : (cellValues) => {
      return (
        <TableMenu props={cellValues.row}></TableMenu>
      )
    }
  },
];


export default function Users() {


  const dispach = useDispatch();

  React.useEffect(() => {
    dispach(allUsers());
  }, []);
  const { users, isLoading } = useSelector((store) => store.user);
  return (
    <div style={{height:"100vh" ,width:"100%" , display:"flex" , justifyContent:"center"}}>
    <div style={{ height: 400, width: "80%" } }>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(rows) => rows._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
   
  );
}
