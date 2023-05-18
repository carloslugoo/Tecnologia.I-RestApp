import React, {Component} from 'react';

class PizzaDetail extends Component{
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
        </div>
        )
    }
}    
export default PizzaDetail;