import React from 'react'; 
import { Table } from 'react-bootstrap';

// functional component for "where to find naloxone" page
// include name, address, phone number, available services, pickup/delivery options
function PublicResourceCard(props) {
    return (
        <Table responsive='lg' borderless='true' style={{background: '#fff'}}>
            <thead>
                <tr>
                    <th style={{color: '#00426A'}}>{props.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{borderRight: 'thin solid black'}}>{props.address}</td>
                    <td style={{fontWeight: 'bold'}}>Services</td>
                </tr>
                <tr>
                    <td style={{borderRight: 'thin solid black'}}>{props.phone}</td>
                    <td>{props.services}</td>
                    <td>{props.options}</td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        
    )
}

export default PublicResourceCard; 