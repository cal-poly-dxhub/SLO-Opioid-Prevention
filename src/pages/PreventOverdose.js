import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import PreventCard from '../components/PreventCard'; 
import { Link } from 'react-router-dom'; 

// creates and populates PreventCard components and displays them
class PreventOverdose extends React.Component {

    render () {
        return (
            <div style={{padding: '15px'}}>
                <Link to={{pathname: '/'}}>
                <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                <h5 style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>
                    Preventing an Overdose
                    </h5>
                </div>
                </Link>
                <div className='container d-flex align-items-center flex-column' style={{padding: '15px 15px 15px 15px'}}>
                    <div style={{ width: 660, height: 'auto' }}>
                    <ResponsiveEmbed aspectRatio='16by9'>
                        <embed src="https://slo-opioid.s3-us-west-2.amazonaws.com/Images+and+videos/Overdose-Response-Video.mp4" /> 
                    </ResponsiveEmbed>
                        </div>
                    </div>
                    <h6 className='container d-flex align-items-center flex-column' 
                        style={{height: '40px', background: '#F2C029', borderRadius: '40px', color: '#00426A', 
                        fontWeight: 'bold', padding: '10px', alignItems: 'center', zIndex: '0'}}>Ways to Take Action</h6>
                     <div className='container d-flex align-items-center flex-column' style={{zIndex: '0'}}>
                        <PreventCard num='1' text='Encourage providers and others to learn about preventing and managing opioid overdose' />
                        <PreventCard num='2' text='Ensure access to treatment for individuals who are misusing or have a substance use disorder' />
                        <PreventCard num='3' text='Expand access to Naloxone' />
                        <PreventCard num='4' text='Encourage the public to call 911' />
                        <PreventCard num='5' text='Encourage prescribers to use state prescription drug monitoring programs' />
                    </div>
                </div>        
        )
    }
}

export default PreventOverdose; 