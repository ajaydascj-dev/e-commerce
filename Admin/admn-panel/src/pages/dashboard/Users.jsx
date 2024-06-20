import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { allUsers, closeSlide, openSlide, removeUser, updateRole } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {  SlideComponent, TableMenu } from "../../components";
import AlertPopUp from "../../components/AlertPopUp";
import dateFormater from "../../utils/formateDate";

export default function Users() {
  const [id, setId] = React.useState();
  const [isAdmin, setAdmin] = React.useState();
  const [user , setUser] = React.useState(null) ;
  const [switchRole , setSwitchRole] = React.useState(true);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User name", width: 130 ,
      renderCell: (params) => {
        const onClick = () => {
          setId(params.row._id)
          setSwitchRole(false)
          setUser(params.row)
          dispach(openSlide())
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
    dispach(allUsers());
  

  }, []);
  const { users, isLoading } = useSelector((store) => store.user);
 
  return (
    <>
     {user && <SlideComponent  props={user}/>} 
      {/* <Card/> */}
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
    
     {switchRole &&  <AlertPopUp
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
      />}
      {!switchRole && <AlertPopUp
        alertHead="Are sure you want delete this user?"
        alertDesc="This user will deleted forever"
        agreeTxt="Delete"
        disAgreeText="Cancel"
        handleAgree={removeUser}
        values={{id}}
        
      /> }
    </>
     
    
  );
}
