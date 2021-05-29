
import React from 'react';
import ImageUploader from 'react-images-upload';
 
export class TaskImage extends React.Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(picture);
        console.log(this.props.task);
        this.state.pictures.push(picture)
        console.log(this.state.pictures);
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={false}
                buttonText='upload'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}
