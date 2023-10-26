import React from "react";

export default class ContactPagina extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event){
        alert("Se envio el formulario de " + this.state.nombre) ;
        event.preventDefault();
    }

    changed(event) {
        this.setState({
            nombre: event.target.value
        })
    }

    render() {
        return(
           
            <>
            <div clasName="row">
            <div className="col-12 bg-light">
                <div className="p-4">
            <h5 className="d-flex justify-content-center"> CONTACT US </h5>
           <form onSubmit={this.submitted}>
            <div className="form-group">
            <label> Name </label>
            <input type="text" className="form-control" onChange={this.changed} />
            </div>
            <div className="form-group">
                <label> Message </label>
                <textarea className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
           </form>
           </div>
          
           </div>
           </div>



           </>
        )
    }

}
