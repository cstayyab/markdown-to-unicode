
# Markdown to Unicode Converter

![NPM Package](https://img.shields.io/npm/v/markdown-to-unicode?style=flat-square&logo=npm&logoColor=white&label=%2Fmarkdown-to-unicode&labelColor=%23cc3534&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmarkdown-to-unicode)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hy/cstayyab/markdown-to-unicode?style=flat-square&logo=jsdelivr&labelColor=%23df9c26&color=%23e74e3d)
---
A simple library to convert Markdown syntax to Unicode characters.

## Installation

`npm install markdown-to-unicode`

## Usage

```javascript
const convertMarkdownToUnicode = require('markdown-to-unicode');
const unicodeText = convertMarkdownToUnicode("**Hello** *World* and ~~Universe~~");
console.log(unicodeText); // Output the unicode equivalent
```

**Output:**
> 𝐇𝐞𝐥𝐥𝐨 𝑊𝑜𝑟𝑙𝑑 and U̶n̶i̶v̶e̶r̶s̶e̶

### Browser Usage
```html
<script src="https://cdn.jsdelivr.net/gh/cstayyab/markdown-to-unicode@main/dist/markdown-to-unicode.js"></script>
<script>
    const result = MarkdownToUnicode("**Hello** *World* and ~~Universe~~");
    console.log(result);
</script>
```

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

  


