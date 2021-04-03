import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import { ResponsiveEmbed } from 'react-bootstrap'; 
import ResponseCard from '../components/ResponseCard'; 
import { Link } from 'react-router-dom'; 
class OverdoseResponse extends React.Component {

    render () {
        return (
            <div style={{padding: '15px'}}>
                <Link to={{pathname: '/'}}>
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>How to Give Naloxone</h5></div>
                </Link>
                <div className='container d-flex align-items-center flex-column' style={{padding: '15px 15px 15px 15px'}}>
                    <h5 style={{fontWeight: 'bold', color: '#F2C029'}}>NARCAN Nasal Spray</h5>
                    <div style={{ width: 660, height: 'auto'}}>
                        <ResponsiveEmbed aspectRatio='16by9'>
                            <embed src="https://slo-opioid.s3-us-west-2.amazonaws.com/Images+and+videos/Overdose-Response-Video.mp4" /> 
                        </ResponsiveEmbed>
                    </div>
                    <h6 className='container d-flex align-items-center flex-column'
                        style={{height: '40px', background: '#F2C029', borderRadius: '40px', color: '#00426A', 
                        fontWeight: 'bold', padding: '10px', alignItems: 'center', marginTop: '20px'}}>Overdose Response</h6>
                    <ResponseCard header='Identify opioid overdose and check for response' closedText='Signs of an Overdose'
                        image='https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/Signs-of-Overdose.png' 
                        num='1'
                        openText={
                            <div className='container d-flex align-items-left flex-column' style={{ fontWeight: 'bold'}}>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Ask</span> the person if they are okay and shout name.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Shake</span> shoulders and firmly rub the middle of their chest</p>
                                <p><h6 style={{color: '#027368', fontWeight: 'bold'}}>Check for signs of an opioid overdose:</h6> </p>
                                <ul style={{paddingLeft: '50px'}}>
                                    <li>Unconscious/not responsive</li>
                                    <li>Shallow, slowed, or abnormal breathing</li>
                                    <li>Pinpoint/very small pupils</li>
                                    <li>Gurgling/uneven snoring</li>
                                    <li>Foaming at the mouth and nose</li>
                                    <li>Blue lips, nails, or blue/grayish skin color</li>
                                    <li>Signs of drug use (needles, pills, etc.)</li>
                                </ul>
                                <h6 style={{color: '#027368', fontWeight: 'bold'}}>Lay the person on their back to receive a dose of NARCAN Nasal Spray</h6>
                            </div>} />
                    <ResponseCard header='Give Naloxone' image='https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/How-to-Give-Naloxone.png' 
                        num='2'
                        openText={
                            <div className='container d-flex align-items-left flex-column' style={{color: '#000'}}>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Remove</span> NARCAN Nasal spray from the box. Peel back the tab with the circle to open the NARCAN Nasal Spray.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Hold</span> the NARCAN Nasal Spray with your thumb on the bottom of the plunger and your first and middle fingers on either side of the nozzle.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Gently insert the tip of the nozzle into either nostril.</span> Tilt the person's head back and provide support under the neck with your hand.
                                                                                        Gently insert the tip of the nozzle into one nostril, until your fingers on either side of the nozzle are on against the bottom of the person's nose.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Press the plunger firmly</span> to give the dose of NARCAN Nasal Spray. Remove the NARCAN Nasal Spray from the nostril after giving the dose.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>After the first dose, begin rescue breathing.</span> (due to COVID-19 risk, it is recommended that a face shield be used, and/or the person giving 
                                                                                        rescue breaths lives in the same household as the individual suffering from the overdose) Rescue breathing is one of the most important steps in an
                                                                                         overdose response and restores oxygen to the brain. If you cannot safely administer rescue breaths, continue to stay with the person and monitor them until
                                                                                         emergency medical services arrives.</p>
                                <ul style={{paddingLeft: '50px'}}>
                                    <li>Lay person on their back</li>
                                    <li>Head tilt, chin lift, pinch nose</li>
                                    <li>Two breaths, normal-sized, not quick</li>
                                    <li>One breath every five seconds</li>
                                    <li>Glance down and watch their chest rise with the breath</li>
                                </ul>
                            
                            </div>
                        } />
                    <ResponseCard header='Call for emergency help' image='https://slo-opioid.s3-us-west-2.amazonaws.com/Icons/Overdose-Response.png'
                        num='3'
                        openText={
                            <div className='container d-flex align-items-left flex-column' style={{color: '#000'}}>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Call 911 for emergency medical help right away</span> Tell the operator there's a person unresponsive at your location (give an address or 
                                                                                        nearest intersection). Stay with the person until help arrives.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Move the person on their side (recovery position)</span> after giving the NARCAN Nasal Spray.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Watch the person closely.</span></p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>If the person does not respond</span> by waking up, to voice or touch, or breathing normally, another dose may be given. NARCAN Nasal Spray may be 
                                                                                        dosed every 2 to 3 minutes, if available.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>Repeat <span style={{background: '#F2C029'}}>Step 2</span> using a new NARCAN Nasal Spray to give another dose in the other nostril.</span> 
                                                                                        If additional NARCAN Nasal Sprays are available, repeat step 2 every 2 to 3 minutes until the person responds or emergency medical help arrives.</p>
                            
                            </div>
                        }/>
                    <ResponseCard header='Aftercare' 
                        num='4'
                        openText={
                            <div className='container d-flex align-items-left flex-column' >
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>It's very important that 911 is called so that the individual can receive a medical evaluation.</span> Naloxone should wear off in 20-90 
                                                                                        minutes - the short half-life of Naloxone and potentially much longer half-life of an opioid could allow the person to overdose again and 
                                                                                        stop breathing.</p>
                                <p><span style={{color: '#027368', fontWeight: 'bold'}}>When the person wakes up, they will not remember overdosing, explain what happened.</span> They may be confused or agitated, so help them 
                                                                                        stay calm by letting them know they overdosed, they were given Naloxone, and the medics are there to help them.</p>
                                
                                <h6 style={{color: '#027368', fontWeight: 'bold'}}>Person should be observed for at least four (4) hours; don't allow them to do more opioids.</h6>
                            </div>} />
                        
                </div>
            </div>  
        )
    }
}

export default OverdoseResponse; 