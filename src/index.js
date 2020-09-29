import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//..........................................
// const user = { //json.
//
//
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
//
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
//
// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );
//
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }
//
// //....................
//
//
// //.......................
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author}/>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// function Avatar(props) {
//     return (
//         <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name}
//         />
//     );
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user}/>
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
//
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'https://placekitten.com/g/64/64',
//     },
// };

// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );

//..............................................
// function Clock(props) {
//     return(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
//     // ReactDOM.render(clock, document.getElementById('root'));
// }
//  function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()}/>
//         ,document.getElementById("root"))
//  }
//
// setInterval(tick, 1000);

// convert fxn to class /////////////////////////

class Clock extends React.Component{
    constructor(props) {  //1st
        super(props);
        this.state = {
            date: new Date()
        };
    }
        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: new Date()
            });
        }

render() {   //2nd
       return(
           <div>
               <h1>Hello, world!</h1>
               <h2>It is {this.state.date.toLocaleTimeString()}</h2>
           </div>);
    }
  }

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// setInterval(Clock,1000);