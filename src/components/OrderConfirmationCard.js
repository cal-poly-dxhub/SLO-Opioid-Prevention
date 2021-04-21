import React from 'react'; 
import {Card, Table, Row} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import {Link} from 'react-router-dom'; 

function OrderConfirmationCard(props) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const date = mm + '/' + dd + '/' + yyyy;

    const deliveryString = props.phone === "" ? "" : " You will receive a text when your kit is out for delivery."; 
    return (
        <div className='container d-flex align-items-left flex-column' style={{padding: '15px'}}>
            <Link to={{pathname: '/'}}>
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>Naloxone Delivery</h5></div>
                </Link>
            <Card class='card text-center'>
                <div class='card-header text-center' style={{background: 'rgba(108,194,74,0.18)'}}>
                    <img src='https://slo-opioid.s3-us-west-2.amazonaws.com/Images+and+videos/Opioid+safety+coalition.png' 
                    style={{height: '50px', width: '75px'}}
                    alt='slo opioid coalition logo'/>
                    <h5 style={{color: '#00426A'}}>Order Confirmation</h5>
                    <p style={{color: '#00426A'}}>{date}</p>
                    <p >Your order has been submitted.{deliveryString}</p>
                </div>
                <Card.Body class='card-body text-left'>
                    
                        <Table borderless='true' >
                            <Row style={{borderBottom: 'thin solid black', justifyContent: 'center'}}>
                                <td><img src='https://slo-opioid.s3-us-west-2.amazonaws.com/Images+and+videos/narcan-2-pack.png' 
                                    alt='narcan-2pack' style={{height: '150px', width: '180px'}} /></td>
                                <td>
                                    <h5 style={{color: '#3EBCB4'}}>Product details</h5>
                                    <p style={{color: '#83786F'}}>1 Narcan Kit</p>
                                    <p style={{fontStyle: 'italic', color: '#83786F'}}>Comes in a pack of 2 doses, 4mg each</p>
                                </td>
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <td>
                                    <h5 style={{color: '#3EBCB4'}}>Contact Information</h5>
                                    <p style={{color: '#83786F'}}>{props.name}</p>
                                    <p style={{color: '#83786F'}}>{props.phone}</p>
                                </td>
                                <td>
                                    <h5 style={{color: '#3EBCB4'}}>Delivery Address</h5>
                                    <p style={{color: '#83786F'}}>{props.street}</p>
                                    <p style={{color: '#83786F'}}>{props.city}</p>
                                    <p style={{color: '#83786F'}}>{props.state}, {props.zip}</p>
                                </td>
                            </Row>
                        </Table>
                    
                </Card.Body>
                <Card.Footer class='text-center' style={{background: '#E5E5E5'}}>
                    <p>Need to make changes to your order?</p>
                    <p style={{fontWeight: 'bold'}}>Email SLO Opioid Safety Coalition</p>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default OrderConfirmationCard; 