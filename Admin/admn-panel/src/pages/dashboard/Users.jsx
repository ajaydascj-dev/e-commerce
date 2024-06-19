import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { allUsers, updateRole } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { TableMenu } from "../../components";
import AlertPopUp from "../../components/AlertPopUp";
import { Table } from "@mui/material";


export default function Users() {
  const [id, setId] = React.useState();
  const [isAdmin, setAdmin] = React.useState();

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User name", width: 130 ,
      renderCell: (params) => {
        const onClick = () => {
        
          console.log(params)
          console.log(``);
        };
  
        return <div style={{ cursor: 'pointer' }} onClick={onClick}>{params.value}</div>;
      },
    },
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
      renderCell: (cellValues) => {
        return <TableMenu props={{ cellValues, setAdmin, setId }}></TableMenu>;
      },
    },
  ];

  const dispach = useDispatch();

  React.useEffect(() => {
    console.log("hi");
    dispach(allUsers());

  }, []);
  const { users, isLoading } = useSelector((store) => store.user);
  // for(let i = 0 ; i < users.length;i++) {
  //   console.log(users[i])
  // }
  return (
    <>
     {users && <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ height: 400, width: "70%" }}>
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
      </div> }
      <AlertPopUp
        alertHead="Are sure you want to switch Role?"
        alertDesc={
          !isAdmin
            ? "This user will loose all admin capability"
            : "This user will be an admin"
        }
        agreeTxt="Switch role"
        disAgreeText="Cancel"
        handleAgree={updateRole}
        values={{ id, isAdmin }}
      />
    </>
    
  );
}
