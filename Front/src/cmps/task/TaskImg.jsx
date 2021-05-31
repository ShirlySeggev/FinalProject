
import React from 'react';
import ImageUploader from 'react-images-upload';
 
export class TaskImg extends React.Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        const {task}=this.props
        //console.log(task.img);
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        //console.log(picture);
        //console.log(this.props.task);
        //this.state.pictures.push(picture)
        //console.log(this.state.pictures);
        task.img = picture;
        this.props.updateTask(task)
    }

 
    render() {
        return (
            <ImageUploader
                withPreview={true}
                withIcon={false}
                buttonText='upload'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                label={''}
                maxFileSize={5242880}

            />
            
        );
    }
}
