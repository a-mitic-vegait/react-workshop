---
description: "useRef Hook"
---

Refs are useful for several things, we'll explore two of the main reasons in these examples.
In order to understand why refs are useful, you need to understand [how closures work][closures].

It can be useful for things like holding on to setInterval and setTimeout IDs so they can be cleared later. Or any bit of statefulness that could change but you don't want it to cause a re-render when it does.

In our example one thing to keep in mind that the state and the ref's number are always the same. They are never out of lockstep since they're updated at the same time. However, since we delay the logging for a second, when it alerts the new values, it will capture what the state was when we first called the timeout (since it's held on to by the closure) but it will always log the current value since that ref is on an object that React consistently gives the same object back to you. Because it's the same object and the number is a property on the object, it will always be up to date and not subject to the closure's scope.

It's also useful for referencing DOM nodes.
