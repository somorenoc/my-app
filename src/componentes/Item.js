import React from "react";
import './Item.css';

export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            escondido: true 
        }       

        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder () {
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))

    }

    render() {
        return(
            <div className="row my-4">
                <div className="col-12 d-flex align-items-center bg-light" >

                <img src={this.props.img} alt={this.props.nombre} className="band-thumb"/>
                
                <div className="pl-4">   
                <h5>{this.props.nombre} </h5>
                <p className={(this.state.escondido ? 'd-none' : '')}>{this.props.descripcion}</p>
                <p>{this.props.precio}</p>
                <button className="btn btn-outline-primary btn-sm" onClick={this.toggleEsconder}>Read more</button>

                <button className="btn btn-outline-primary btn-sm m-2" > Buy </button>
                </div>
            </div>
            </div>  
            
           
        )
    }
}
