/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.match(/[^A-Za-z]/g).join('');
    if(result.includes('/')){
      result = result.split('/')
        .reduce((acc, cur) => acc / cur)
    }
    return parseFloat(result);
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[A-Za-z]/g).join('');
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
       case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case 'km':
        result = 'Kilometers';
        break;
      case 'mi':
        result = 'Miles';
        break;
      case 'gal':
        result = 'Gallons';
        break;
      case 'l':
        result = 'Liters';
        break;
       case 'lbs':
        result = 'Pounds';
        break;
      case 'kg':
        result = 'Kilograms';
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch(initUnit){
      case 'km':
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
       case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = 'invalid unit';
    }
    
    return result === 'invalid unit' ? result : result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}.`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
