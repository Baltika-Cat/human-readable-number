module.exports = function toReadable (number) {
    const arrDig = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const arrFirst = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrSecond = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberString = number.toString();    

    const first = numberString[numberString.length - 1];
    const second = numberString[numberString.length - 2];
    const third = numberString[numberString.length - 3];

    let a = number % 100;

    function tenTwenty() {
        switch (a) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven'
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen'
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen'
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }
    
    if (!third && !second && first === '0') {
        return 'zero';
    } else {
        if (a === 0) {
            return arrFirst[arrDig.indexOf(third)] + ' hundred';
        } else {
            tenTwenty();
        }

        if (!third) {
            if (a >= 10 && a < 20) {
                return tenTwenty();
            } else if (a < 10) {
                return arrFirst[arrDig.indexOf(first)];
            } else if (first === '0') {
                return arrSecond[arrDig.indexOf(second)]
            } 

            return arrSecond[arrDig.indexOf(second)] + ' ' + arrFirst[arrDig.indexOf(first)];
        } else {
            if (a >= 10 && a < 20) {
                return arrFirst[arrDig.indexOf(third)] + ' hundred ' + tenTwenty();
            } else if (a < 10) {
                return arrFirst[arrDig.indexOf(third)] + ' hundred ' + arrFirst[arrDig.indexOf(first)];
            } else if (first === '0') {
                return arrFirst[arrDig.indexOf(third)] + ' hundred ' + arrSecond[arrDig.indexOf(second)];
            }
        }
    }

    return arrFirst[arrDig.indexOf(third)] + ' hundred ' + arrSecond[arrDig.indexOf(second)] + ' ' + arrFirst[arrDig.indexOf(first)];
}