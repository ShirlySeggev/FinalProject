import { Component } from 'react';
import { BsTextLeft } from 'react-icons/bs';
import { utilService } from '../../../services/util-service';
import { formatDistance } from 'date-fns'



export class TaskComment extends Component {
    state = {
        comment: {
            txt: ''
        },
        toggleUpdate: false
    }

    componentDidMount() {

    }

    toggleUpdate = () => {
        this.setState({ toggleUpdate: !this.state.toggleUpdate })
    }

    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => {
            return {
                comment: {
                    ...prevState.comment,
                    [name]: value
                }
            }
        })
    }

    saveComment = () => {
        const comment = this.addComment();
        console.log(comment);
        const { task, updateTask } = this.props;
        const newTask = { ...task };
        if (newTask.coments) newTask.coments.unshift(comment);
        else {
            newTask.coments = [];
            newTask.coments.unshift(comment);
        }
        updateTask(newTask);
        this.clearComment();
        console.log(newTask);
        // newTask.comments.push(comment);
        // updateTask(newTask);
        // this.props.updateTask(newTask);
        // this.toggleUpdate();
    }

    addComment = () => {
        const newComment = {
            id: utilService.makeId(),
            createdAt: Date.now(),
            txt: this.state.comment.txt,
            byMember: {
                _id: "u101",
                fullname: "Neil Seggev",
                imgUrl: "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            }
        }
        return newComment;
    }

    clearComment = () => {
        const comment = {
            txt: ''
        }
        this.setState({ comment });
    }

    render() {
        const { comment, toggleUpdate } = this.state;
       
        return (
            <section className="taskDetails-coment">
                <textarea value={comment.txt} name="txt" placeholder="Write a comment..." spellCheck="false" onChange={this.handleChange}
                    onFocus={this.toggleUpdate}
                />
                {toggleUpdate && <button className="primary-btn" onClick={this.saveComment}>Save</button>}



            </section>
        )
    }

}