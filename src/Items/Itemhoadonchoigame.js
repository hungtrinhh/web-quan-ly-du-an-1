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
    const [Username, setUsername] = useState("");
    const [gameName, setGameName] = useState("");
    var db = getDatabase(app);


    useEffect(() => {
        onValue(ref(db, `/Users/${val.userid}`), (snapshot) => {
            setUsername(snapshot.val().name);
            console.log(snapshot.val().name);

        });
        onValue(ref(db, `/Game/${val.gameid}`), (snapshot) => {
            setGameName(snapshot.val().tenGame);
        });


        var timeout;
        var dateString = val.dateEnd;

        var dateMomentObject = moment(dateString, "DD/MM/YYYY hh:mm:ss");
        var dateObject = dateMomentObject.toDate();
        console.log(dateObject);

        var start = new Date();
        var secondsElapsed = (dateObject - start);
        if (timeout == null && secondsElapsed >= 0) {
            timeout = setTimeout(() => {
                update(ref(db, `/Game/${val.gameid}`), {
                    trangThai: "Đang hoat động"

                })
                update(ref(db, val.id), {
                    success: true
                })

            }, secondsElapsed);
            console.log("da setTimeout");
        }


    }, [])



    return (val.success && <>
        <tr id="itemus1">
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