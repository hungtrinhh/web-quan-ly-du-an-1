import React, { useState } from 'react'

const Loginform = (props) => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    var setisLogin = props.setisLogin;
    const Login = () => {
        setisLogin(username == "admin" && password == "admin")
      }
    return (
        <>
            <div className="containerLogin ">
                <h1>Login</h1>
                <form>
                    <div className="txt_field">
                        <input value={username} onChange={
                            (e) => {
                                setusername(e.target.value);
                            }
                        } className="inputPass" type="text" name="" id="" required />
                        <span></span>
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="txt_field">
                        <input value={password} onChange={(e) => {
                            setpassword(e.target.value)
                        }} className="inputPass" type="password" name="" id="pwd" required />
                        <span></span>
                        <label htmlFor="">Password</label>
                    </div>
                    <button id="btnlogin" onClick={Login} type="button">
                        Đăng nhập
                    </button>
                </form>
            </div>

        </>
    )
}

export default Loginform