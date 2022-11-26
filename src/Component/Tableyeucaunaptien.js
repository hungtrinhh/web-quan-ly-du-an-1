import React, { useState } from 'react'
const Tableyeucaunaptien = (props) => {
    var classVisible = props.cl;
    const [chose, setchose] = useState(1);


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

                </tbody>

            </table>







        </div >






    </>
    )
}

export default Tableyeucaunaptien