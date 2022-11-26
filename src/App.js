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
  var classVisible = "visibiliti";

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

            <Table key={"tableUser"} cl={chose == 1 ? "" : classVisible} />
            <TableHoadonchoigame cl={chose == 2 ? "" : classVisible} key={"TableHoadonchoigame"} />
            <Tableyeucaunaptien cl={chose == 3 ? "" : classVisible} key={"Tableyeucaunaptien"} />


          </>
          : <>
            <Loginform setisLogin={setisLogin} />
          </>

      }





    </div >
  );
}

export default App;
