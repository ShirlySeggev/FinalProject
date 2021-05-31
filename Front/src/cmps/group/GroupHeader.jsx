import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ModalHeader } from '../shared/ModalHeader';
import { GroupHeaderBgc } from './GroupHeaderBgc';
import { GroupSort } from './GroupSort';

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

    toggleColor = (ev) => {
        this.setState({ isBgc: !this.state.isBgc })
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
    // group.tasks.map(task=>{
    //     console.log(task);
    //    })
    sortGroupList = () => {
        console.log('hi');
        const { group } = this.props
        const sorted = group.tasks.sort()
        console.log(sorted);


        // updateGroup(copyGroup)
    }


    render() {
        const { group } = this.props
        const { title, style } = this.props.group;
        const { toggleActions } = this.state;

        // if (!title) return <h1>Loading...</h1>
        return (
            <section className="group-header group-layout" style={{ backgroundColor: style.bgc }}>
                <form onSubmit={this.editGroupName}>
                    <input type="text" name="title" value={title} autoComplete="off" onChange={this.handleChange} />
                </form>
                <div className="group-actions">
                    <span onClick={this.toggleActions}>{<FontAwesomeIcon icon={faEllipsisH} />}</span>
                    {toggleActions && <div className="group-menu" >
                        <ModalHeader title='List actions' closeModal={this.toggleActions} />
                        <ul style={{ ...modalPos }} className="menu-options">
                            <li onClick={this.toggleColor} >Change group background</li>
                            {this.state.toggleBgc && <GroupHeaderBgc changeGroupBgc={this.changeGroupBgc} />}
                            <li /* onClick={this.openToggle(MEMBER)} */>Add a member</li>
                            <li onClick={this.removeGroup}>Delete list</li>
                            <li onClick={this.sortGroupList}>Sort list by name</li>

                        </ul>
                    </div>}
                </div>
            </section >
        )
    }
}

