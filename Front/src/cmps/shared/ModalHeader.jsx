import { GrFormClose } from 'react-icons/gr';

export function ModalHeader({ title, className, closeModal }) {

    return <div className={`modalHeader ${className}`}>
        <span className="modalHeader title">{title}</span>
        <GrFormClose className="modalHeader icon" onClick={closeModal} />
    </div>
}