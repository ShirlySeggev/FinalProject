import { Component } from "react";
import { Input, TextField } from '@material-ui/core';


export class UserLogin extends Component {
    state = {
        username: '',
        password: '',
    }


    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState({ [field]: value })
    }

    onSubmitUser = (ev) => {
        ev.preventDefault()
        const { username, password } = this.state
        const { submitUser, setMsg } = this.props
        // console.log('submit');
        // console.log(username);
        // console.log(password);
        if (!password && !username) return setMsg( 'Please fill both fields')
        if (!password)  return setMsg( 'Password is missing')
        if (!username) return setMsg( 'User name is missing')
        
    }

    render() {

        return (
            <main className="user-login-container">
                <h3>Log in to WePlan</h3>

                <form className="inputs-container">
                    <input type="text" name="username" placeholder="Enter username" autofocus="autofocus" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button onClick={this.onSubmitUser}>Log In</button>
                </form>

            </main>
        )
    }
}