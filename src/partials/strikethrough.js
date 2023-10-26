function convertStrikethroughToUnicode(markdownLine) {
    let unicodeLine = markdownLine;
    let strikethroughRegex = /~~(.*?)~~/g;
    unicodeLine = unicodeLine.replace(strikethroughRegex, (match, p1) => {
        // Convert each character in p1 to it's unicode strikethrough equivalent
        let unicodeCharacters = p1.split('').map((character) => {
            return convertCharToStrikethroughUnicode(character);
        });
        return unicodeCharacters.join('');
    });
    return unicodeLine;
}

function convertCharToStrikethroughUnicode(char) {
    const strikeThroughChar = '\u0336';
    return char + strikeThroughChar;
}

module.exports = convertStrikethroughToUnicode;