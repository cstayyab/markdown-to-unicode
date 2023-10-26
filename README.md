
# Markdown to Unicode Converter

A simple library to convert Markdown syntax to Unicode characters.

## Installation

`npm install markdown-to-unicode`

## Usage

```javascript
const convertMarkdownToUnicode = require('markdown-to-unicode');
const unicodeText = convertMarkdownToUnicode("**Hello** *World* and ~~Universe~~'");
console.log(unicodeText); // Output the unicode equivalent
```

**Output:**
> 𝐇𝐞𝐥𝐥𝐨 𝑊𝑜𝑟𝑙𝑑 and U̶n̶i̶v̶e̶r̶s̶e̶

## Roadmap

✅ **Bold** <br/>
✅ *Italic* <br/>
✅ ~~Strikethrough~~ <br/>
❎ Blockquote <br/>
❎ Unordered List <br/>
❎ Horizontal Line <br/>
❎ TypeScript Support <br/>
❎ Web Browser Support <br/>
❎ Additional Options Support (e.g. Font) for uniform formatting <br/>

  


