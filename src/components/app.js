import React, { Component } from 'react';
import axios from 'axios' ;
import Campercomp from './camperList.js';

export default class App extends Component {

constructor(props){
  super(props) ;
  this.state= {
    Last30days: [],
    Alltime: [],
    name: 'Last30days',
    display: 'All Time'
  };

}

componentWillMount(){


  axios.all([this.getTopRecent(),this.getTopAll()]).then(axios.spread((recent,alltime) => {


    this.setState({Last30days: recent.data , Alltime: alltime.data});
     //console.log(this.state.topd);


  }));

  /*var z= this.state.topd.map((num)=>{
  return "x";
});*/

}

  getTopRecent(){

  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}
  getTopAll(){

  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}


changeView(x)
{
  this.setState({
    name:x
  })
  ;
}






render() {


//  this.setState({recentd: "opo"});
  //  console.log(this.state.recentd);
  return (
    <div id="main">
    <h3 id="heading">{`Viewing Top ${this.state.name}`}</h3>
    <button onClick={()=>{ this.changeView('Last30days')}} className="btn btn-primary">Recent</button>
    <button onClick={()=>{ this.changeView('Alltime')}} className="btn btn-primary">ALL Time</button>


   <Campercomp camperProp={this.state[this.state.name]}/>




   </div>
  );
}
}
