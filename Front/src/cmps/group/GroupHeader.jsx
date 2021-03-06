import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ModalHeader } from '../shared/ModalHeader';
import { GroupHeaderBgc } from './GroupHeaderBgc';

let modalPos;
export class GroupHeader extends Component {
    state = {
        toggleActions: false,
        group: {
            title: '',
        },
        toggleBgc: false,
        togglesort: false

    }

    componentDidMount() {
        const { title } = this.props.group;
        const group = { title };
        this.setState({ group });
    }

    handleChange = (ev) => {
        var group = { ...this.state.group };
        var { name, value } = ev.target;
        group[name] = value;
        this.setState({ group })
    }

    editGroupName = (ev) => {
        ev.preventDefault();
        const { group, updateGroup } = this.props;
        const copyGroup = { ...group };
        copyGroup.title = this.state.group.title;
        updateGroup(copyGroup);
    }

    changeGroupBgc = (bgcColor) => {
        console.log(bgcColor);
        const { group, updateGroup } = this.props;
        const copyGroup = { ...group };
        copyGroup.style.bgc = bgcColor;
        updateGroup(copyGroup);
    }
    sortGroupList = () => {
        const { group, updateGroup } = this.props;
        const sortedTasks = group.tasks.sort((task1, task2) => {
            return task1.title.localeCompare(task2.title)
        })
        updateGroup(sortedTasks)
    }

    toggleColor = () => {
        this.setState({ toggleBgc: !this.state.toggleBgc })
    }

    toggleActions = (ev) => {
        const { clientX, clientY } = ev
        console.log('client X,Y', { clientX, clientY })
        modalPos = { left: clientX + 'px', top: (clientY - 80) + 'px' }
        this.setState({ toggleActions: !this.state.toggleActions })
    }




    removeGroup = () => {
        const { group, removeGroup } = this.props;
        removeGroup(group.id);
    }

    render() {
        const { title } = this.state.group;
        const { style } = this.props.group;
        const { toggleActions, toggleBgc } = this.state;

        // if (!title) return <h1>Loading...</h1>
        return (
            <section className="GroupHeader group-layout" style={{ backgroundColor: style.bgc }}>
                <form onSubmit={this.editGroupName}>
                    <input className="board-header" type="text" name="title" value={title} autoComplete="off" onChange={this.handleChange} />
                </form>
                <div className="group-actions">
                    <span onClick={this.toggleActions}>{<FontAwesomeIcon icon={faEllipsisH} />}</span>
                    {toggleActions && <div className="group-menu" >
                        <ModalHeader title='List actions' closeModal={this.toggleActions} />
                        <ul style={{ ...modalPos }} className="menu-options">
                            <li onClick={this.toggleColor} >Change group background</li>
                            {toggleBgc && <GroupHeaderBgc changeGroupBgc={this.changeGroupBgc} />}
                            <li onClick={this.removeGroup}>Delete list</li>
                            <li onClick={this.sortGroupList}>Sort list by name</li>

                        </ul>
                    </div>}
                </div>
            </section >
        )
    }
}

