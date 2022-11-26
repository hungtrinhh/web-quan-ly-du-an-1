import React from 'react'

import { getDatabase, set, ref, onValue, update, remove } from 'firebase/database'
import { useEffect, useState } from "react";
import check from '../Image/check.png'

import app from '../FireBase/FireBase';
const Itemnaptienchuaxyly = (props) => {
    const [name, setname] = useState("")
    useEffect(() => {
        var db = getDatabase(app);
        onValue(ref(db, `Users/${props.userId}`), (dataSnapshot) => {
            setname(dataSnapshot.val().name)
        })

    }, [])



    return (
        <div>
            <tr id="itemus1">
                <td>{props.index}</td>
                <td>{name}</td>
                <td>{val.date}</td>
                <td>{val.cost}</td>
                <td><img src={check}></img> </td>


            </tr>



        </div>
    )
}

export default Itemnaptienchuaxyly