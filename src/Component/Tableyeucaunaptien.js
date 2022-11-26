import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, child, update } from 'firebase/database';
import app from '../FireBase/FireBase';
import Itemnaptienchuaxyly from '../Items/Itemnaptienchuaxyly';
import Itemhoadonnaptiendaxylt from '../Items/Itemhoadonnaptiendaxylt';


const Tableyeucaunaptien = (props) => {
    var classVisible = props.cl;
    const [chose, setchose] = useState(1);
    const [List, setList] = useState([]);
    class Hoadon {
        constructor(val, key) {
            this.val = val;
            this.key = key
        }
    }
    var db = getDatabase(app);

    useEffect(() => {
       
        onValue(ref(db, "/HoaDonNapTien/"), (snapShot) => {
            var arr = [];
            snapShot.forEach((child) => {
              
                arr.push(new Hoadon(child.val(), child.key))
                
            })
            setList((a) => { return arr });
           
        })



    }, [])




    var classspan = "spanChose";
    return (<>



        <div className={classVisible} id="containerUser" style={{ marginTop: 40 }}>

            <div className='cardChose'>
                <span className={chose == 1 ? classspan : ''} onClick={(e) => {
                    setchose(1)
                }} >Chưa xử lý</span>
                <span className={chose == 2 ? classspan : ''} onClick={(e) => {
                    setchose(2);
                }} >Đã xử lý</span>

            </div>

            <table id="tableUser" className="content-table">
                <thead>
                    <tr>
                        <td>Stt</td>
                        <th>Tên người dùng</th>
                        <th>Thời gian yêu cầu</th>
                        <th>Số tiền</th>
                        {chose == 1 && <th> </th>}
                    </tr>
                </thead>

                <tbody>
                    {chose == 1 ?
                        List.map((value, index) => {
                                console.log('load');
                            return !value.val.trangThai && <Itemnaptienchuaxyly index={index} value={value} key={index} />

                        }) :
                        List.map((value, index) => {

                            return value.val.trangThai && <Itemhoadonnaptiendaxylt index={index} value={value} key={index} />

                        })


                    }



                </tbody>

            </table>







        </div >






    </>
    )
}

export default Tableyeucaunaptien