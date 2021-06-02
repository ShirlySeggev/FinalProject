import React, { Component } from 'react'
import logo from '../assets/img/wePlan.png';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserLogin } from '../cmps/user/UserLogin'
import { UserSignup } from '../cmps/user/UserSignup'
import { UserLogout } from '../cmps/user/UserLogout'
import { setUser, clearUser } from '../store/actions/user.actions'

export class LoginSignup extends Component {
    state = {
        msg: '',

        // signupCred: {
        //     username: '',
        //     fullname: '',
        //     password: '',
        //     imgUrl: ''
        // },
        // googleCreds: {},
        // isGoogle: false,

        // isNewUser: true,
        // isUploading: false,
    }

    submitUser = async (user) => {

        //     const {  isNewUser } = this.state

        //     try {
        //         const { setUser } = this.props
        //         await setUser(userCreds, isNewUser, isGoogle)
        //         const { user } = this.props
        //         if (!user) return
        //         this.setState({ msg: '' })
        //         if (this.props.user) this.props.history.push(`/board`)//then gos to the boards page
        //         else this.props.history.push(`/login`)

        //     } catch (err) {
        //         console.log(err, 'inside catch');
        //         this.setState({ msg: 'somthing went worng!' })
        //         this.props.history.push(`/login`)
        //     }

    }

    setMsg = (msg) => {
        this.setState({ ...this.state, msg })
    }




    render() {
        let logStatus = this.props.location.pathname.substr(1)
        const { msg } = this.state
        console.log(this.state);
        return (
            <section className='user-log-page'>

                <header >
                    <img src={logo} alt="logo" />
                    <h1>WePlan</h1>
                </header>

                <span>{msg}</span>

                {/* LOGIN */}
                {logStatus === 'login' && <UserLogin
                    setMsg={this.setMsg}
                    submitUser={this.submitUser} />}

                {/* SIGNUP */}
                {logStatus === 'signup' && <UserSignup
                    setMsg={this.setMsg}
                    submitUser={this.submitUser} />}

                {/* LOGOUT */}
                {logStatus === 'logout' && <UserLogout
                    setMsg={this.setMsg}
                    submitUser={this.submitUser} />}

            </section>
        )
    }

}





// const mapStateToProps = state => {
//     return {
//       users: state.userModule.users,
//       loggedInUser: state.userModule.loggedInUser,
//       isLoading: state.systemModule.isLoading
//     }
//   }
//   const mapDispatchToProps = {
//     login,
//     logout,
//     signup,
//     removeUser,
//     loadUsers
//   }


// export const LoginSignIn = connect(mapStateToProps, mapDispatchToProps)(_LoginSignIn)
