import { connect } from 'react-redux';
import { TaskList } from './TaskList';
import { GroupHeader } from './GroupHeader';
import { AddTask } from './AddTask';



function _GroupPreview({ group }) {
    const { id, title, tasks } = group;

    return (
        <section className="group-preview" >
            <div>
                <h1>Group title: {title}</h1>
                {/* <GroupHeader group={group} /> */}
                <TaskList tasks={tasks} />
                {/* <AddTask /> */}



            </div>
        </section>
    )
}


function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = {

}

export const GroupPreview = connect(mapStateToProps, mapDispatchToProps)(_GroupPreview)






