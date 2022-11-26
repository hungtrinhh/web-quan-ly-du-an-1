import moment from 'moment';
import React from 'react'
import { getDatabase, set, ref, onValue, update, remove } from 'firebase/database'
import { useEffect, useState } from "react";
import app from "../FireBase/FireBase";
import Itemhoadonchoigame from '../Items/Itemhoadonchoigame';

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

export const TableHoadonchoigame = (props) => {
    var classVisible = props.cl;

    const [ListHoadon, setHoadon] = useState([])


    var db = getDatabase(app);








    useEffect(() => {


        onValue(ref(db, '/Hoadonchoigame/'), (snapshot) => {
            var arr = [];
            snapshot.forEach(childSnapshot => {
                childSnapshot.forEach(snapshotchild => {
                    snapshotchild.forEach(chilld => {
                        let refer = chilld.ref.toString();
                        refer = refer.slice(refer.indexOf("/Hoadonchoigame"))
                        var hoadon = new Hoadonchoigame(chilld.val(), refer);
                        arr.push(hoadon);
                    })
                })
            });
            setHoadon((a) => {
                return arr;
            });
        });
    }, [])

    return (
        <div className={classVisible} id="containerUser" style={{ marginTop: 40 }}>
            <table id="tableUser" className="content-table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <th>Tên người dùng</th>
                        <th>Tên game</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Chi phí</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ListHoadon.map((val, index) => {
                            return <Itemhoadonchoigame key={index} index={index} val={val} />
                        })
                    }
                </tbody>

            </table>





        </div >
    )
}
