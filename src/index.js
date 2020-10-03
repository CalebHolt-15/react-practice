// eslint-disable-next-line
import React from 'react';
import { useState, useEffect } from 'react';


let key = 'z';
let {[key]: foo} = {z: 'bar'};

// console.log(foo); // "bar"
// console.log([key]); //

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
// console.log(a); //
// console.log(b); //
//
// console.log(rest); // { c: 30, d: 40 }

let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
// console.log(self); //
// console.log(b); //


// ....hooks.....

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}