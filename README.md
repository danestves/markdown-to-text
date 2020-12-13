<h1 align="center">Welcome to markdown-to-text 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/markdown-to-text" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/markdown-to-text.svg">
  </a>
  <a href="https://www.npmjs.com/package/markdown-to-text" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dm/markdown-to-text">
  </a>
  <a href="https://circleci.com/gh/danestves/markdown-to-text" target="_blank">
    <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/danestves/markdown-to-text">
  </a>
  <a href="fffff" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/danestves" target="_blank">
    <img alt="Twitter: danestves" src="https://img.shields.io/twitter/follow/danestves.svg?style=social" />
  </a>
</p>

> Parse the markdown and returns a string

## Install

```sh
# npm
npm install markdown-to-text

# yarn
yarn add markdown-to-text
```

## Usage

```js
// ES5
const removeMarkdown = require("markdown-to-text");
// Or in ES6
import removeMarkdown from "markdown-to-text";

const markdown =
  "*Javascript* [developers](https://engineering.condenast.io/) are the _best_.";
removeMarkdown(markdown);

// It will render to
// Javascript developers are the best.
```

## Author

👤 **Daniel Esteves**

- Website: https://danestves.com/
- Twitter: [@danestves](https://twitter.com/danestves)
- Github: [@danestves](https://github.com/danestves)
- LinkedIn: [@danestves](https://linkedin.com/in/danestves)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/danestves/markdown-to-text/issues). You can also take a look at the [contributing guide](https://github.com/danestves/markdown-to-text/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Daniel Esteves](https://github.com/danestves).<br />
This project is [MIT](https://github.com/danestves/markdown-to-text/blob/main/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
