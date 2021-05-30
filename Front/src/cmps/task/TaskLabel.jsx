import { Component } from 'react';
import { ModalHeader } from '../shared/ModalHeader.jsx';
import { BsPencil } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';

export class TaskLabel extends Component {
    state = {
        labels: [
            { id: 'l101', color: "#61bd4f", title: '', isPicked: false },
            { id: 'l102', color: "#f2d602", title: '', isPicked: false },
            { id: 'l103', color: "#f99f1b", title: '', isPicked: false },
            { id: 'l104', color: "#eb5a46", title: '', isPicked: false },
            { id: 'l105', color: "#c377e0", title: '', isPicked: false },
            { id: 'l106', color: "#1f79bf", title: '', isPicked: false },
        ],
    }

    handleChange = (ev, labelId, idx) => {
        ev.preventDefault();
        console.log(labelId, ev.target.value, idx);
        const title = ev.target.value;
        const newLabels = [...this.state.labels];
        newLabels[idx].title = title;
        console.log(newLabels);
        this.setState({ labels: newLabels })

        // const { updateTask, task } = this.props;
        // const newTask = { ...task }
        // console.log(newTask);
    }

    onPickLabel = (idx) => {
        console.log(idx);
        const newLabels = [...this.state.labels];
        newLabels[idx].isPicked = !this.state.labels[idx].isPicked;
        console.log(newLabels);
        this.setState({ labels: newLabels })
    }

    updateLabel = () => {
        const { updateTask, task, toggleTaskLabel } = this.props;
        const newTask = { ...task }
        updateTask(newTask);
        toggleTaskLabel();
    }


    render() {
        const { labels } = this.state;
        const { toggleTaskLabel, /* modalPos */ } = this.props;
        // console.log(modalPos);
        return (
            <section className="TaskLabel-modal" /* style={{ modalPos }} */>
                <ModalHeader title='Labels' closeModal={toggleTaskLabel} />
                {labels.map((label, idx) => {
                    return (
                        <div className="label-container" key={label.id}>
                            <input
                                className={`TaskLabel ${label.isPicked && 'picked'}`} style={{ backgroundColor: label.color }}
                                value={label.title}
                                onClick={() => this.onPickLabel(idx)}
                                onChange={(ev) => this.handleChange(ev, label.id, idx)}
                            >
                            </input>
                            <BsPencil />
                            <BiCheck onClick={this.updateLabel} />
                        </div>
                    )
                })
                }
            </section>
        )
    }
}
