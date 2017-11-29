var expect = chai.expect;

function testOnArray(object, methodName) {
  expect(object[methodName].bind(object, 'fewfqew')).to.throw(Error);
}

var array;

describe("Check tasks for array and object", function () {
  describe("1. join(array, separator)", function () {
    it("should return error if argument not array", function () {
      testOnArray(arrays, "join");
    });

    it("should return string without separator on the end", function () {
      array         = [1, 2, 3, 4];
      var separator = ';';
      var result    = arrays.join(array, separator);
      expect(result[result.length - 1]).to.not.equal(separator);
    });

    it("should join array with + separator", function () {
      array         = ["Red", "Green", "White", "Black"];
      var separator = '+';
      var testJoin  = array.join('+');
      var result    = arrays.join(array, separator);
      expect(result).to.equal(testJoin);
    });

    it("should join array with , separator if second argument not pass", function () {
      array      = ["Red", "Green", "White", "Black"];
      var join   = array.join(',');
      var result = arrays.join(array);
      expect(result).to.equal(join);
    });

    it("should join array with any data inside", function () {
      array      = ["Red", 3522, {1: 35235}, true, undefined, null, '', NaN, 0, false];
      var join   = array.join(',');
      var result = arrays.join(array);
      expect(result).to.equal(join);
    });
  });

  describe("2. sort(number)", function () {
    it("should return error if first argument not a number", function () {
      expect(arrays["sort"].bind(arrays, "fekjfvj")).to.throw(Error);
    });

    it('should return correct array with numbers inside without negative numbers', function () {
      var number  = [32, 2, 362, 36, 23, 63, 41, 347, 381, 3, 7, 83, 2, 1];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return correct array with numbers inside without negative numbers', function () {
      var number  = [-32, 2, 362, -6, 23, 63, -25, 347, 381, -3, 7, 83, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return array with string and it must be same with array after common sort method', function () {
      var number  = [-32, 2, "adwwherh", -6, 23, "oiurege", -25, 347, 381, "mvtey", 7, 83, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return array with different type of elements', function () {
      var number  = [-32, 2, "adwwherh", true, 23, null, -25, {"ew": 525}, 381, "mvtey", 7, undefined, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });
  });

  describe("3. swapLetter()", function () {
    it("should return error if first argument not a string", function () {
      expect(arrays["swapLetter"].bind(arrays, 235234)).to.throw(Error);
    });

    it("should return mY nUMBER mORE tHAN yOUR", function () {
      var string = "My Number More Than Your";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('mY nUMBER mORE tHAN yOUR')
    });

    it("should return My Number More Than Your", function () {
      var string = "mY nUMBER mORE tHAN yOUR";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('My Number More Than Your')
    });

    it("should return My Number552 More123 Than Your22", function () {
      var string = "mY nUMBER552 mORE123 tHAN yOUR22";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('My Number552 More123 Than Your22')
    });

    it("should return abcdefghijklmnopqrstuvwxyz", function () {
      var string = "abcdefghijklmnopqrstuvwxyz";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });

    it("should return ABCDEFGHIJKLMNOPQRSTUVWXYZ", function () {
      var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('abcdefghijklmnopqrstuvwxyz')
    });
  });
});
