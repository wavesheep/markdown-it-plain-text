const fs = require('fs');
const path = require('path');

const MarkdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');
const plainText = require('../index.js');

describe('without plugin', () => {
  test('default mode', () => {
    const md = new MarkdownIt();
    md.use(plainText);

    const testData = fs.readFileSync(path.resolve(`${__dirname}/data/default.md`), 'utf8');
    const result = fs.readFileSync(path.resolve(`${__dirname}/data/default-result`), 'utf8');
    md.render(testData);

    expect(md.plainText).toBe(result)
  })

  test('enable html', () => {
    const md = new MarkdownIt({
      html: true
    });
    md.use(plainText);

    const testData = `<div>
  html
</div>`;
    const result = `<div> html </div>`;
    md.render(testData);

    expect(md.plainText).toBe(result)
  })
});

describe('with plugin', () => {
  test('emoji', () => {
    const md = new MarkdownIt();
    md
      .use(emoji)
      .use(plainText);

    const testData = ':)';
    const result = `😃 `;
    md.render(testData);

    expect(md.plainText).toBe(result)
  })
});