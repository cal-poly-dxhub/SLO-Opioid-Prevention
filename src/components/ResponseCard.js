import React, { useState } from 'react'; 
import { Collapse } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'; 

function ResponseCard(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className='container d-flex flex-row' 
            style={{background: '#fff', color: '#00426A', zIndex: '0',
                     borderRadius: '40px', padding: '15px 20px 15px 15px', margin: '10px', justifyContent: 'space-between', 
                     alignItems: 'space-between'}}>
            <div className='container d-flex align-items-left'>
                <button style={{height: '50px', width: '50px', borderRadius: '50%', background: '#F2C029', color: '#fff', 
                    fontWeight: 'bold', zIndex: '0', border: 'none', marginRight: '15px', flexShrink: '0'}}>{props.num}</button>
                <div> 
                    <div style={{color: '#00426A', fontWeight: 'bold'}}>{props.header}</div>
                    <div style={{color: '#3EBCB4',  fontWeight: 'bold'}}>{props.closedText}</div>
                </div>
                <div style={{marginTop: '40px'}}>
                <Collapse in={open}>
                     <div id="example-collapse-text" class="container d-flex align-items-left flex-column">
                     {props.openText}
                     </div>
                 </Collapse>   
                <FontAwesomeIcon icon={faAngleDown} size='2x' color='#61788C'
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}/>
            </div>
            </div>
            <div style={{alignItems: 'left', justifyContent: 'left', position: 'relative'}}>
                {/* <button style={{height: '135px', width: '135px', borderRadius: '50%', background: '#61788C', opacity: '0.2', 
                    fontWeight: 'bold', zIndex: '1', border: 'none', flexShrink: '0', 
                    position: 'absolute', margin: '0px 100px 100px 0px', padding: '0px 100px 100px 0px'}}></button> */}
                <img src={props.image} alt='icon' style={{height: '50px', width: '50px', zIndex: '0'}}></img>
            </div>
        </div>
    )

}; 

// , paddingBottom: '40px', marginRight: '100px', marginLeft: '50px', 
//                     marginBottom: '30px'

export default ResponseCard; 