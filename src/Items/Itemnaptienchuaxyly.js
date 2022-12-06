import React from 'react'

import { getDatabase, ref, onValue, child, update } from 'firebase/database';

import { useEffect, useState } from "react";
import check from '../Image/check.png'

import app from '../FireBase/FireBase';
const Itemnaptienchuaxyly = (props) => {
    var { value, index, searchName, cl } = props;
    const val = value.val;

    const [db, setdb] = useState(getDatabase(app))
    const [User, setUser] = useState(
        {
            name: "User đã bị xoá"
        }
    )



    useEffect(() => {

        if (val.userId == undefined || val.userId == null) {


        } else {
            onValue(ref(db, `Users/${val.userId}`), (dataSnapshot) => {

                if (dataSnapshot.val() != null) {
                    setUser(dataSnapshot.val())
                } else {

                }
            })
        }



    }, [])

    const onTrush = (e) => {
        update(ref(db, `Users/${val.userId}`), {
            sodu: User.sodu + val.cost
        });
        update(ref(db, `HoaDonNapTien/${value.key}`), {
            trangThai: true
        })

    }





    return (

        <tr id="itemus1" className={User.name == "User đã bị xoá" ? "visibiliti":cl}>
            <td>{index}</td>
            <td>{User.name}</td>
            <td>{val.date}</td>
            <td>{val.cost}</td>
            <td onClick={onTrush}><img src={check}></img></td>


        </tr>



    )
}

export default Itemnaptienchuaxyly