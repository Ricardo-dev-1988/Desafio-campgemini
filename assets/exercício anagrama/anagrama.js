function checkAnagrama(a, b) {
    if (a.length !== b.length) {
        console.log('Não é um anagrama.');
    }
  
    let string1 = a.split('').sort().join(''); 
    let string2 = b.split('').sort().join('');
  
    let resultado = (string1 === string2);
    return `${a}, ${b}`;
  }
  
  console.log(checkAnagrama('bca', 'cba'));
  