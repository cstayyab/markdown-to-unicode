const convertBoldToUnicode = require('./partials/bold');
const convertItalicToUnicode = require('./partials/italic');
const convertStrikethroughToUnicode = require('./partials/strikethrough');


// Function to convert markdown to unicode
function convertMarkdownToUnicode(markdownText) {
    let getLineByLine = markdownText.split('\n');
    let unicodeLineByLine = getLineByLine.map((line) => convertMarkdownLineToUnicode(line));
    let unicodeText = unicodeLineByLine.join('\n');
    return unicodeText;
}

function convertMarkdownLineToUnicode(markdownLine) {
    let unicodeLine = markdownLine;
    unicodeLine = convertBoldToUnicode(unicodeLine);
    unicodeLine = convertItalicToUnicode(unicodeLine);
    unicodeLine = convertStrikethroughToUnicode(unicodeLine);
    // unicodeLine = convertBlockquoteToUnicode(unicodeLine);
    // unicodeLine = convertOrderedListToUnicode(unicodeLine);
    // unicodeLine = convertUnorderedListToUnicode(unicodeLine);
    // unicodeLine = convertHorizontalRuleToUnicode(unicodeLine);
    // unicodeLine = convertHeadingToUnicode(unicodeLine);
    // unicodeLine = convertLinkToUnicode(unicodeLine);
    // unicodeLine = convertImageToUnicode(unicodeLine);
    return unicodeLine;
}

console.log(convertMarkdownToUnicode('This is a **bold text**.'));


module.exports = convertMarkdownToUnicode;
