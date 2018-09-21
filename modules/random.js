var randomNumberController = require('random-number');

module.exports = {
    getRandomNumbers : function getRandomNumbers(min, max, useInteagerType, outputArrayNumber) {
        var ret = [];
        var options = {
            min: min,
            max: max,
            integer: useInteagerType
          }
        var availableLength = Math.min(max-min+1, outputArrayNumber);

        while (ret.length < availableLength) {
            var randomNumber = randomNumberController(options);
            if (!ret.includes(randomNumber))
                ret.push(randomNumber);
        }

        ret.sort(function(a, b){return a-b});

        return ret;
    }
};