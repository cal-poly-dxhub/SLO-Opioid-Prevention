import React from 'react'; 
import ActionCard from '../components/ActionCard';
import GoodSamaritan from '../components/GoodSamaritan';

 
function Home() {
    return (
        <div style={{background : '#00426A', padding: '15px'}}>
            <h4 style={{fontWeight: 'bold', color : '#3EBCB4'}}>Overdose Resources</h4>
            <div className='container d-flex align-items-center flex-column' style={{padding: '15px 15px 15px 15px'}}>
                <div class="card-deck">
                    <a href='/prevent-overdose'><ActionCard title="Preventing an Overdose" footer={<div style={{marginLeft: '43px'}}>Ways to take action
                    <small style={{color: 'transparent'}}>Text not going to show</small></div>}
                        image="https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/Preventing-an-Overdose.png"/> </a>
                    <a href='/overdose-response'><ActionCard title="How to Give Naloxone" footer="Signs of an overdose and overdose response" 
                        image="https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/How-to-Give-Naloxone.png"/></a>
                    <a href='/public-resources'><ActionCard title="Where can I get Naloxone?" footer="Find free resources and pharmacies near me" 
                        image="https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/Where-to-get-Naloxone.png"/></a>
                </div>
                <div style={{padding: '15px'}}>
                    <GoodSamaritan />
                </div>
            </div>
        </div>
    )
}

export default Home; 