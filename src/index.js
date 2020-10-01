import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    UserName:
                    <input type="text" name = "username" value={this.state.username} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="text" name = "password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <LoginForm />,
    document.getElementById('root')
);