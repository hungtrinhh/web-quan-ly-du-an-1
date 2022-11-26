import Table from "./Component/Table";
import { useEffect, useState } from "react";
import moment from 'moment/moment';
import { TableHoadonchoigame } from "./Component/TableHoadonchoigame";
import Loginform from "./Component/Loginform";
import Tableyeucaunaptien from "./Component/Tableyeucaunaptien";


function App() {

  var classp = "classp";

  const [isLogin, setisLogin] = useState(false)
  const [chose, setchose] = useState(1)


  return (
    <div className="App">
      {
        (isLogin) ?
          <>
            <div className="containernav">
              <p onClick={(e) => {
                setchose(1);
              }} className={chose == 1 ? classp : ''} >Danh sách User</p>

              <p onClick={(e) => {
                setchose(2);
              }} className={chose == 2 ? classp : ''} >Hoá đơn chơi game</p>

              <p onClick={(e) => {
                setchose(3);
              }} className={chose == 3 ? classp : ''} >Danh sách yêu cầu nạp tiền</p>
            </div>

            {chose == 1 && <Table key={"tableUser"} />}
            {chose == 2 && <TableHoadonchoigame key={"TableHoadonchoigame"} />}
            {chose == 3 && <Tableyeucaunaptien key={"Tableyeucaunaptien"} />}


          </>
          : <>
            <Loginform setisLogin={setisLogin} />
          </>

      }





    </div >
  );
}

export default App;
