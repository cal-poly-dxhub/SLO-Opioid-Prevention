import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
 
// functional component to display good samaritan law for a given state
// includes state name and law
function StateLaw(props) {
    return (
        <div style={{padding: '15px'}}>
            <a href="/">
                <div className='container d-flex justify-content-left'><FontAwesomeIcon icon={faAngleLeft} size='lg' color='#3EBCB4'/>
                <h5 
                    style={{fontWeight: 'bold', color : '#3EBCB4', paddingLeft: '4px'}}>Good Samaritan Law</h5></div>
            </a>
            <div id='ca' class="container d-flex align-items-center flex-column" style={{background: '#fff', padding: '15px', color: '#00426A'}}>
                <h5 style={{alignSelf: 'center', fontWeight: 'bold', marginBottom: '20px'}}>{props.name}</h5>
                <div>
                    {props.law}
                </div>
            </div>
        </div>
    )
}

export default StateLaw; 
