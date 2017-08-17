import React from 'react' ;

const CamperItem = ( props) =>{
  console.log(props.camper.username);
  return (



      <tr>

        <td>{`${props.number}`}</td>
        <td>{`${props.camper.username}`}</td>

        <td>{`${props.camper.recent}`}</td>
        <td>{`${props.camper.alltime}`}</td>






      </tr>



   );
}
export default CamperItem;
