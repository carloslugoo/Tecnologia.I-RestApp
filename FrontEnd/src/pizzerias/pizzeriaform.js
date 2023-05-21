import React, { Component } from "react";
import axios from "axios";

class PizzaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        pizzeria_name: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state.pizzeria_name)
        console.log(this.state.pizzeria_name);
        axios.post("http://127.0.0.1:8000/create/", {
        pizzeria_name: this.state.pizzeria_name,
        })
        .then((response) => {console.log(response);
        })
        .catch(function (error) {console.log(error);});
        }
    render() {
        const {pizzeria_name } = this.state;
        return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <h3>Crear Pizzeria</h3>
           Nombre pizzeria <input type="text" name="pizzeria_name" value={pizzeria_name} onChange={this.handleChange}/>
        </div>
            <input type="submit" value="Submit" />
        </form>
        );
    }
   }
export default PizzaForm;
   