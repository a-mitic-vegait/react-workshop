---
description: "useContext Hook"
---

An early problem with the React problem is called "prop drilling". This is when you have a top level component (in our case the parent component) and a child component way down in the hierarchy that need the same data (like the user object.) We could pass that data down, parent-to-child, for each of the intermediary components but that sucks because now each of LevelTwo, LevelThree, and LevelFour all have to know about the user object even when they themselves don't need it, just their children. This is prop drilling: passing down this data in unnecessary intermediaries.

Context allows you to create a wormhole where stuff goes in and a wormhole in a child component where that same data comes out and the stuff in the middle doesn't know it's there. Now that data is available anywhere inside of the UserContext.Provider. useContext just pulls that data out when given a Context object as a parameter. You don't have to use useState and useContext together (the data can be any shape, not just useState-shaped) but I find it convenient when child components need to be able to update the context as well.

In general, context adds a decent amount of complexity to an app. A bit of prop drilling is fine. Only put things in context that are truly application-wide state like user information or auth keys and then use local state for the rest. There is a design concept in react that is called compound components which puts molecul levels in context.

Often you'll use context instead of Redux or another state store. You could get fancy and use useReducer and useContext together to get a pretty great approximation of Redux-like features.

Make sure that you put things in conext is that is application level state, things like users, you have to read and write user account from all over my application.
