import React, {Component} from 'react';
//import DummyData from './dummydata.json';
import axios from 'axios';
import PizzaDetail from './pizzeriadetail.js';
import PizzaForm from './pizzeriaform.js';


class PizzaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        pizzeriasData: [],
        pizzeria: " ",
        showComponent: false,
        };
        this.getPizzaDetail=this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails=this.showPizzeriaDetails.
        bind(this);
    }
    getPizzaDetail(item){
        axios.get("http://127.0.0.1:8000".concat(item.absolute_url))
         .then((response) => {
         this.setState({pizzeria: response.data})
         })
         .catch(function (error) {
         console.log(error);
         });
        }
    
    showPizzeriaDetails(item){
        this.getPizzaDetail(item);
        this.setState({ showComponent: true });
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
        <PizzaForm/>
        <h6>Lista de pizzerias:</h6>
        {this.state.pizzeriasData.map((valor) => {
        return (
        <h3 key={valor.id} onClick={() => this.
        showPizzeriaDetails(valor)}>
        {valor.pizzeria_name}, {valor.city}
        </h3>
        );
        })}
        {this.state.showComponent ? (<PizzaDetail pizzariaDetail={this.state.pizzeria} />) : null}
        </div>
        )
    }
};
export default PizzaList;
