import React from "react";
import { Link } from "react-router-dom";



export default class Menu extends React.Component {

    render() {
        return(
            <div className="row">
            <div className="col-12 d-flex align-items-center bg-light fixed-top py-2 ">

          <h1> TechnoUy </h1> 

          <Link to= "/Shop " className="mx-3">Shop</Link>
          <Link to="/About " className="mx-3">About</Link>
          

         <div className="col-7"></div>
         <Link to="/Reviews " className="mx-3"> Reviews </Link>
          <Link to="/Contact " className="mx-3"><i class="bi bi-envelope"></i></Link>
          
          

          </div>
            </div>
        )
    }

}
