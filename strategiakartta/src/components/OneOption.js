
import React from "react"

// Component to display kehityskartta table
const SelectTable = (props) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td>vaihtoehto 1</td>
                    <td><label className="radio-inline"><input type="radio" name="optradio" /></label></td>
                    <td><label className="radio-inline"><input type="radio" name="optradio" /></label></td>
                    <td><label className="radio-inline"><input type="radio" name="optradio"/></label></td>
                </tr>
            </tbody>
        </table>
    )
}

export default SelectTable