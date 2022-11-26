import React, { useState } from 'react'
const Tableyeucaunaptien = () => {

    const [chose, setchose] = useState(1);


    var classspan = "spanChose";
    return (<>
        <div className='cardChose'>
            <span className={chose == 1 ? classspan : ''} onClick={(e) => {
                setchose(1)
            }} >Chưa xử lý</span>
            <span className={chose == 2 ? classspan : ''} onClick={(e) => {
                setchose(2);
            }} >Đã xử lý</span>

        </div>


        <div id="containerUser" style={{ marginTop: 40 }}>
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