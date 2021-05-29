
import { Component } from 'react';
import DatePicker from 'react-date-picker';
import React from 'react';


export class  TaskDueDate extends Component {
    state = {
        date: new Date(),
    
      };
      componentDidMount() {
        console.log(this.state.date);
    }
    
      onChange = date => {
        this.setState({ date });
    console.log(date);
    this.props.task.dueDate=date
      };
      
      render() {
        return (
          <div>
            <DatePicker onChange={this.onChange} value={this.state.date} />
    
          </div>
        );
      }
}
