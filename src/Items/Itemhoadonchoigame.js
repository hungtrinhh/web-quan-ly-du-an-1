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
    const [Username, setUsername] = useState("");
    const [gameName, setGameName] = useState("");
    var db = getDatabase(app);

    var dateString = val.dateEnd;
    var dateMomentObject = moment(dateString, "DD/MM/YYYY hh:mm:ss");
    var dateObject = dateMomentObject.toDate();

    var start = new Date();
    var secondsElapsed = (dateObject - start);
    console.log(secondsElapsed > 0 ? secondsElapsed :"");
    if (!val.success) {
        console.log("da set time out");
      setTimeout(() => {
            update(ref(db, `/Game/${val.gameid}`), {
                trangThai: "Đang hoạt động"

            })
            update(ref(db, val.id), {
                success: true
            })
        }, secondsElapsed);
    }

    useEffect(() => {
        onValue(ref(db, `/Users/${val.userid}`), (snapshot) => {
            setUsername(snapshot.val().name);

        });
        onValue(ref(db, `/Game/${val.gameid}`), (snapshot) => {
            setGameName(snapshot.val().tenGame);
        });

      
    }, [])



    return (val.success && <>
        <tr id="itemus1" className={cl}>
            <td>{props.index}</td>
            <td>{Username}</td>
            <td>{gameName}</td>
            <td>{val.dateStart}</td>
            <td>{val.dateEnd}</td>
            <td>{val.cost}</td>
        </tr>
    </>

    )
}

export default Itemhoadonchoigame