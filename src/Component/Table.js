import React from 'react'
import Item from '../Items/Item'
import { getDatabase, set, ref, onValue, update, remove } from 'firebase/database'
import { useEffect, useState } from "react";
import app from "../FireBase/FireBase";




const Table = (props) => {
    var db = getDatabase(app);
    var classVisible = props.cl;
    class User {
        constructor(data, key) {
            this.password = data.password;
            this.id = key
            this.phonenumber = data.phonenumber;
            this.username = data.name;
            this.sodu = data.sodu;


        }
    }


    const [list, setList] = useState([])

    useEffect(() => {


        onValue(ref(db, '/Users/'), (snapshot) => {
            var arr = [];
            snapshot.forEach(childSnapshot => {
                var user = new User(childSnapshot.val(), childSnapshot.key);
                arr.push(user);
            });


            setList((b) => {
                return arr;
            });
        });

    }, [])


    const [search, setSearch] = useState("")
    const setValue = (e) => {
        setSearch(e.target.value)

    }
    var isRenderCount = 0;;

    return (
        <div id="containerUser" className={classVisible}>
            <input placeholder='nhập tên mà bạn muốn lọc ' style={{ padding: 10, margin: 10, }} value={search} onChange={setValue} />

            <table id="tableUser" className="content-table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <th>Tên người dùng</th>
                        <th>Số điện thoại</th>
                        <th>Số dư</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((val, index) => {
                            {
                                val.sodu == 0 &&
                                    update(ref(db, `/Users/${val.id}`), {
                                        sodu: 100
                                    })
                            }
                            if (val.username == null) {
                                val.username = "";
                            }
                            val.username.indexOf(search) >= 0 && isRenderCount++
                            return val.username.indexOf(search) >= 0 && <Item key={index} val={val} ></Item>
                        })
                    }
                    {
                        isRenderCount == 0 && <tr><td style={{ columnSpan: 4, color: 'red' }} >Không có kết quả nào</td></tr>


                    }


                </tbody>

            </table>





        </div >
    )
}

export default Table