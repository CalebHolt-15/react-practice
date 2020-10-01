import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RegisterForm from "./register";
import LoginForm from "./login";

function App(){
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path={'/register'}>
                            <RegisterForm/>
                        </Route>
                        <Route path={'/login'}>
                            <LoginForm/>
                        </Route>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;