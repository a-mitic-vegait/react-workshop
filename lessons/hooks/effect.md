---
description: "useEffect Hook"
---

Effects are how you recreate componentDidMount, componentDidUpdate, and componentDidUnmount from React. Inside useEffect, you can do any sort of side-effect type action that you would have previously done in one of React's lifecycle method. You can do things like fire AJAX requests, integrate with third party libraries (like a jQuery plugin), fire off some telemetry, or anything else that need to happen on the side for your component.

In our case, we want our component to continually update to show the time so we use setTimeout inside our effect. After the timeout calls the callback, it updates the state. After that render happens, it schedules another effect to happen, hence why it continues to update. You could provide a second parameter of [] to useEffect (after the function) which would make it only update once. This second array is a list of dependencies: only re-run this effect if one of these parameters changed. In our case, we want to run after every render so we don't give it this second parameter. But it is better to always give it a state on which is depending to make it more readable.

So whenever you are running a timer you need a cleaning function. This function that we are returning at the end of the effect it is what gets runned to clean up the component. So if I later go and unmount the effect component, I want to make sure that timeout is cleaned so I was not calling set time when this component went out of scope. Image if you are doing heavy computations or something like that and you wanted to cancel that because that computation is not longer effective. Maybe you have a component that is making a sequence of API requests and you wanna interrupt that sequence.

Also if you are connect some type of library to react like jquerry or D3.js. The way to do that is that you would control that in component state, then from an effect whenever you had to unmount that component you would use that to clean up for jquery or d3.js otherwise you are going to get memory leaks 99 times out 100.

React is really intellegent when it comes what he chooses to rerender. React is smart enough to see like okay the effect had a state change, because I know data dosen't flow up I can just rerender the effect component and leave everything else as is.
