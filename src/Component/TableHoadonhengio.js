import React, { useEffect, useState } from 'react'
import { onValue, getDatabase, ref } from 'firebase/database';
import app from '../FireBase/FireBase';
import ItemHoadonhengio from '../Items/ItemHoadonhengio';
import next from '../Image/next.png'
import back from '../Image/back.png'
class User {
    constructor(data, key) {
        this.password = data.password;
        this.id = key
        this.phonenumber = data.phonenumber;
        this.username = data.name;
        this.sodu = data.sodu;
    }
}
class Hoadon {

    constructor(data, key) {
        this.cost = data.cost;
        this.timeEnd = data.timeEnd;
        this.id = key;
        this.timeStart = data.timeStart;
        this.gameid = data.gameid;
        this.success = data.success;
        this.userId = data.userId;
    }
}

const TableHoadonhengio = (props) => {


    const [chose, setChose] = useState(1)
    const { cl } = props;
    var classspan = "spanChose";
    const [hoadon, setHoadon] = useState([])
    const [game, setGame] = useState([]);
    const [user, setUser] = useState([])
    const [page, setpage] = useState(10)

    useEffect(() => {
        let db = getDatabase(app);

        onValue(ref(db, 'HoaDonHenGio'), snapshot => {
            let arr = [];
            snapshot.forEach(s => {
                arr.push(new Hoadon(s.val(), s.key));
            })
            setHoadon(arr);
        })


        let arrGame = []
        let arrUser = []

        onValue(ref(db, 'Game'), (snapshot) => {
            arrGame = [];
            snapshot.forEach(childs => {
                arrGame.push(childs.val());
            })
            setGame(arrGame);
        })
        onValue(ref(db, 'Users'), (snapshot) => {
            arrUser = [];
            snapshot.forEach(childs => {
                arrUser.push(new User(childs.val(), childs.key));
            })
            setUser(arrUser)

        })

    }, [])
    if (!(game.length == 0 || user.length == 0 || hoadon.length == 0)) {

        hoadon.map((value) => {
            if (typeof (value.gameid) == 'object') {

            } else {
                value.gameid = game.find((g) => {
                    return g.id == value.gameid;
                })
            }
            if (typeof (value.userId) == 'object') {

            } else {
                value.userId = user.find((u) => {
                    return u.id == value.userId;
                })
            }
        })


    }


    var classVisible = "visibiliti";

    let index = 0;
    return (
        <div className={cl} id='containerUser'>
            <div className='cardChose'>
                <span className={chose === 1 ? classspan : ''} onClick={(e) => {
                    setpage(10);
                    setChose(1);
                }} >Chưa xử lý</span>
                <span className={chose === 2 ? classspan : ''} onClick={(e) => {
                    setChose(2);
                    setpage(10);
                }} >Đã xử lý</span>

            </div>



            <table id="tableUser" className="content-table">
                <thead>
                    <tr>
                        <td>Stt</td>
                        <th>Tên người dùng</th>
                        <th>Tên trò chơi</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Số tiền</th>
                    </tr>
                </thead>


                <tbody>
                    {

                        chose === 1 ?
                            hoadon.map((value) => {
                                let ad = !value.success && index++;
                                return !value.success && <ItemHoadonhengio key={index} val={value} index={index} cl={(index >= page - 10 && index < page) ? '' : classVisible} />
                            }) :
                            hoadon.map((value) => {
                                value.success && index++;
                                return value.success && <ItemHoadonhengio val={value} key={index} index={index} cl={(index >= page - 10 && index < page) ? '' : classVisible} />
                            })
                    }





                </tbody>

            </table>


            <div className='nextBack'>
                <img
                    onClick={e => page > 10 && setpage(page - 10)}
                    src={back}
                ></img>

                <img
                    onClick={e => page + 10 - hoadon.length < 10 && setpage(page + 10)}

                    src={next}></img>
            </div>






        </div>
    )
}

export default TableHoadonhengio