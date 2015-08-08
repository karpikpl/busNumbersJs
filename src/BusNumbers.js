class BusNumbers {

  constructor(line1, line2) {
    this.line1 = line1;
    this.line2 = line2;
  }

  parse() {
    if (!this.line2) {
      return [];
    }
    var split = this.line2.split(' ');

    for (var i = 0; i < split.length; i++) {
      split[i] = parseInt(split[i]);
    }

    return split;
  }

  solve() {
    if (!this.line2) {
      return '';
    }

    var buses = this.parse().sort(function(a, b) {
      return a - b;
    });

    if (buses.length === 1) {
      return this.line2;
    }
    if (buses.length === 2) {
      return buses[0] + ' ' + buses[1];
    }

    var prev = buses[0];
    var result = buses[0];
    var isSequance = false;

    for (var i = 1; i < buses.length - 1; i++) {
      var next = buses[i + 1] * 1;

      if (next === prev * 1 + 2) {
        isSequance = true;
        prev = buses[i];

        // in a sequance - skip further actions
        continue;
      } else {
        prev = buses[i];

        if (isSequance) {
          isSequance = false;
          // was in a sequance that just finished
          result += '-' + buses[i];
        } else {
          // not in a sequance
          result += ' ' + buses[i];
        }
      }
    }

    result += (isSequance ? '-' : ' ') + buses[buses.length - 1];
    return result;
  }
}

// delete me
var readline = function() {};
var print = function(msg) {
  console.log(msg);
};

const numbers = new BusNumbers(readline(), readline());
print(numbers.solve());

export default BusNumbers;
