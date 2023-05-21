import React, {Component} from 'react';
import PizzaUpdate from './pizzeriaupdate.js';
class PizzaDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
        showComponent: false,
        };
        this.updatePizzeriaDetails = this.updatePizzeriaDetails.bind(this);
    }
    updatePizzeriaDetails() {
        this.setState({ showComponent: true });
        }
    render(){
        const obj = this.props.pizzariaDetail;
        return(
        <div style={{ color: "white", border: "1px solid white" }}>
            <h4>{obj.pizzeria_name}</h4>
            <ul>
                <li>Ciudad: {obj.city}</li>
                <li>Codigo postal: {obj.zip_code}</li>
                <li>Telefono: {obj.phone_number}</li>
                <p>{obj.description}</p>
            </ul>
            <div>
            <button style={{ backgroundColor: "white" }} onClick={()=> this.updatePizzeriaDetails()}>Actualizar</button>
            {this.state.showComponent ? <PizzaUpdate pizzariaUpdate={obj}/>: null}
            </div>
        </div>
        )
    }
}    
export default PizzaDetail;