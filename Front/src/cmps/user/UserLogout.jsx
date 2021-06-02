import { Avatar } from "@material-ui/core";
import { Component } from "react";


export class UserLogout extends Component {


    render() {

        return (
            <main>
                <h5>Log out of your WePlan account</h5>

                <div className="user-logout-info-container">
                    <Avatar src="/broken-image.jpg" />
                    <h3>User name</h3>
                    <p>User Email</p>
                </div>
                <button>Log out</button>

            </main>
        )
    }
}