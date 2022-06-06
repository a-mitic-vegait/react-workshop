---
description: "useState Hook"
---

Before start using any of the react hooks there are few simple rules. You should only call them at the top level functional component, they do not work in regular JS functions
nested functions, loops.

useState allows us to make our components stateful. Whereas this previously required using a class component, hooks give us the ability to write it using just functions. It allows us to have more flexible components. In our example component, everytime you click on the h1 it'll change colors. It's doing this by keeping that bit of state in a hook which is being fed in a new every render so it always has the latest state.

useState returns an array with 2 elements, and we’re using ES6 destructuring to assign names to them. The first element is the current value of the state, and the second element is a state setter function – just call it with a new value, and the state will be set and the component will re-render.

Inital state of useState is a default value, but when you are doing something there that is really costly, like manipulating the dom is the not the way to do it. So look to put here things that are already computed or they are cheap. Or you can put that in a function and it will get created only once, not on each render.
