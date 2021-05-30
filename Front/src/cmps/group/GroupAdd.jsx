import { Component } from 'react';
import { utilService } from '../../services/util-service.js';


export class GroupAdd extends Component {
    state = {
        group: {
            title: '',
        }
    }

    handleChange = (ev) => {
        var group = { ...this.state.group }
        var { name, value } = ev.target
        group[name] = value;
        this.setState({ group })
    }

    onAddGroup = (ev) => {
        ev.preventDefault();
        const groupTitle = this.state.group.title;
        const group = this.createGroup(groupTitle);
        const { addGroup } = this.props;
        addGroup(group);
        this.clearGroup();
    }

    clearGroup = () => {
        this.setState({
            group: {
                title: '',
            }
        })
    }

    createGroup = (title) => {
        const group = {
            id: utilService.makeId(),
            title,
            tasks: [],
            style: {
                bgc: utilService.getRandomColor()
            }
        }
        return group;
    }

    render() {
        const { title } = this.state.group;
        return (
            <div className="groupAdd">
                <form onSubmit={this.onAddGroup}>
                    <input type="text" name="title" value={title} placeholder="+ Add another list" autoComplete="off" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

