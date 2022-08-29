import React from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginAction, registerAction} from "../../../redux/Auth/Auth.action";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            error:"",

        }

    }

    handleChangeUsernameInput = (e) => {
        this.setState({username:e.target.value});
    }

    handleChangeEmailInput = (e) => {
        this.setState({email:e.target.value});
    }

    handleChangePasswordInput = (e) => {
        this.setState({password:e.target.value});
    }

    login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const values = {
            username:this.state.username,
            email:this.state.email,
            password: this.state.password,
        }
        dispatch(loginAction(values,navigate("/")));
    }

    render() {
        return (
            <div>
              {this.state.password}

                <div>Login Page</div>
                <form onSubmit={this.login}>

                    <label>username</label>
                    <input value={this.state.username} type="text" onChange={this.handleChangeUsernameInput}/>


                    <label>email</label>
                    <input value={this.state.email} type="text" onChange={this.handleChangeEmailInput}/>

                    <label>password</label>
                    <input value={this.state.password} type="password" onChange={this.handleChangePasswordInput}/>

                    <button type="submit">login</button>

                </form>
            </div>
        )
    }
}
export default LoginPage;

