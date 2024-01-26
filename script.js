class statistics {
    constructor(numbers){
        this.number = numbers;

    }
    // Measures of central tendency

    //mean

    forMean (){
        const sum = this.number.reduce((value, val)=> value + val,0);
        return sum/ this.number.length;
    }
}
const number = [1,2,3,4,5,6,6];

const stats = new statistics(number);

console.log('mean:', mean.forMean());