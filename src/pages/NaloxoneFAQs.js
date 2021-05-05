import React from 'react'; 
import { Card, Table } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

// contains two tables populated with faqs and answers
// linked from overdose response page
class NaloxoneFAQs extends React.Component {

    render () {
        return (
            <div style={{padding: '15px'}}>
                <Link to={{pathname: '/overdose-response'}}>
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>Naloxone FAQs</h5></div>
                </Link>
                <div className='container d-flex align-items-center flex-column' style={{padding: '15px'}}>
                    <Card style={{marginBottom: '20px'}}>
                        <div class='card-header text-left' style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold'}}>Q: What forms of Naloxone are there?</div>
                        <Card.Body class='card-body text-left' style={{background: '#fff'}}>
                            <p>There are 4 main forms of Naloxone. You can learn more about each form below.</p>
                            <div class='card-deck'>
                                <Card style={{background: '#D9E1E2', color: '#00426A', borderRadius: '10px', fontWeight: 'bold', 
                                            padding: '10px'}}>Narcan® Nasal Spray</Card>
                                <Card style={{background: '#D9E1E2', color: '#00426A', borderRadius: '10px', fontWeight: 'bold', 
                                            padding: '10px'}}>Nasal Spray Intranasal</Card>
                                <Card style={{background: '#D9E1E2', color: '#00426A', borderRadius: '10px', fontWeight: 'bold', 
                                            padding: '10px'}}>Injection (Intramuscular)</Card>
                                <Card style={{background: '#D9E1E2', color: '#00426A', borderRadius: '10px', fontWeight: 'bold', 
                                            padding: '10px'}}>Auto-Injector (EVZIO®)</Card>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                    <div class='card-header text-left' style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold'}}>Q: What is the difference between each form of Naloxone?</div>
                    <Card.Body class='card-body text-center' style={{background: '#fff'}}>
                        <h6 style={{color: '#00426A'}}>Comparing Types of Naloxone</h6>
                        <Table borderless='false'>
                            <tbody>
                                <tr >
                                    <td style={{border: 'none'}}></td>
                                    <td style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold', border: 'thin solid navy'}}>Narcan® Nasal Spray</td>
                                    <td style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold', border: 'thin solid navy'}}>Nasal Spray Intranasal</td>
                                    <td style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold', border: 'thin solid navy'}}>Injection (Intramuscular)</td>
                                    <td style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold', border: 'thin solid navy'}}>Auto-Injector (EVZIO®)</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold', border: 'thin solid navy'}}>Usage</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>Spray unit into one nostril</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>Spray 1mL (1/2 of vial) into each nostril</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>Inject 1 mL in shoulder or thigh</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>Follow English voice prompt. Press back side firmly on outer thigh for 5 seconds.</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold', border: 'thin solid navy'}}>Strength</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>4 mg/mL</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>1 mg/mL</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>0.4 mg/mL</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>2 mg/0.4 mL</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold', border: 'thin solid navy'}}>Storage</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>59-77°F away from light</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>59-86°F away from light, Fragile glass</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>68-77°F away from light, Fragile glass</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>59-77° away from light</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold', border: 'thin solid navy'}}>Cost</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>$$*</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>$$</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>$</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>$$$*</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#3EBCB4', color: '#fff', fontWeight: 'bold', border: 'thin solid navy'}}>Packaging</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>2-pack of autospray devices in individual foil packs</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>2 needleless syringes. Needs assembly with 2 mucosal atomizer devices (MAD-300) sold separately.</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>2 single use vials. Requires 2 intramuscular syringes (23G, 3cc, 1-1.5), sold separately</td>
                                    <td style={{color: '#000', border: 'thin solid navy'}}>2-pack of auto-injector devices</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>* Special pricing or donation programs available. See manufacturer website.</p>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default NaloxoneFAQs; 