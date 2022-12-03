import React, { useEffect, useState } from 'react'
import { getDatabase, set, ref, onValue, update, remove } from 'firebase/database'
import app from "../FireBase/FireBase";
import moment from 'moment/moment';

class Hoadonchoigame {
    constructor(data, key) {
        this.cost = data.cost;
        this.dateEnd = data.dateEnd;
        this.id = key;
        this.dateStart = data.dateStart;
        this.gameid = data.gameid;
        this.success = data.success;
        this.userid = data.userid;
    }
}
const Itemhoadonchoigame = (props) => {
    const val = props.val
    const cl = props.cl
  

    var dateString = val.dateEnd;
    var dateMomentObject = moment(dateString, "DD/MM/YYYY hh:mm:ss");
    var dateObject = dateMomentObject.toDate();
    var db = getDatabase(app);

    var start = new Date();
    var secondsElapsed = dateObject - start;
    if (!val.success) {
        
      setTimeout(() => {
            update(ref(db, `/Game/${val.gameid}`), {
                trangThai: "Đang hoạt động"

            })
            update(ref(db, val.id), {
                success: true
            })
        }, secondsElapsed);
    }

  


    return ( 
        <tr id="itemus1" className={cl}>
            <td>{props.index}</td>
            <td>{val.userid.username}</td>
            <td>{val.gameid.tenGame}</td>
            <td>{val.dateStart}</td>
            <td>{val.dateEnd}</td>
            <td>{val.cost}</td>
        </tr>
    
    )
}

export default Itemhoadonchoigame