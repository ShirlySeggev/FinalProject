import { Component } from "react";


export class UserSignup extends Component{




    render(){

        return(
            <main>
                <h3>Sign Up!</h3>
                <div className="credentials-container">
                <input type="text" />
                <input type="password" placeholder="password"/>
                </div>
            </main>
        )
    }
}