/*
 its just basic function which making simple round and math
*/ 
export default function abbreviate (number,maxPlaces,forcePlaces,forceLetter ){
  number = Number(number)
  forceLetter = forceLetter || false
  if(forceLetter !== false) {
    return annotate(number, maxPlaces, forcePlaces, forceLetter)
  }
  var abbr
  if(number >= 1e12) {
    abbr = 'T'
  }
  else if(number >= 1e9) {
    abbr = 'B'
  }
  else if(number >= 1e6) {
    abbr = 'M'
  }
  else if(number >= 1e3) {
    abbr = 'K'
  }
  else {
    abbr = ''
  }
  return annotate(number, maxPlaces, forcePlaces, abbr)
};

function annotate(number, maxPlaces, forcePlaces, abbr) {
  // set places to false to not round
  var rounded = 0
  switch(abbr) {
    case 'T':
      rounded = number / 1e12
      break
    case 'B':
      rounded = number / 1e9
      break
    case 'M':
      rounded = number / 1e6
      break
    case 'K':
      rounded = number / 1e3
      break
    case '':
      rounded = number
      break
  }
  if(maxPlaces !== false) {
    var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$')
    if(test.test(('' + rounded))) {
      rounded = rounded.toFixed(maxPlaces)
    }
  }
  if(forcePlaces !== false) {
    rounded = Number(rounded).toFixed(forcePlaces)
  }
  return rounded + abbr

}




//abbreviate(12008987000,  false)
//console.log(abbreviate(1267734,false,2))
/*
console.log(abbreviate(1248000, 2, false, false))
console.log(abbreviate(248000, 2, false, false))

console.log(abbreviate(1200000, 2))
*/
/*
abbreviate(1248000, 2, 2, false)
abbreviate(248000, 2, 2, false)

abbreviate(1200000, 3, 3, 'M')
abbreviate(1248000, 3, 3, 'M')
abbreviate(248000, 3, 3, 'M')
*/

/*
    solution from stackoverflow https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
*/
export const byteConversion = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 B';
  
  const kiloByte = 1000;
  const decimal = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(kiloByte));
  
  return `${parseFloat((bytes / kiloByte ** i).toFixed(decimal))} ${sizes[i]}`;   
}
// console.log(byteConversion(1580))
