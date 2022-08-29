import React from "react";
import {useDispatch} from "react-redux";
import {registerAction} from "../../../redux/Auth/Auth.action";
import {useNavigate} from "react-router-dom";

class RegisterPage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            passwordConfirm:"",
            error:"",
        }
    }

    handleChangeNameInput =(e)=>{
        this.setState({name:e.target.value});


    }

    handleChangeEmailInput =(e)=>{
        this.setState({email:e.target.value});

    }

    handleChangePasswordInput =(e)=>{
    this.setState({password:e.target.value});

}

    handleChangeConfirmPasswordInput =(e)=>{
        this.setState({passwordConfirm:e.target.value});

    }

    register = (e) => {
        e.preventDefault();
        console.log("register");
      //  const dispatch = useDispatch();
       // const navigate = useNavigate();
        const values = {
            name: this.state.name,
            email:this.state.email,
            password: this.state.password,
        }

        console.log(values);
        // dispatch(registerAction(values,navigate("/")));
    }

    render() {
        return (
            <div>
                <div>Register Page</div>
                <form onSubmit={(e) => this.register(e)}>
                    <label>userName</label>
                    <input value={this.state.name} type="text" onChange={this.handleChangeNameInput}/>

                    <label>email</label>
                    <input value={this.state.email} type="text" onChange={this.handleChangeEmailInput}/>

                    <label>password</label>
                    <input value={this.state.password} type="password" onChange={this.handleChangePasswordInput}/>

                    <label>confirm password</label>
                    <input value= {this.state.passwordConfirm} type="password" onChange={this.handleChangeConfirmPasswordInput}/>

                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default RegisterPage;