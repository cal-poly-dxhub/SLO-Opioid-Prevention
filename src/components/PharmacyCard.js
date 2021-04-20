import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 

function PharmacyCard(props) {
    return (
        <div className='container d-flex flex-row' 
        style={{padding: '15px', borderBottom: 'solid', borderBottomColor: '#61788C', borderBottomWidth: '0.5px', 
        background: '#fff', zIndex: '100'}}>
        <div>
            <h5 style={{color: '#3EBCB4', fontWeight: 'bold', fontSize: '28px'}}>{props.letter}</h5>
            
        </div>
            <div className='container d-flex flex-column justify-content-left'>
                <h6 style={{color: '#000', fontWeight: 'bold', fontSize: '18px', paddingTop: '2px'}}>{props.name}</h6>
                <p>{props.address}</p>
                <p>{props.isOpen} · Closes {props.closingTime} · {props.phone}</p>
                <div className='container d-flex flex-row'>
                    <div className='container d-flex flex-row' id='ifPickup' style={{visibility: 'hidden'}}>
                        <FontAwesomeIcon icon={faCheck} size='sm' color='#3EBC61' style={{marginTop: '5px', marginRight: '2px'}} />
                        <p>In-store pickup</p>
                    </div>
                    <div className='container d-flex flex-row' id='ifDelivery' style={{visibility: 'hidden'}}>
                        <FontAwesomeIcon icon={faCheck} size='sm' color='#3EBC61' style={{marginTop: '5px', marginRight: '2px'}}/>
                        <p>Delivery</p>
                    </div>
                </div>
            </div>
            <div className='container d-flex align-items-space-between'>
                <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <img src='https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/worldwide.png' alt='globe' 
                                            style={{width: '30px', height: '30px'}}/>
                    <p style={{color: '#027368'}}>WEBSITE</p>
                </div>
                <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <img src='https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/direction.png' alt='directions' 
                                            style={{width: '30px', height: '30px'}}/>
                    <p style={{color: '#027368'}}>DIRECTIONS</p>    
                </div>
            </div>
        </div>
    )
}

export default PharmacyCard; 