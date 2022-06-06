---
description: "useReducer Hook"
---

So the way useReducer works is similar to useState, but instead setter function we have dispatch which allows to dispatch action objects to the store, and then useReducer function takes a reducer function.

All reducer is doing it takes in a state, it takes in an action and returns a new state which is usally done in switch statement but can be seen in if else statements also.

useReducer can also have initalState as the second argument.

It is very crutial to understand that is going to return a new state, so it is an empty object, it is critical that is a new object that you're not just affecting the old state. Because if it is the same object, it is not going to update anything.

useReducer is really testable and that is the reason why some people use it. Reducer is really pure, if you give it a same state and same action you will get always a same answer.
