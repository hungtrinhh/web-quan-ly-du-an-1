import React, { useEffect, useState } from 'react'
import { onValue, ref, child, getDatabase,query,equalTo,orderByChild } from 'firebase/database';
import app from '../FireBase/FireBase';
const TableDoanhthu = (props) => {
    const { cl } = props;

    const [nameGames, setnameGames] = useState([])
    var db = getDatabase(app);

    useEffect(() => {
       
        onValue(ref(db,"Game"), (snapShot) => {
            let arr = [];
            snapShot.forEach((childsnapShot) => {
                arr.push(childsnapShot.val().tenGame);
            })
            setnameGames(arr);
        })

        

    }, [])
console.log(nameGames);


    return (

        <div id="containerUser" style={{ marginTop: 30 }} className={cl}>

            <table id="tableUser" className="content-table">
                <thead>
                    <tr>
                        <td>STT</td>
                        <th>Tên Trò chơi</th>
                        <th>Doanh thu</th>
                        <th>Số lượng người chơi</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>

            </table>





        </div >




    )
}

export default TableDoanhthu