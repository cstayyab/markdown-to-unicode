function convertItalicToUnicode(markdownLine) {
    let unicodeLine = markdownLine;
    let italicRegex = /(\*|_)(.*?)\1/g;
    unicodeLine = unicodeLine.replace(italicRegex, (match, p1, p2) => {
        // Convert each character in p2 to it's unicode italic equivalent
        let unicodeCharacters = p2.split('').map((character) => {
            return convertCharToItalicUnicode(character);
        });
        return unicodeCharacters.join('');
    });
    return unicodeLine;
}

function convertCharToItalicUnicode(char) {
    const codePoint = char.codePointAt(0);
    
    if (codePoint >= 65 && codePoint <= 90) { // A-Z
        return String.fromCodePoint(codePoint - 65 + 0x1D434);
    } else if (codePoint >= 97 && codePoint <= 122) { // a-z
        return String.fromCodePoint(codePoint - 97 + 0x1D44E);
    } else {
        return char; // Return the character as it is if it's not an ASCII letter
    }
}

module.exports = convertItalicToUnicode;