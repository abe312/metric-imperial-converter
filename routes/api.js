/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {
  const convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function(req, res) {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit,
    );
    if (initUnit == 'invalid unit' && initNum == 'invalid number') {
      res.status(200).send('invalid number and unit');
      return;
    }
    if (initUnit == 'invalid unit') {
      res.status(200).send(initUnit);
      return;
    }
    if (initNum == 'invalid number') {
      res.status(200).send(initNum);
      return;
    }
    res.json({ initNum, initUnit, returnNum, returnUnit, string });
  });
};
