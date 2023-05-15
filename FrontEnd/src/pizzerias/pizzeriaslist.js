import React, {Component} from 'react';
import DummyData from './dummydata.json';
import axios from 'axios';


class PizzaList extends Component {

    state = {
        pizzeriasData:[]
    }
    
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/")
            .then((response) => {
                //console.log(response);
                this.setState({pizzeriasData: response.data})
            })
            .catch((error) => {
            console.error(error);
            });
        }

        
    render(){
        return(
        <div>
        <h6>Nombres de la pizzeria en .json</h6>
        {this.state.pizzeriasData.map(valor => <h4>{valor.pizzeria_name}- {valor.city}</h4>)}
        </div>
        )
    }
};
export default PizzaList;
