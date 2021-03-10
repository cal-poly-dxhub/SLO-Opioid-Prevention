import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import { ResponsiveEmbed } from 'react-bootstrap'; 
import ResponseCard from '../components/ResponseCard'; 
class OverdoseResponse extends React.Component {
    constructor(props) {
        super(props); 
    }


    render () {
        return (
            <div style={{padding: '15px'}}>
                <a href="/">
                    <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                    <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>How to Give Naloxone</h5></div>
                    </a>
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
                            <div className='container d-flex align-items-left flex-column'>
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
                </div>
            </div>  
        )
    }
}

export default OverdoseResponse; 