---
description: "useImperativeHandle Hook"
---

Here's one you will likely never directly use (it happend to me that I acually needed this) but you may use libraries that use it for you. We're going to use it in conjunction with another feature called forwardRef that again, you probably won't use but libraries will use on your behalf. Let's explain first what it does using the example and then we'll explain the moving parts.

In the example above, whenever you have an invalid form, it will immediately focus the the first field that's invalid. If you look at the code, ElaborateInput is a child element so the parent component shouldn't have any access to the input contained inside the component. Those components are black boxes to their parents. All they can do is pass in props.

So in react parent components pass props down to child components. For a parent component to call a function it must be defined in a parent component and passed down well most of the time useImperativeHandle allows us to break that rule and call a function in the parent component that is defined in the child component. We are importing useRef because it is a must when you are using imperative handle hook, and also a child component ElaborateInput. Essentially what we are doing is that we are triggering a function that is defined in the child component, in our parent component. We defined a ref with useRef and pass that down it to the child component.

In the child component, we are importing useImperativeHandle and forwardRef which must be used with a hook. We are using that forwardrRef to wrap our child component and that is what is basically allowing our parent component to access functions of the child component. We then apply useImperativeHandle and pass in the ref as the first argument (ref that is coming from the parent) and the second argument which is a function call that returns an object in which you can stick in methods that are going to be available in the parent component.
