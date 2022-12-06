import { get, getDatabase, push, ref, set, update } from 'firebase/database';
import moment from 'moment';
import React, { useEffect } from 'react'
import app from '../FireBase/FireBase';

const ItemHoadonhengio = (props) => {

    const { index, val, cl } = props;

    useEffect(() => {
        var db = getDatabase(app)

        if (!val.success) {

            var db = getDatabase(app);
            var dateObject = moment(val.timeStart + ':00', "DD/MM/YYYY hh:mm:ss");
            dateObject = dateObject.toDate();
            var date = new Date();
            var secondsElapsed = dateObject - date;
            var reftoday = `${date.getFullYear()}/${date.getMonth() + 1}`

            console.log('Đã set giờ bật máy :' + secondsElapsed);


            var timeout = setTimeout(() => {
               
                update(ref(db, `HoaDonHenGio/${val.id}`), {
                    success: true

                })
                push(ref(db, 'Hoadonchoigame/' + reftoday), {
                    cost: val.cost,
                    dateEnd: val.timeEnd + ':00',
                    dateStart: val.timeStart + ':00',
                    gameid: val.gameid.id + "",
                    success: false,
                    userid: val.userId.id,

                })

                update(ref(db, `Game/${val.gameid.id + ""}`), {
                    trangThai: 'Đang được chơi'


                })
            }, secondsElapsed);
        }
        return () => clearTimeout(timeout);
    }, []);





    return (
        <tr id="itemus1" className={cl}>


            <td>{index}</td>
            <td>{val.userId.username}</td>
            <td>{val.gameid.tenGame}</td>
            <td>{val.timeStart}</td>
            <td>{val.timeEnd}</td>
            <td>{val.cost}</td>
        </tr>
    )
}

export default ItemHoadonhengio