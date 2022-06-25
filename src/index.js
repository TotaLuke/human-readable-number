module.exports = function toReadable (number) {
    
    const numString = String(number);
    const one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    // console.log(numString);

    if (number === 0) {
        return 'zero';
    }

    if (number < 10) {
        return one[number];
    }

    if (number >=10 && number < 20) {
        return teen[number - 10];
    }

    if (number >= 20 && number < 100) {
        if (numString[1] === '0') {
            return `${tens[Math.floor(number / 10)]}`;
        }
        else {
            return `${tens[Math.floor(number / 10)]} ${one[number % 10]}`;
        }
    }

    if (number >= 100 && number < 1000) {
        if (numString[1] + numString[2] === '00') {
            return `${one[Math.floor(number / 100)]} hundred`;
        }
        if (numString[1] == '0') {
            return `${one[Math.floor(number / 100)]} hundred ${one[number % 10]}`;
        } else if (numString[2] == 0) {
            return `${one[Math.floor(number / 100)]} hundred ${tens[Math.floor((number % 100) / 10)]}`;
        } else if (Number(numString[1]+numString[2]) >= 10 && Number(numString[1]+numString[2]) < 20) {
            return `${one[Math.floor(number / 100)]} hundred ${teen[Math.floor((number % 100) % 10)]}`;
        } else {
            return `${one[Math.floor(number / 100)]} hundred ${tens[Math.floor((number % 100) / 10)]} ${one[number % 10]}`;
        }
        
    }

    return 'Number 1000 or above :(';
}
