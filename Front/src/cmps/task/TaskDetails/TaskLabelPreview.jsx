import { Fragment, Component } from 'react';

export class TaskLabelPreview extends Component {

    state = {
        isOpen: false
    }

    toggleLabel = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        const { labelIds } = this.props;
        const { isOpen } = this.state;
        return (
            <Fragment>
                {labelIds.map(label => {
                    return label.isPicked ?
                        <div className={`label ${isOpen && 'open'}`} onClick={this.toggleLabel} style={{ backgroundColor: label.color }} key={label.id}><span>{label.title}</span></div> :
                        ''
                })}
            </Fragment>

        )
    }
}