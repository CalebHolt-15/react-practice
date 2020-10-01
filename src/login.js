import React from "react";
import axios from "axios";

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
        const options = {
            method: 'post',
            url: 'http://localhost:8081/userlogin',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }
        axios(options).then(function (res) {
            console.log(res);
        });

        event.preventDefault();
    };

    render() {
        return (
            <>
            <h1>LOGIN</h1>
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
            </>
        );
    }
}

export default LoginForm;