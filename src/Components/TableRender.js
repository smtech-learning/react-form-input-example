import React from 'react'

function TableRender(props) {
  return (
    <div>
      
          <table>
              
              {props.val.map((data, index) => {
                  return (

                      <tr>
                      <td> Name Entered : </td> 
                    <td key={index}> {data}</td> 
                    </tr>
                  
                  )
              })}
              
          </table>
    </div>
  )
}

export default TableRender;
