import React from 'react'

import { getDatabase, ref, onValue, update } from 'firebase/database';

import { useEffect, useState } from "react";


import app from '../FireBase/FireBase';
const Itemhoadonnaptiendaxylt = (props) => {
    const { value, index,cl } = props;
    const val = value.val;


    const [User, setUser] = useState("")
    var db = getDatabase(app);

   
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
    


</tr>
  )
}

export default Itemhoadonnaptiendaxylt