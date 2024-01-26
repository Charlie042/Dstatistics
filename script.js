class statistics {
    constructor(numbers){
        this.number = numbers;

    }
    // Measures of central tendency

    //Mean

    forMean (){
        const sum = this.number.reduce((value, val)=> value + val,0);
        return sum/ this.number.length;
    }
//Median
    forMedian(){
        const sortedValue = this.number.slice().sort((a,b)=> a - b);
        const midIndex = Math.floor(sortedValue.length/2);

        if (sortedValue % 2 === 0){
            return (sortedValue[midIndex - 1] + sortedValue[midIndex])/ 2;
        }else{
            return sortedValue[midIndex];
        }
    }

    //Mode
    forMode(){
        //Created a frequency Map
        const fMap = new Map();
        //iterated through the data
        this.number.forEach((value)=> {
            fMap.set(value, (fMap.get(value)|| 0)+ 1);
        });
// find the mode
        let mode;
        let maxNumber = 0;

        fMap.forEach(( frequency, value)=>{
            if(frequency > maxNumber){
                maxNumber = frequency;
                mode = value;
            }
        });
        // returned the mode
        return  mode;

    }

    //central 

    // Range 
    forRange(){
        const range = this.number.slice().sort((a,b) => a - b);
        return range[ range.length - 1] - range[0];
    }

    //Variance 

    forVariance(){
        const mean = this.forMean();
        const squaredDifferences = this.number.map(value => (value - mean) ** 2);
        return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.number.length;
    }
}
const number = [1,2,3,4,5,6,6];

const stats = new statistics(number);

console.log('mean:', stats.forMean());
console.log('median:', stats.forMedian());
console.log('mode:', stats.forMode());