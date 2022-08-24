import React from 'react'
import Table from 'react-bootstrap/Table';

const TableCom = (props) => {
  let thData = props.thead;
  let tdData = props.tableBody;
  return (
    <Table responsive className='customTable'>
      <thead>
        <tr>
          {thData.map(thData => <th key={Math.random()} >{thData}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          tdData.map((item) => {
            return (
              <tr key={Math.random()} >
                {
                  Object.values(item).map((data) => {
                    return (
                      <td key={Math.random()} >{data}</td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}

export default TableCom;




