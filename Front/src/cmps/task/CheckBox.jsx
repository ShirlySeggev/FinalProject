
import { Component } from 'react';

export class CheckBox extends Component {
    componentDidMount() {
    }

    check = () => {
        var isChecked = this.props.isChecked
        var checkBox = document.getElementById("myCheck");
        if (checkBox.checked === true) {
            isChecked = true
        }
        else {
            isChecked = false
        }
        console.log('isChecked: ', isChecked);
    }

    render() {

        return (

            <div className="tasks-container">
                <label htmlFor="myCheck">is Done:</label>
                <input type="checkbox" id="myCheck" onClick={this.check} ></input>
            </div>

        )
    }
}