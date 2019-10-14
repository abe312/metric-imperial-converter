/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    input = input.split(/[a-zA-Z]/)[0];
    let cd = 0,
      cm = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] == '/') cd++;
      if (input[i] == '*') cm++;
      if (cd > 1 || cm > 1) return 'invalid number';
    }

    return eval(input) || 1; // no numeric input (put 1)
  };

  this.getUnit = function(input) {
    let units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    let digit = input.split(/[a-zA-Z]/)[0];
    if (!digit) {
      if (!units.includes(input)) return 'invalid unit';
      else return input;
    }

    let result = input.split(digit)[1];
    console.log(result);
    if (!units.includes(result)) return 'invalid unit';
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return 'invalid unit';
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case 'km':
        return 'kilometers';
      case 'mi':
        return 'miles';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'gal':
        return 'galons';
      case 'l':
        return 'litres';
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    console.log('initNum', initNum);
    console.log('initUnit', initUnit);
    let result;
    switch (initUnit) {
      case 'l':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    result = result ? result.toFixed(5) : null;
    console.log('result', result);
    return +result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit,
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
