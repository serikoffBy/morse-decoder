const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
//00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010
function decode(expr) {
    let str = '';
    let resultStr = '';
    let arr = [];
    for(let i = 0; i < expr.length / 10; i+=1 ) {
        arr[i] = expr.slice(i*10, i*10+10);
    }
    arr.forEach(item => {
        resultStr = '';
        str = '';
        if(item !== '**********') {
            for(let i = 0; i < item.length / 2; i++) {
                if(item.slice(i * 2, i * 2 + 2) === '10') {
                    str = `${str}.`;
                }
                else if(item.slice(i * 2, i * 2 + 2) === '11') {
                    str = `${str}-`;
                }
            }
            resultStr = `${resultStr}${MORSE_TABLE[str]}`;
        }
        else {
            resultStr = resultStr + ' ';
        }
    });
return resultStr;
}

module.exports = {
    decode
}