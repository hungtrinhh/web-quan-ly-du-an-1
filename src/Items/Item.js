import React from 'react'



const Item = (props) => {
const val = props.val
    return (
        <tr id="itemus1">
            <td>{val.id}</td>
            <td>{val.username}</td>
            <td>{val.phonenumber}</td>
            <td>{val.sodu}</td>
        </tr>
    )
}

export default Item