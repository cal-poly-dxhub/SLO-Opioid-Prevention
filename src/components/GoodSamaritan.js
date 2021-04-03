import React, { useState } from 'react'; 
import { Collapse, Table } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 

function GoodSamaritan(props) {
    const [open, setOpen] = useState(false);
    
    return (
        <div class="card" style={{zIndex: '0'}}> 
            <h5 class="card-header text-center" style={{background: '#F2C029', color: '#00426A', fontWeight: 'bold'}}>The Good Samaritan Law</h5>
            <div class="card-body text-left" style={{background : '#fff', zIndex: '0'}}>
                The Good Samaritan Law protects people from arrest for possession of drugs/paraphernalia 
                when they call 911 seeking emergency medical services for an overdose. All 50 states and 
                the District of Columbia have a Good Samaritan law in addition to Federal laws for specific circumstances. 
                <button style={{background: '#fff', textDecoration: 'underline', borderStyle: 'none'}} 
                    onClick={() => setOpen(!open)
                                    }
                    aria-controls="example-collapse-text"
                    aria-expanded={open}> Learn about your state’s laws.</button>
                <Collapse in={open}>
                    <div id='example-collapse-text' class="container d-flex justify-content-space-evenly align-items-center flex-column">
                        <Table id='state-list' responsive='sm' borderless='true' style={{color: '#00426A', fontWeight: 'bold', margin: 'auto', width: '85%'}}>
                            <tbody>
                                <tr>
                                    <td>Alabama</td>
                                    <td>Louisiana</td>
                                    <td>Ohio</td>
                                </tr> 
                                <tr>
                                    <td>Alaska</td>
                                    <td>Maine</td>
                                    <td>Oklahoma</td>
                                </tr>
                                <tr>
                                    <td>Arizona</td>
                                    <td>Maryland</td>
                                    <td>Oregon</td>
                                </tr>
                                <tr>
                                    <td>Arkansas</td>
                                    <td>Massachusetts</td>
                                    <td>Pennsylvania</td>
                                </tr>
                                <tr>
                                    <td><Link style={{color: '#00426A'}} to=
                                        {{pathname: '/good-samaritan', 
                                          search: '?state=ca'
                                        }}>California</Link></td>
                                    <td>Michigan</td>
                                    <td>Rhode Island</td>
                                </tr>
                                <tr>
                                    <td>Colorado</td>
                                    <td>Minnesota</td>
                                    <td>South Carolina</td>
                                </tr>
                                <tr>
                                    <td>Connecticut</td>
                                    <td>Mississippi</td>
                                    <td>South Dakota</td>
                                </tr>
                                <tr>
                                    <td>Delaware</td>
                                    <td>Missouri</td>
                                    <td>Tennessee</td>
                                </tr>
                                <tr>
                                    <td>Florida</td>
                                    <td>Montana</td>
                                    <td>Texas</td>
                                </tr>
                                <tr>
                                    <td>Georgia</td>
                                    <td>Nebraska</td>
                                    <td>Utah</td>
                                </tr>
                                <tr>
                                    <td>Hawaii</td>
                                    <td>Nevada</td>
                                    <td>Vermont</td>
                                </tr>
                                <tr>
                                    <td>Idaho</td>
                                    <td>New Hampshire</td>
                                    <td>Virginia</td>
                                </tr>
                                <tr>
                                    <td>Illinois</td>
                                    <td>New Jersey</td>
                                    <td>Washington</td>
                                </tr>
                                <tr>
                                    <td>Indiana</td>
                                    <td>New Mexico</td>
                                    <td>West Virginia</td>
                                </tr>
                                <tr>
                                    <td>Iowa</td>
                                    <td>New York</td>
                                    <td>Wisconsin</td>
                                </tr>
                                <tr>
                                    <td>Kansas</td>
                                    <td>North Carolina</td>
                                    <td>Wyoming</td>
                                </tr>
                                <tr>
                                    <td>Kentucky</td>
                                    <td>North Dakota</td>
                                    <td>District of Columbia</td>
                                </tr>
                            </tbody>
                        </Table> 
                        </div>
                </Collapse>
            </div>
            
        </div>
        
    )
}

export default GoodSamaritan; 