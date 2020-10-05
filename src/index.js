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

function decode(expr) {
    let morse_str = '';
    let morse_arr = [];
    for (let i = 0; i < expr.length/10; i++){
        morse_arr[i] = expr.substring(i*10, i*10 +10)
    }
    for (let i = 0; i < morse_arr.length; i++){
        let morse_symbol_str = '';
        for (let k = 0; k < morse_arr[i].length; k++){
            
            if(morse_arr[i][k] == '1'){
                k++
                if (morse_arr[i][k] == '1'){
                    morse_symbol_str += '-';
                } else if (morse_arr[i][k] == '0') {
                    morse_symbol_str += '.';
                }
            } else if (morse_arr[i][k] == '*'){
                morse_symbol_str = ' ';
            }
        }
        if (morse_symbol_str == ' '){
            morse_str += ' ';
        } else {
            morse_str += MORSE_TABLE[morse_symbol_str];
        }
    }
    return morse_str;
}

module.exports = {
    decode
}