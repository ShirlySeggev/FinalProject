import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

export function GroupAdd({ addGroup }) {
    function onAddGroup(ev) {
        addGroup(ev);
    }

    return (
        <div className="groupAdd">
            <EasyEdit
                type={Types.TEXT}
                value= 'Enter new group title'
                placeholder={<FontAwesomeIcon icon={faPlus} />}
                onSave={onAddGroup}
                saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
            />
        </div>

    )
}

