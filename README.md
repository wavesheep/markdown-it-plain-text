# markdown-it-plain-text

![GitHub](https://img.shields.io/github/license/wavesheep/markdown-it-plain-text)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/wavesheep/markdown-it-plain-text/Node.js%20CI)
[![codecov](https://codecov.io/gh/wavesheep/markdown-it-plain-text/branch/master/graph/badge.svg)](https://codecov.io/gh/wavesheep/markdown-it-plain-text)
![GitHub file size in bytes](https://img.shields.io/github/size/wavesheep/markdown-it-plain-text/dist/markdown-it-plain-text.min.js)
[![npm](https://img.shields.io/npm/v/markdown-it-plain-text)](https://www.npmjs.com/package/markdown-it-plain-text)

> plain text extractor for markdown-it

## Install

### nodejs

```shell
npm install markdown-it-plain-text
```

### browser (CDN)

### uncompressed
[https://cdn.jsdelivr.net/gh/wavesheep/markdown-it-plain-text@0.3.0/dist/markdown-it-plain-text.js](https://cdn.jsdelivr.net/gh/wavesheep/markdown-it-plain-text@0.3.0/dist/markdown-it-plain-text.js)

### compressed
[https://cdn.jsdelivr.net/gh/wavesheep/markdown-it-plain-text@0.3.0/dist/markdown-it-plain-text.min.js](https://cdn.jsdelivr.net/gh/wavesheep/markdown-it-plain-text@0.3.0/dist/markdown-it-plain-text.min.js)

## Usage examples

### Node.js

```js
const MarkdownIt = require('markdown-it');
const plainText = require('markdown-it-plain-text');

const md = new MarkdownIt();
md.use(plainText);

md.render('your markdown content')

// Here are plain text result
md.plainText
```

### Browser

 If you load the script directly into the page without using a package system, the module will add itself globally with the name `markdownItPlainTextPlugin`. Init code will look a bit different in this case: 

```js
const md = window.markdownit().use(window.markdownItPlainTextPlugin);
```

### Typescript
If you load the script in ts, you will get the ts(2339) error. You can fix it with
```ts
(md as any).plainText
```
or
```ts
// @ts-ignore
md.plainText
```
## Generation rule

1. extract `text`, `fence`, `html_block`, `code_block`,`code_inline`, `html_inline`,  `emoji` content directly
2. add `space` at closing tag to *prevent words from sticking together*
3. *remove redundant white spaces* from result

## LICENSE

[MIT](LICENSE)
