import { Component, Fragment } from 'react';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons';


export class GroupHeader extends Component {
    state = {
        toggleActions: false,
    }

    componentDidMount() {

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

    toggleActions = () => {
        this.setState({ toggleActions: !this.state.toggleActions })
    }


    editGroupName = (ev) => {
        const { group, updateGroup } = this.props;
        const copyGroup = { ...group };
        copyGroup.title = ev;
        updateGroup(copyGroup);
    }

    removeGroup = () => {
        const { group, removeGroup } = this.props;
        removeGroup(group.id);
    }



    render() {
        const { title } = this.props.group;
        const { toggleActions } = this.state;

        // if (!title) return <h1>Loading...</h1>
        return (
            <section className="group-header" >
                <EasyEdit
                    type={Types.TEXT}
                    value={title}
                    onSave={this.editGroupName}
                    saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                    cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                />
                <div className="group-actions">
                    <span onClick={this.toggleActions}>{<FontAwesomeIcon icon={faEllipsisH} />}</span>
                    {toggleActions && <Fragment>
                        <ul className="menu-options">
                            <li onClick={this.toggleActions}>X</li>
                            <li /* onClick={this.openToggle(BGC)} */>Change group background</li>
                            <li /* onClick={this.openToggle(MEMBER)} */>Add a member</li>
                            <li onClick={this.removeGroup}>{<FontAwesomeIcon icon={faTrash} />}</li>
                            <li /* onClick={this.openToggle(SORT)} */>Sort group by</li>
                        </ul>
                    </Fragment>}
                </div>
            </section >
        )
    }
}

