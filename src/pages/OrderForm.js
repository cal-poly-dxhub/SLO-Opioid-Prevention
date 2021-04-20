import React from 'react';
import DeliveryOrderForm from '../components/DeliveryOrderForm';
import OrderConfirmationCard from '../components/OrderConfirmationCard'; 

class OrderForm extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            step: 1, 
            name: "", 
            phone: "", 
            street: "", 
            city: "", 
            state: "", 
            zip: ""
        }

        this.nextStep = this.nextStep.bind(this); 
        this.handleUpdate = this.handleUpdate.bind(this); 
    }

    nextStep() {
        this.setState((prevState) => {
            return { step : prevState.step + 1}; 
        })
    }

    handleUpdate = (input, value) => {
        this.setState({ [input] : value}); 
    }

    render () {
        const {step} = this.state; 
        const { name, phone, street, city, state, zip } = this.state; 
        switch (step) {
            case 1: 
                return <DeliveryOrderForm nextStep={this.nextStep} handleUpdate={this.handleUpdate} /> 
            case 2: 
                return <OrderConfirmationCard name={name} phone={phone} street={street} city={city} 
                                                state={state} zip={zip} /> 
            default: 
                return <DeliveryOrderForm nextStep={this.nextStep} handleUpdate={this.handleUpdate} /> 
        }
        
    }
}

export default OrderForm; 