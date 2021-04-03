import React from 'react'; 

function ActionCard(props) {
    return (
        
        <div class="card text-center" style={{width: '275px', height: '215px', borderRadius : '10px', zIndex: '0', 
            display: 'flex'}}> 
            <div class="card-body" style={{background : '#fff', borderRadius: '10px', zIndex: '0', display: 'flex', 
            flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h5 class="card-title" style={{color: '#00426A', fontWeight: 'bold'}}>{props.title}</h5>
                <img class="card-img" src={props.image} alt='icon' style={{height: '55px', width: '55px', objectFit: 'contain'}}/>
            </div>
            <div class="card-footer" style={{background : '#3EBCB4', color : '#fff', borderRadius: '0px 0px 10px 10px'}}>{props.footer}
            </div>
        </div>
        
    )
}

export default ActionCard; 