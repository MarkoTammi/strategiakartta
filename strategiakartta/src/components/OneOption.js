
import React from "react"

import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import OverlayTrigger from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'


// Component to display kehityskartta table



const dardStyle = {
    borderColor: '47aeb6',
  }

function renderTooltip(props) {
    return <Tooltip {...props}>Simple tooltip</Tooltip>;
  }

const SelectTable = (props) => {

    return (
        <div>

            <Form>
                <Form.Group>
                    <Form.Label inline column sm="8">Tähän tulee vaihtoehto</Form.Label>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                        <Form.Check inline type="radio" aria-label="radio 1" name="test"/>
                    </OverlayTrigger>
                    
                    <Form.Check inline type="radio" aria-label="radio 2" name="test" />
                    <Form.Check inline type="radio" aria-label="radio 3" name="test"/>
                    <Form.Check inline type="radio" aria-label="radio 4" name="test"/>
                </Form.Group>
            </Form>


            <Table>
                <tbody>
                    <tr>
                        <td>testi 2</td>
                        <td>
                        <Form.Check
                            custom
                            inline
                            id='kalle1'
                            type="radio"
                            name='radio'
                            />
                        <Form.Check
                            custom
                            inline
                            id='kalle2'
                            type="radio"
                            name='radio'
                            />
                        </td>
                        <td>
                            <div>
                            <Form.Check style={dardStyle} inline type="radio" aria-label="radio 1" name="test"/>
                            </div>
                        <Form.Check inline type="radio" aria-label="radio 1" name="test"/>
                        <Form.Check inline type="radio" aria-label="radio 2" name="test"/>
                        <Form.Check inline type="radio" aria-label="radio 3" name="test"/>
                        <Form.Check inline type="radio" aria-label="radio 4" name="test"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" name="testi"/>
                            <input type="radio" name="testi"/>
                            <input type="radio" name="testi"/>
                        </td>
                    </tr>
                    
            
                </tbody>
                </Table>
                </div>
                                  
 
    )
}

export default SelectTable