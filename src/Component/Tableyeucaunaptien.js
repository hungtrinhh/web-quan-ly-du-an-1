import React, { useEffect, useState, useLayoutEffect } from 'react'
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../FireBase/FireBase';
import Itemnaptienchuaxyly from '../Items/Itemnaptienchuaxyly';
import Itemhoadonnaptiendaxylt from '../Items/Itemhoadonnaptiendaxylt';
import moment from 'moment';
import next from '../Image/next.png'
import back from '../Image/back.png'

const Tableyeucaunaptien = (props) => {
    var classVisible = props.cl;
    const [chose, setchose] = useState(1);
    const [List, setList] = useState([]);
    const [soft, setsoft] = useState(1);

    const [pages, setPages] = useState(10)

    const classVisi = 'visibiliti';

    var haveLoad = 0;
    var classspan = "spanChose";
    var arrsoft = [...List];




    if (soft == 2) {
        arrsoft.sort((a, b) => {
            let datea = moment(a.val.date, "DD/MM/YYYY hh:mm:ss");
            let dateb = moment(b.val.date, "DD/MM/YYYY hh:mm:ss");
            return dateb.toDate() - datea.toDate()
        })
    } else if (soft == 3) {
        arrsoft.sort((a, b) => {
            return b.val.cost - a.val.cost
        })
    }


    useEffect(() => {
        class Hoadon {
            constructor(val, key) {
                this.val = val;
                this.key = key
            }
        }

        var db = getDatabase(app)
        onValue(ref(db, "/HoaDonNapTien/"), (snapShot) => {
            var arr = [];
            snapShot.forEach((child) => {
                arr.push(new Hoadon(child.val(), child.key))
            })
            setList((a) => { return arr });

        })
    }, [])

    return (<>

        <div className={classVisible} id="containerUser">

            <div className='cardChose'>
                <span className={chose === 1 ? classspan : ''} onClick={(e) => {
                    setPages(10);
                    setchose(1)
                }} >Chưa xử lý</span>
                <span className={chose === 2 ? classspan : ''} onClick={(e) => {
                    setPages(10);
                    setchose(2);
                }} >Đã xử lý</span>

            </div>

            <div className='naptien-option'>
                <span >Bạn muốn sắp xếp theo ?</span>
                <select onChange={e => {

                    setsoft((a) => Number(e.target.value));
                }}>
                    <option value={1}>none</option>
                    <option value={2}>Sắp xếp theo thời gian</option>
                    <option value={3}>Sắp xép theo số tiền</option>
                </select>
            </div>




            <table id="tableUser" className="content-table">


                <thead>
                    <tr>
                        <td>Stt</td>
                        <th>Tên người dùng</th>
                        <th>Thời gian yêu cầu</th>
                        <th>Số tiền</th>
                        {chose === 1 && <th> </th>}
                    </tr>
                </thead>
                <tbody>

                    {chose === 1 ?
                        arrsoft.map((value, index) => {
                            !value.val.trangThai && haveLoad++;


                            return !value.val.trangThai && <Itemnaptienchuaxyly
                                cl={(index >= pages - 10 && index < pages) ? "" : classVisi}
                                index={index} value={value} key={index} />
                        })
                        :
                        arrsoft.map((value, index) => {
                            value.val.trangThai && haveLoad++;
                            return value.val.trangThai && <Itemhoadonnaptiendaxylt
                                cl={(index >= pages - 10 && index < pages) ? "" : classVisi}
                                index={index} value={value} key={index} />
                        })

                    }

                    {
                        chose === 1 ? haveLoad === 0 && <tr><td style={{ columnSpan: 5, color: 'red' }} >Không có kết quả nào</td></tr> :
                            haveLoad === 0 && <tr><td style={{ columnSpan: 4, color: 'red' }} >Không có kết quả nào</td></tr>
                    }
                </tbody>

            </table>
            <div className='nextBack'>
                <img
                    onClick={e => pages > 10 && setPages(pages - 10)}
                    src={back}
                ></img>

                <img
                    onClick={e => pages + 10 - List.length < 10 && setPages(pages + 10)}

                    src={next}></img>
            </div>



        </div >






    </>
    )
}

export default Tableyeucaunaptien