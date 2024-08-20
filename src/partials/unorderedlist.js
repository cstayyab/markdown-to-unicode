function convertUnorderedListToUnicode(markdownLine) {
  let unicodeLine = markdownLine;
  unicodeLine = unicodeLine.replace(/- (.*)/g, '• $1');
  unicodeLine = unicodeLine.replace(/\* (.*)/g, '• $1');
  return unicodeLine;
}

module.exports = convertUnorderedListToUnicode;