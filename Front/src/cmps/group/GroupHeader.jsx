import { Component } from 'react';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ModalHeader } from '../shared/ModalHeader';
import { GroupHeaderBgc } from './GroupHeaderBgc';
import { GroupSort } from './GroupSort';

let modalPos;
export class GroupHeader extends Component {
    state = {
        toggleActions: false,
        toggleBgc: false,
        togglesort:false
        
    }

    componentDidMount() {

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
    // group.tasks.map(task=>{
    //     console.log(task);
    //    })
    sortGroupList=()=>{
        console.log('hi');
        const {group}=this.props
        const sorted=group.tasks.sort()
        console.log(sorted);
        
        
        // updateGroup(copyGroup)
    }


    render() {
        const { group } = this.props
        const { title, style } = this.props.group;
        const { toggleActions } = this.state;

        // if (!title) return <h1>Loading...</h1>
        return (
            <section className="group-header group-layout" style={{ backgroundColor: style.bgc }} >
                <EasyEdit
                    type={Types.TEXT}
                    value={title}
                    onSave={this.editGroupName}
                    saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                    cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                />
                <div className="group-actions">
                    <span onClick={this.toggleActions}>{<FontAwesomeIcon icon={faEllipsisH} />}</span>
                    {toggleActions && <div className="group-menu" >
                        <ModalHeader title='List actions' closeModal={this.toggleActions} />
                        <ul style={{ ...modalPos }} className="menu-options">
                            <li onClick={this.toggleColor} >Change group background</li>
                            {this.state.toggleBgc && <GroupHeaderBgc changeGroupBgc={this.changeGroupBgc} />}
                            <li /* onClick={this.openToggle(MEMBER)} */>Add a member</li>
                            <li onClick={this.removeGroup}>Delete list</li>
                            <li  onClick={this.sortGroupList}>Sort list by name</li>
                            
                        </ul>
                    </div>}
                </div>
            </section >
        )
    }
}

