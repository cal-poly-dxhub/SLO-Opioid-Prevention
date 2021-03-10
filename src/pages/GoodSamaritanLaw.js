import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'; 
import StateLaw from '../components/StateLaw'; 

class GoodSamaritanLaw extends React.Component {
    constructor(props) {
        super(props); 
    }


    render () {
        const loc = window.location.href; 
        const name = loc.substring(loc.indexOf('=') + 1); 
        
        switch (name) {
            case 'ca': 
                return <StateLaw name='California' law=
                    {<div><p><span style={{fontWeight: 'bold', color: '#00426A'}}>AB 472, 9-1-1 Good Samaritan Law, implemented January 1, 2013</span></p>
                    <p>This bill provides that it shall not be a crime for any person who experiences a drug-related overdose, as defined, who, in good faith, 
                        seeks medical assistance, or any other person who, in good faith, seeks medical assistance for the person experiencing a drug-related 
                        overdose, to be under the influence of, or to possess for personal use, a controlled substance, controlled substance analog, or drug 
                        paraphernalia, under certain circumstances related to a drug-related overdose that prompted seeking medical assistance if that person 
                        does not obstruct medical or law enforcement personnel. The bill provides that its provisions shall not affect laws prohibiting the 
                        selling, providing, giving, or exchanging of drugs, or laws prohibiting the forcible administration of drugs against a person’s will. 
                        The bill would provide that it shall not affect liability for any offense that involves activities made dangerous by the consumption 
                        of controlled substances, including, but not limited to, driving under the influence.</p>
                
                    <p>*CA AB 635, pursuant to Section 1714.22 of the California Civil Code, relating to drug overdose treatment, a person who possesses 
                        this opioid antagonist (naloxone) or acts with reasonable care in administering this opioid antagonist in good faith to a person 
                        who is experiencing or is suspected of experiencing an overdose shall not be subject to professional review, be liable in a civil action, 
                        or be subject to criminal prosecution.  Effective January 2014.</p></div>}/>; 
            default: 
                return <div></div>
        }

    }

}

export default GoodSamaritanLaw;