import React from 'react' ;
import listComponent from './camperListItem' ;
import CamperItem from './itemlist.js' ;

const Campercomp = ({camperProp})=>{

console.log(camperProp) ;
const itm =camperProp.map( (camper,index) =>{

  //console.log({camper}) ;
  return  <CamperItem key={index} camper ={camper} number={index+1}/>
;
});


 return (

<div>

<table className="table table-striped">
 <thead>
   <tr>
   <th>#</th>
   <th>Username</th>

   <th>Last 30 Days</th>
   <th>ALL Time Points</th>
 </tr>
 </thead>
 <tbody>
   {itm}

  </tbody>
</table>





</div>
) ;

}

export default Campercomp  ;
