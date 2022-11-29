import React, { useEffect, useState } from 'react'
import { onValue, ref, child, getDatabase, query, equalTo, orderByChild } from 'firebase/database';
import app from '../FireBase/FireBase';
import Itemdoanhthu from '../Items/Itemdoanhthu';


const TableDoanhthu = (props) => {
    const { cl } = props;

    const [games, setGames] = useState([])
    const [Hoadon, setHoadon] = useState([]);
    var db = getDatabase(app);

    console.log(Hoadon);

    var Doanhthuarr = [];

    class Game {
        constructor(game, id) {
            this.game = game;
            this.id = id;
        }
    }

    class Doanhthu {
        Doanhthu = 0;
        constructor(Game) {
            this.Game = Game;



        }
    }
    games.map((val) => {
        Doanhthuarr.push(new Doanhthu(val, 0));

    });

    Hoadon.map((val) => {
        Doanhthuarr[Number(val.gameid) - 1].Doanhthu += val.cost;



    })
    console.log(Doanhthuarr);


    useEffect(() => {


        let arr2 = [];
        onValue(ref(db, "Hoadonchoigame/"), snapShot => {
            snapShot.forEach(snapShot1 => {
                snapShot1.forEach(snapShot2 => {
                    snapShot2.forEach(snapShot3 => {
                        arr2.push(snapShot3.val());
                    })
                })
            })
            setHoadon(arr2);
        })



        onValue(ref(db, "Game"), (snapShot) => {
            let arr1 = [];
            snapShot.forEach((childsnapShot) => {
                arr1.push(new Game(childsnapShot.val(), childsnapShot.key));
            })
            setGames(arr1);
        })
    }, [])





    return (

        <div id="containerUser" style={{ marginTop: 30 }} className={cl}>

            <table id="tableUser" className="content-table">
                <thead>
                    <tr>
                        <td>STT</td>
                        <th>Tên Trò chơi</th>
                        <th>Doanh thu</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Doanhthuarr.map((val,index) => {

                            return <Itemdoanhthu val={val} index = {index} key={index} />

                        })

                    }




                </tbody>

            </table>





        </div >




    )
}

export default TableDoanhthu