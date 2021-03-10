import React from 'react';

class OrderForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: "", 
            street: "", 
            city: "", 
            state: "", 
            zip: 00000, 
            phone: "", 
            notes: ""
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render () {
        return (
            <form></form>
        )
    }
}

export default OrderForm; 