import React from 'react'; 
import { Table } from 'react-bootstrap'; 

function PreventCard(props) {
    return (
        <div className='container d-flex align-items-space-between flex-row'
            style={{background: '#fff', color: '#00426A', zIndex: '100', fontWeight: 'bold', 
                     borderRadius: '40px', padding: '15px 20px 15px 15px', margin: '10px', justifyContent: 'space-between', 
                     alignItems: 'space-between', zIndex: '0'}}>
            <div className='container d-flex align-items-left'>
            <button style={{height: '50px', width: '50px', borderRadius: '50%', background: '#F2C029', color: '#fff', 
               fontWeight: 'bold', zIndex: '0', border: 'none', marginRight: '15px', flexShrink: '0'}}>{props.num}</button>
            <div>{props.text}</div>
            </div>
            <div>
                <img src={props.image} style={{height: '50px', width: '50px'}}></img>
            </div>
        </div>
    )

}; 

export default PreventCard; 