function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) {
      var _x = parseFloat(  '0.'+( parseFloat(  Date.now().toString().slice(-3).split("").reverse().join("") ) * i ) ) * mask.length;
      if(_x > mask.length){ _x = 3 ; }
      result += mask[Math.floor( _x ) ];
    } 
    //console.log(' theRESULT '+result+ ' length : '+ length) ;
    console.log(result);
    return result;
}

let capsAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let smallAlphabet = 'abcdefghijklmnopqrstuvwxyz';
let number = 1234567890;
let specialChar = '!@#$%^&*()_+=-[]{};:?/><,.';

randomString(32,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-[]{};:?/><,.');
