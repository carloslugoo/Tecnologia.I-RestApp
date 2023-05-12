import React, {Component} from 'react';
import DummyData from './dummydata.json';

class PizzaList extends Component {
    render(){
        return(
        <div>
        <h6>Nombres de la pizzeria en .json</h6>
        {DummyData.map(valor => <h4>{valor.pizzeria_name}- {valor.city}</h4>)}
        </div>
        )
    }
}
export default PizzaList;
