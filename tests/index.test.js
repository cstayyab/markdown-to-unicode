const convertMarkdownToUnicode = require('../src/index.js');

describe('convertMarkdownToUnicode', () => {
    it('should return the text as it is if there is no markdown', () => {
        const plainText = 'This is a plain text without any markdown.';
        const result = convertMarkdownToUnicode(plainText);
        
        expect(result).toBe(plainText);
    });
    it('should return bold text when the text is surrounded by double asterisks', () => {
        const plainText = 'This is a **bold text**.';
        const result = convertMarkdownToUnicode(plainText);
        
        expect(result).toBe('This is a 𝐛𝐨𝐥𝐝 𝐭𝐞𝐱𝐭.');
    });
    it('should return italic text when the text is surrounded by single asterisks', () => {
        const plainText = 'This is an *italic text*.';
        const result = convertMarkdownToUnicode(plainText);
        
        expect(result).toBe('This is an 𝑖𝑡𝑎𝑙𝑖𝑐 𝑡𝑒𝑥𝑡.');
    });
    it('should return strikethrough text when the text is surrounded by double tildes', () => {
        const plainText = 'This is a ~~strikethrough text~~.';
        const result = convertMarkdownToUnicode(plainText);
        
        expect(result).toBe('This is a s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ ̶t̶e̶x̶t̶.');
    });
    it('should return unordered list when line start with -', () => {
        const plainText = ' - List Item 1';
        const result = convertMarkdownToUnicode(plainText);
        
        expect(result).toBe(' • List Item 1');
    });
    it('should return unordered list when line start with *', () => {
        const plainText = ' * List Item 2';
        const result = convertMarkdownToUnicode(plainText);
        
        expect(result).toBe(' • List Item 2');
    });
});