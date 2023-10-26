function convertBoldToUnicode(markdownLine) {
    let unicodeLine = markdownLine;
    let boldRegex = /(\*\*|__)(.*?)\1/g;
    unicodeLine = unicodeLine.replace(boldRegex, (match, p1, p2) => {
        // Convert each character in p2 to it's unicode bold equivalent
        let unicodeCharacters = p2.split('').map((character) => {
            return convertCharToBoldUnicode(character);
        });
        return unicodeCharacters.join('');
    });
    return unicodeLine;
}

function convertCharToBoldUnicode(char) {
    const codePoint = char.codePointAt(0);
    
    if (codePoint >= 65 && codePoint <= 90) { // A-Z
        return String.fromCodePoint(codePoint - 65 + 0x1D400);
    } else if (codePoint >= 97 && codePoint <= 122) { // a-z
        return String.fromCodePoint(codePoint - 97 + 0x1D41A);
    } else if (codePoint >= 48 && codePoint <= 57) { // 0-9
        return String.fromCodePoint(codePoint - 48 + 0x1D7CE);
    } else {
        return char; // Return the character as it is if it's not an ASCII letter or digit
    }
}

module.exports = convertBoldToUnicode;