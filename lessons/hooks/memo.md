---
description: "useMemo Hook"
---

useMemo and useCallback are performance optimizations. Use them only when you already have a performance problem instead of pre-emptively. It adds unnecessary complexity otherwise and you can make performance worse or unexpected behavior.

useMemo memoizes expensive function calls so they only are re-evaluated when needed. I put in the [fibonacci] in its recursive style to simulate this. All you need to know is that once you're calling fibonacci with 30+ it gets quite computationally expensive and not something you want to do unnecessarily as it will cause pauses and jank. It will now only call fibonacci if count changes and will just the previous, memoized answer if it hasn't changed.

If we didn't have the useMemo call, everytime I clicked on the title to cause the color to change from red to green or vice versa it'd unnecessarily recalculate the answer of fibonacci but because we did use useMemo it will only calculate it when num has changed.
