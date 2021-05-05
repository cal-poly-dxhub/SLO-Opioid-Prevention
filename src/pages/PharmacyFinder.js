import React from 'react'; 
import PharmacyCard from '../components/PharmacyCard'; 

// renders PharmacyCard components based on GoogleMap data (not implemented)
class PharmacyFinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip : '93405'
        }
    }
    render() {
        return (
            <div>
                <div style={{height: '100%', width: '50%', float: 'left', background: '#fff'}}>
                    <h3 style={{color: '#3EBCB4', fontWeight: 'bold', padding: '15px'}}>Pharmacies near me</h3>
                    <div className='container d-flex flex-row align-items-space-between'>
                        <button style={{background: '#fff', color: '#000', borderRadius: '20px', padding: '5px', marginRight: '10px'}}>Within 5 miles</button>
                        <button style={{background: '#fff', color: '#000', borderRadius: '20px', padding: '5px'}}>Delivery available</button>
                    </div>
                    <div style={{padding: '15px'}}>
                        <div style={{borderBottom: 'thin solid black', height: '40px', width: '100px'}}>
                            <h6>{this.state.zip}</h6></div>
                        <p style={{color: '#C4C4C4'}}>ZIP CODE</p>
                    </div>
                    <PharmacyCard letter='A' name='CVS Pharmacy' address='717 Marsh St' isOpen='Open' closingTime='8PM' 
                        phone='(805) 547-9888'  />
                    <PharmacyCard letter='B' name='CVS Pharmacy' address='1300 Madonna Rd' isOpen='Open' closingTime='8PM' 
                        phone='(805) 549-0993'  />
                </div>
                <div style={{height: '100%', width: '50%', float: 'right'}}>
                    hi
                </div>
            </div>
        )
    }
}

export default PharmacyFinder; 