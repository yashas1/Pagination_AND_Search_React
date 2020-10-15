import React,{ useState,useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const Posts = ({ posts, loading }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState();
  useEffect(()=>{
    setRowData(posts)

  },[posts])
  
  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
}
  return (
    <div className="ag-theme-alpine" style={ { height: 500, width: 700 } }>
      <AgGridReact
         onGridReady={onGridReady}
        rowData={rowData}>
        <AgGridColumn field="company" checkboxSelection={true}></AgGridColumn>
        <AgGridColumn field="CampainName"></AgGridColumn>
        <AgGridColumn field="CampaignType" ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Posts;
