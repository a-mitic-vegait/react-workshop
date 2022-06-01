---
description: "useCallback Hook"
---

useLayoutEffect has a signature that is identical to useEffect’s, but it fires synchronously after all DOM mutations.
It implies that useEffect fires asynchronously along with all DOM mutations.

Here is what happens:

- props or state changes cause component re-rendering.
- React runs the code to update the DOM.
- useLayoutEffect runs (blocking the actual display).
- The display is visually updated.
- useEffect runs (not blocking the actual display).

The only time you should be using useLayoutEffect is to measure DOM nodes for things like animations. Or when you are using a library like D3.js
