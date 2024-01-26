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
//median
    forMedian(){
        const sortedValue = this.number.slice().sort((a,b)=> a - b);
        const midIndex = Math.floor(sortedValue.length/2);

        if (sortedValue % 2 === 0){
            return (sortedValue[midIndex - 1] + sortedValue[midIndex])/ 2;
        }else{
            return sortedValue[midIndex];
        }
    }
}
const number = [1,2,3,4,5,6,6];

const stats = new statistics(number);

console.log('mean:', stats.forMean());
onsole.log('median:', stats.forMedian());