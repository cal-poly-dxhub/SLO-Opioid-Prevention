import React, {useState } from 'react'; 
import { Form, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';


const regExpPhone = RegExp(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
)

const checkValidity = ({ isError, ...rest}) => {
    let isValid = false; 


    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        }
        else {
            isValid = true
        }
    }); 

    return isValid; 
};


function DeliveryOrderForm(props) {
    const [state , setState] = useState({ 
            name : "",
            street : "",
            city: "",
            state: "",
            zip: "", 
            phone: "",
            notes: "", 
            courseComplete: false,
            isError: {
                name: "Required field", 
                street: "Required field", 
                city: "Required field", 
                state: "Required field", 
                zip: "Required field", 
                phone: "Required field",
                courseComplete: "Required field"
            }
    })
    
    
    const handleChange = (e) => {
        e.preventDefault(); 
        const {name, value} = e.target; 
       
        
        let isError = {...state.isError}; 

        switch (name) {
            case "name": 
                isError.name = 
                    value.length > 0 ? "" : "Required field"; 
                break; 
            case "street": 
                isError.street =
                    value.length > 0 ? "" : "Required field"; 
                break; 
            case "city": 
                isError.city = 
                    value.length > 0 ? "" : "Required field"; 
                break; 
            case "state": 
                isError.state = 
                    value.length > 0 ? "" : "Required field";
                break; 
            case "zip": 
                isError.zip =
                    value.length > 0 ?  "" : "Required field";
                break; 
            
            case "phone": 
                isError.phone = 
                    regExpPhone.test(value) ? "" : "Not a valid 10-digit phone number. Use XXX-XXX-XXXX format.";
                break; 
            case "course":
                isError.courseComplete = value.length > 0 ? "" : "Required field"; 
                break; 
            default: 
                break; 
            }
            
            setState(prevState => ({
                ...prevState,
                isError, 
                [name]: value
            }));

            props.handleUpdate(name, value); 

    }

    const phoneCheck = (e) => {
        
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.display = 'block'; 
            
        }
        else {
            document.getElementById('ifYes').style.display = 'none'; 
        }
    }
    


    const handleSubmitClick = async(e) => {
        e.preventDefault(); 
        if (checkValidity(state)) {
            console.log(state); 
            const formName = state.name; 
            const formPhone = state.phone; 
            const formStreet = state.street; 
            const formCity = state.city; 
            const formState = state.state; 
            const formZip = state.zip; 
            const formNotes = state.notes; 
            const currDate = new Date(); 
            const date = (currDate.getMonth() + 1) + "/" + currDate.getDate() + "/" + currDate.getFullYear() + ", " +
                currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds(); 
            const shipment = "not shipped"; 
            await axios.post(
                'https://inwtz8r2sd.execute-api.us-west-2.amazonaws.com/dev/',
                { name: `${formName}`, 
                  phone: `${formPhone}`, 
                  street: `${formStreet}`, 
                  city: `${formCity}`, 
                  state: `${formState}`, 
                  zip: `${formZip}`, 
                  notes: `${formNotes}`, 
                  date: `${date}`, 
                  shipment: `${shipment}`}
            ); 

            props.nextStep(); 
        }
        else {
            console.log("Form is invalid!"); 
        }
    }
    
    const isError = {...state.isError}; 
    
    return (
        <div className='container d-flex align-items-left flex-column' style={{padding: '15px'}}>
             <Link to={{pathname: '/'}}>
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>Naloxone Delivery</h5></div>
            </Link>
        <div className='card'>
            <div class='card-body'>
                <div class='container d-flex align-items-left justify-content-space-around'>
                    <img src='https://slo-opioid.s3-us-west-2.amazonaws.com/Images+and+videos/Opioid+safety+coalition.png' 
                    style={{height: '50px', width: '75px'}}
                    alt='slo opioid coalition logo'/>
                    <h4 class='card-title' style={{color: '#00426A', paddingLeft: '20px', marginTop: '25px'}}>Naloxone Delivery Form</h4>
                </div>
                <p>Thank you for taking the initiative to be a Naloxone carrier. Please fill out your delivery information so a kit can be sent to you. 
                    Information used for delivery purposes only.</p>
                <Form onSubmit={handleSubmitClick} noValidate >
                    <Form.Group className='form-group text-left'>
                        <Form.Label style={{color: '#3EBCB4', fontWeight: 'bold'}}>Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            className={isError.name.length > 0 ? 'is-invalid form-control' : 'form-control'} 
                            name='name'
                            onChange={handleChange} required />
                            {isError.name.length > 0 && (
                                <span className='invalid=feedback'>{isError.name}</span>
                            )}
                    </Form.Group>
                    <Form.Group className='form-group text-left' >
                        <Form.Label style={{color: '#3EBCB4', fontWeight: 'bold'}}>Address</Form.Label>
                        <Form.Control placeholder='Street' 
                            type='text'
                            className={isError.street.length > 0 ? 'is-invalid form-control' : 'form-control'} 
                            name='street'
                            onChange={handleChange} required />
                            {isError.street.length > 0 && (
                                <span className='invalid=feedback'>{isError.street}</span>
                            )}
                        <Form.Control placeholder='City' type='text'
                            className={state.isError.city.length > 0 ? 'is-invalid form-control' : 'form-control'} 
                            name='city'
                            onChange={handleChange} required />
                            {isError.city.length > 0 && (
                                <span className='invalid=feedback'>{isError.city}</span>
                            )}
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder='State'
                                    type='text'
                                    className={isError.state.length > 0 ? 'is-invalid form-control' : 'form-control'} 
                                    name='state'
                                    onChange={handleChange} required />
                                    {isError.state.length > 0 && (
                                        <span className='invalid=feedback'>{isError.state}</span>
                                    )}
                            </Col>
                            <Col>
                                <Form.Control placeholder='Zip'
                                    type='text'
                                    className={isError.zip.length > 0 ? 'is-invalid form-control' : 'form-control'} 
                                    name='zip'
                                    onChange={handleChange} required />
                                    {isError.zip.length > 0 && (
                                        <span className='invalid=feedback'>{isError.zip}</span>
                                    )}
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label style={{color: '#3EBCB4', fontWeight: 'bold'}}>Would you like to receive texts about your delivery status?</Form.Label>
                        <Form.Row style={{paddingLeft: '10px'}}>
                            <label class="active">
                            <input type="radio" name="options" id="yesCheck" value='yes-text'  
                                onChange={phoneCheck}/> Yes
                            </label>
                        </Form.Row>
                        <Form.Row style={{paddingLeft: '10px'}}>
                            <label >
                            <input type="radio" name="options" id="noCheck" value='no-text' 
                                onChange={phoneCheck} /> No
                            </label>
                        </Form.Row>
                    </Form.Group>    
                    <Form.Group id='ifYes' style={{display: 'none'}}>
                        <Form.Label style={{color: '#3EBCB4', fontWeight: 'bold'}}>Phone number</Form.Label>
                        <Form.Control placeholder='XXX-XXX-XXXX'
                                type='text'
                                className={isError.phone.length > 0 ? 'is-invalid form-control' : 'form-control'} 
                                name='phone'
                                onChange={handleChange} required />
                                {isError.phone.length > 0 && (
                                    <span className='invalid=feedback'>{isError.phone}</span>
                                )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{color: '#3EBCB4', fontWeight: 'bold'}}>Notes/Delivery Instructions</Form.Label>
                        <Form.Control name='notes' type='text' onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check label="I acknowledge that I have completed the NARCAN Administration and Overdose Response course." 
                        name='course'
                        value='checked'
                        onChange={handleChange} required />
                    </Form.Group>
                    <button type='submit' style={{background: '#3EBCB4', color: '#fff', border: 'none', fontWeight: 'bold', padding: '5px', 
                        borderRadius: '5px'}}>
                        Finish Order
                    </button>
                </Form>
            </div>
        </div>
    </div>
        )
    }


export default DeliveryOrderForm; 