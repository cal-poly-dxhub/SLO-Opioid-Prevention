import React from 'react'; 
import axios from 'axios';
import { Table, Card, Form } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 

class OrderFulfillment extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            orders: [], 
            notShipped: [], 
            shipped: []
        }

        this.updateData = this.updateData.bind(this); 
    }

async retrieveData() {
    await axios
        .get('https://inwtz8r2sd.execute-api.us-west-2.amazonaws.com/dev/')
        .then(response => {
            console.log(response.data.Items); 
            this.setState({ orders : response.data.Items}) }); 
    }

async updateData(e) {
    //e.preventDefault(); 
    const index = e.target.value; 
    const name = this.state.orders[index].name; 
    // let orders = [...this.state.orders]; 
    // let order = {...orders[index]}; 
    // order.shipment = "shipped"; 
    // orders[index] = order; 
    // this.setState({orders}); 

    await axios.put(
        'https://inwtz8r2sd.execute-api.us-west-2.amazonaws.com/dev/', 
        { name: `${name}`});     
   
}

filterOrders() {
    this.state.orders.map((order) => {
        const shipment = order.shipment; 
        if (shipment === "not shipped") {
            this.setState({ notShipped : this.state.notShipped.concat(order)}); 
        }
        else {
            this.setState({ shipped : this.state.shipped.concat(order)}); 
        }
    })
}

async componentWillMount() {
    await this.retrieveData().then(() => this.filterOrders()); 
}

renderNotShippedTableData() {
    return this.state.notShipped.map((order, index) => {
        const { name, phone, street, city, state, zip, notes, date } = order; 
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{street}, {city}, {state} {zip}</td>
                <td>{notes}</td>
                <td>{date}</td>
                <td>
                <Form.Group>
                        <Form.Check label="Packaged with shipping label" 
                        name='shipment'
                        value={index}
                        onChange={this.updateData}/>
                    </Form.Group>
                </td>
            </tr>
        )
    }); 
}

renderShippedTableData() {
    return this.state.shipped.map((order, index) => {
        const { name, phone, street, city, state, zip, notes, date } = order; 
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{street}, {city}, {state} {zip}</td>
                <td>{notes}</td>
                <td>{date}</td>
                <td>
                <Form.Group>
                        <Form.Check label="Packaged with shipping label" 
                        name='shipment'
                        value='checked'checked/>
                    </Form.Group>
                </td>
            </tr>
        )
    }); 
}

render() {
    return (
        <div className='container d-flex align-items-left flex-column' style={{padding: '15px'}}>
            <Link to={{pathname: '/'}}>
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>Order Fulfillment Portal</h5></div>
                </Link>
            <Card style={{marginBottom: '20px'}}>
                <div class='card-header text-left' style={{background: '#29C2F2', 
                    color: '#00426A', fontWeight: 'bold', fontSize: '20px'}}>Order Processing Queue</div>
                <Card.Body style={{height: '350px', overflow: 'auto'}}>
                    <Table className='table table-striped'>
                    <tbody style={{background: '#fff'}}>
                        <tr style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold'}}>
                            <td>Name</td>
                            <td>Phone (if applicable)</td>
                            <td>Address</td>
                            <td>Delivery Notes/Instructions</td>
                            <td>Order Date</td>
                            <td>Shipment Preparation</td>
                        </tr>
                        {this.renderNotShippedTableData()}
                    </tbody>
            </Table>
                </Card.Body>
            </Card>
            <Card>
            <div class='card-header text-left' style={{background: '#6CC24A', 
                    color: '#00426A', fontWeight: 'bold', fontSize: '20px'}}>Fulfilled Orders</div>
                <Card.Body style={{height: '350px', overflow: 'auto'}}>
                    <Table className='table table-striped'>
                    <tbody style={{background: '#fff'}}>
                        <tr style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold'}}>
                            <td>Name</td>
                            <td>Phone (if applicable)</td>
                            <td>Address</td>
                            <td>Delivery Notes/Instructions</td>
                            <td>Order Date</td>
                            <td>Shipment Preparation</td>
                        </tr>
                        {this.renderShippedTableData()}
                    </tbody>
            </Table>
                </Card.Body>
            </Card>
        </div>
    )
}

}

export default OrderFulfillment; 