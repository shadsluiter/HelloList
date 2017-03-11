import React, {Component} from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
    constructor(props){
        super(props);
        this.state = {
            greetingName: ''
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.newPerson = this.newPerson.bind(this);
    }

    newPerson() {

        // addGreeting is the name of the function used in HelloWorldList
        // I purposely used newPerson in this component instead of addGreeting just to prove that the name does not pass through.
        // greetingName is set in state every time a new letter is typed.  setState occurs in handleUpdate to update the greetingName

        this.props.addGreeting(this.state.greetingName);
        
        // on button click, we want to set the greetingName back to blank
        this.setState({greetingName:''});
    }

    handleUpdate(event) {
        this.setState( {
            greetingName: event.target.value 
        });
    }

    render() {
        return(
            <div className = "AddGreeter">
                <input type="text" onChange={this.handleUpdate} />
                &nbsp; &nbsp;
                <button onClick={this.newPerson}>Add</button>
            </div>
        );
    }

}

export default AddGreeter;