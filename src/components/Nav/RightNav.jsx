import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  flex-flow: row nowrap;
  display: flex;
  li {
    padding: 18px 10px;
  }
  
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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
      <li>Good Samaritan Law</li>
      <li>Preventing an Overdose</li>
      <li>How to Give Naloxone
            <li className="inner-list">Signs of an Overdose</li>
            <li className="inner-list">Giving Naloxone</li>
            <li className="inner-list">Calling Emergency Medical Help</li>
            <li className="inner-list">Naloxone FAQs</li>        
      </li>
      <li>Where can I get Naloxone
            <li className="inner-list">Free Public Resources</li>
            <li className="inner-list">Pharmacy Finder</li>
      </li>
    </Ul>
  )
}

export default RightNav