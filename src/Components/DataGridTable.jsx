import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 150, headerClassName: 'table-header' },
  {
    field: 'employee',
    headerName: 'Cynerio Friend',
    width: 150,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'link',
    headerName: 'Link',
    width: 400,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'jobs',
    headerName: 'Jobs',
    width: 300,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'skills',
    headerName: 'Skills',
    width: 300,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    headerClassName: 'super-app-theme--header',

    valueGetter: (params) => 'New',
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo({rows}) {
  React.useEffect(()=>{
    
    console.log(rows)
  })
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          fontFamily:`"Source Sans Pro", sans-serif`
        }}
      />
    </div>
  );
}