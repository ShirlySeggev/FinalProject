import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { utilService } from '../../services/util-service.js';


export function GroupAdd({ addGroup }) {
    function onAddGroup(ev) {
        const group = createGroup(ev);
        addGroup(group);
    }

    function createGroup(title) {
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

    return (

        <div className="groupAdd">
            <EasyEdit
                type='text'
                value= ''
                editMode = {false}
                // placeholder={<FontAwesomeIcon icon={faPlus} />}
                placeholder='Add group title'
                onSave={onAddGroup}
                saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
            />
        </div>

    )
}

