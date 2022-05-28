---
title: "ESLint"
description: "An essential part of maintaining a project a long time is discipline in coding standards and avoiding antipatterns. ESLint is a great tool that helps you do just that."
---

On top of Prettier which takes of all the formatting, you may want to enforce some code styles which pertain more to usage: for example you may want to force people to never use `with` which is valid JS but ill advised to use. [ESLint][eslint] comes into play here. It will lint for this problems.

First of all, run `npm install -D eslint@8.8.0 eslint-config-prettier@8.3.0` to install eslint in your project development dependencies. Then you may configure its functionalities.

There are dozens of preset configs for ESLint and you're welcome to use any one of them. The [Airbnb config][airbnb] is very popular, as is the standard config. I'm going to use a looser one for this class: `eslint:recommended`.

Created file called `.eslintrc.json`.

```json
{
  "extends": ["eslint:recommended", "prettier"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

This is a combination of the recommended configs of ESLint and Prettier. This will lint for both normal JS stuff as well as JSX stuff. Run `npx eslint script.js` now and you should see we have a few errors. Run it again with the `--fix` flag and see it will fix some of it for us! Go fix the rest of your errors and come back. We can add this to scripts.

```json
"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
```

ESLint is a cinch to get working with [Visual Studio Code][vscode]. Just down [the extension][vscode-eslint].

## Alternatives

- [jshint][jshint]

[eslint]: https://eslint.org
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[airbnb]: https://github.com/airbnb/javascript
[jshint]: http://jshint.com/
[vscode]: https://code.visualstudio.com/
