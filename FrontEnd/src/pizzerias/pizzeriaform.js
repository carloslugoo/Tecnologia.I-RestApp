import React, { Component } from "react";
import axios from "axios";

class PizzaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        pizzeria_name: " ",
        street: " ",
        city: " ",
        state: " ",
        zip_code: " ",
        website: " ",
        phone_number: " ",
        description: " ",
        email: " ",
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
        axios
        .post("http://127.0.0.1:8000/create/", {
        pizzeria_name: this.state.pizzeria_name,
        city: this.state.city,
        zip_code: this.state.zip_code,
        website: this.state.website,
        phone_number: this.state.phone_number,
        description: this.state.description,
        email: this.state.email,
        })
    }
    render() {
        const {
            pizzeria_name,
            street,
            city,
            state,
            zip_code,
            website,
            phone_number,
            description,
            email,
            } = this.state;
        return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <input type="text" name="pizzeria_name" value={pizzeria_name} onChange={this.handleChange}/>
        </div>
        <div>
            <p>Direccion </p><input type="text" name="street" value={street} onChange={this.handleChange}/>
        </div>
        <div>
           <p>Ciudad </p> <input type="text" name="city" value={city} onChange={this.handleChange}/>
        </div>
        <div>
            <p>Codigo Postal </p><input type="text" name="zip_code" value={zip_code} onChange={this.handleChange}/>
        </div>
        <div>
            <p>Website </p><input type="text" name="website" value={website} onChange={this.handleChange}/>
        </div>
        <div>
            <p>Phone </p> <input type="text" name="phone_number" value={phone_number} onChange={this.handleChange}/>
        </div>
        <div>
            <p>Descripcion</p> <input type="text" name="description" value={description} onChange={this.handleChange}/>
        </div>
        <div>
        <p>Email</p> <input type="text" name="email" value={email} onChange={this.handleChange}/>
        </div>
            <input type="submit" value="Submit" />
        </form>
        );
        }
   }
export default PizzaForm;
   