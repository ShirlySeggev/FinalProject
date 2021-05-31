import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ModalHeader } from '../shared/ModalHeader';

let modalPos;
export class GroupHeader extends Component {
    state = {
        toggleActions: false,
        group: {
            title: '',
        }
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

    // openToggle = (type) => {
    //     this.setState({ toggleActions: !this.state.toggleActions })
    //     console.log(type);
    //     const { group, removeGroup } = this.props;
    //     switch (type) {
    //         case 'BGC':
    //             brake
    //         case 'MEMBER':
    //             return
    //         case 'REMOVE': 
    //             {removeGroup(group.id)}
    //             return
    //     }
    // }

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
        const { toggleActions } = this.state;

        // if (!title) return <h1>Loading...</h1>
        return (
            <section className="group-header group-layout" >
                 <form onSubmit={this.editGroupName}>
                    <input type="text" name="title" value={title} autoComplete="off" onChange={this.handleChange} />
                </form>
                <div className="group-actions">
                    <span onClick={this.toggleActions}>{<FontAwesomeIcon icon={faEllipsisH} />}</span>
                    {toggleActions && <div className="group-menu" >
                        <ModalHeader title='List actions' closeModal={this.toggleActions} />
                        <ul style={{ ...modalPos }} className="menu-options">
                            <li /* onClick={this.openToggle(BGC)} */>Change group background</li>
                            <li /* onClick={this.openToggle(MEMBER)} */>Add a member</li>
                            <li onClick={this.removeGroup}>Delete list</li>
                            <li /* onClick={this.openToggle(SORT)} */>Sort list by</li>
                        </ul>
                    </div>}
                </div>
            </section >
        )
    }
}

