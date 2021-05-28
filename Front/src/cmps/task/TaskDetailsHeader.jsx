import { Component } from 'react';
import EasyEdit, { Types } from 'react-easy-edit';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';


export class TaskDetailsHeader extends Component {
    state = {
        title: null
    }

componentDidMount (){
    this.setState ({title: this.props.task.title})
}

changeTitle = (title)=> {
console.log(title);

this.props.onUpdateTask
}

    render() { 
        const { title } = this.state
        return (
            <header>
                <EasyEdit
                    type={Types.TEXT}
                    value={title}
                    hideSaveButton={true}
                    onBlur={this.changeTitle}
                />
                <h3>in list -- group title --</h3>
            </header>
        )
    }

}
