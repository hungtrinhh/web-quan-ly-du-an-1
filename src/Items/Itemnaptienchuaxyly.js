import React from 'react'

import { getDatabase, ref, onValue, child, update } from 'firebase/database';

import { useEffect, useState } from "react";
import check from '../Image/check.png'

import app from '../FireBase/FireBase';
const Itemnaptienchuaxyly = (props) => {
    const { value, index ,searchName,cl} = props;
    const val = value.val;

    const [User, setUser] = useState("")
    var db = getDatabase(app);

    const onTrush = (e) => {
        update(ref(db, `Users/${val.userId}`), {
            sodu: User.sodu + val.cost
        });
        update(ref(db, `HoaDonNapTien/${value.key}`), {
            trangThai: true
        })



    }
    useEffect(() => {
        var db = getDatabase(app);
        onValue(ref(db, `Users/${val.userId}`), (dataSnapshot) => {
            setUser(dataSnapshot.val())
        })


    }, [])


    
    return (
     
        <tr id="itemus1" className={cl}>
            <td>{index}</td>
            <td>{User.name}</td>
            <td>{val.date}</td>
            <td>{val.cost}</td>
            <td onClick={onTrush}><img src={check}></img> </td>


        </tr>



    )
}

export default Itemnaptienchuaxyly