const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'markdown-to-unicode.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'MarkdownToUnicode'
    },
    mode: 'production'
};
