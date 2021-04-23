import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

const Ul = styled.ul`
  list-style: none;
  flex-flow: row nowrap;
  display: flex;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #fff;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 19; 
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        font-weight: bold;
        color: #00426A;
    }
    .inner-list {
        color: #3EBCB4; 
    }
  
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to={{pathname: '/'}}><li>Good Samaritan Law</li></Link>
      <Link to={{pathname: "/prevent-overdose"}}><li>Preventing an Overdose</li></Link>
      <Link to={{pathname: "/overdose-response"}}><li>How to Give Naloxone
            <li className="inner-list">Signs of an Overdose</li>
            <li className="inner-list">Giving Naloxone</li>
            <li className="inner-list">Calling Emergency Medical Help</li>
            <Link to={{pathname: "/faqs"}}><li className="inner-list">Naloxone FAQs</li></Link>        
      </li></Link>
      <Link to={{pathname: "/public-resources"}}><li>Where can I get Naloxone
            <li className="inner-list">Free Public Resources</li>
            <Link to={{pathname: "/pharmacy-finder"}}><li className="inner-list">Pharmacy Finder</li></Link>
      </li></Link>
      <Link to={{pathname: '/order-fulfillment'}}><li>Naloxone Order Fulfillment</li></Link>
    </Ul>
  )
}

export default RightNav