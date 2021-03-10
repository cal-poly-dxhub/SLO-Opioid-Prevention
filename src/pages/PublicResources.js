import React from 'react'; 
import PublicResourceCard from '../components/PublicResourceCard';
import { Button, Table } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 


class PublicResources extends React.Component {
    constructor(props) {
        super(props); 
    }


    render () {
        return (
            <div style={{padding: '15px'}}>
                <a href="/">
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>Where can I get Naloxone?</h5></div>
                    </a>
                <div className='container d-flex align-items-center flex-column'>
                    <h5 style={{fontWeight: 'bold', color: '#F2C029'}}>Free Public Resources</h5>
                    <PublicResourceCard name="SLO Opioid Safety Coalition" address="1055 Monterey Street, San Luis Obispo, CA 93405" 
                        phone="(800) 834-4636" services="Description goes here" 
                        options={<Button style={{background: '#3EBC61', color: '#fff', border: 'none', fontWeight: 'bold'}}>Deliver Naloxone to Me</Button>}/>    
                    <PublicResourceCard name="Syringe Exchange Program" address="2191 Johnson Ave, San Luis Obispo, CA 93401" 
                        phone="(805) 458-0123" services="Description goes here" 
                        options={<Table style={{color: '#3EBC61', fontWeight: 'bold'}}>
                                <tbody>
                                    <tr>
                                        <td align='right'>Pickup available</td>
                                    </tr>
                                    <tr>
                                        <td align='right'>Wednesdays 5:30 - 8:15 PM</td>
                                    </tr>
                                    </tbody></Table>}/>    
                    <h5 style={{fontWeight: 'bold', color : '#F2C029', textDecoration: 'underline'}}>Find Other Resources</h5>
                </div>
            </div>
        )
    }
}

export default PublicResources; 