
# Descriptive Statistics Calculator

## Overview

The Descriptive Statistics Calculator is a JavaScript class that provides methods for calculating various descriptive statistics measures. It includes functions for measures of central tendency (mean, median, mode) and measures of dispersion (range, variance, standard deviation, quartiles, interquartile range).

## Usage

### Installation

To use the Descriptive Statistics Calculator in your project, you can simply copy the `DescriptiveStatistics` class into your JavaScript code.

```javascript
class DescriptiveStatistics {
  // Class code here...
}
```

### Example

To calculate descriptive statistics for a dataset, follow these steps:

1. **Instantiate the DescriptiveStatistics class:**

   ```javascript
   const data = [12, 15, 7, 9, 22, 8, 15, 10, 11, 14];
   const stats = new DescriptiveStatistics(data);
   ```

2. **Calculate Descriptive Statistics:**

   ```javascript
   console.log('Mean:', stats.calculateMean());
   console.log('Median:', stats.calculateMedian());
   console.log('Mode:', stats.calculateMode());
   console.log('Range:', stats.calculateRange());
   console.log('Variance:', stats.calculateVariance());
   console.log('Standard Deviation:', stats.calculateStandardDeviation());

   const quartiles = stats.calculateQuartiles();
   console.log('Lower Quartile:', quartiles.lowerQuartile);
   console.log('Upper Quartile:', quartiles.upperQuartile);

   console.log('Interquartile Range:', stats.calculateInterquartileRange());
   ```

3. **Example Usage:**

   The provided example uses a dataset of numbers, but you can replace it with your own dataset.

   ```javascript
   const data = [/* Add your dataset here */];
   const stats = new DescriptiveStatistics(data);
   ```

## Methods

- `calculateMean()`: Calculates the mean (average) of the dataset.
- `calculateMedian()`: Calculates the median of the dataset.
- `calculateMode()`: Calculates the mode of the dataset.
- `calculateRange()`: Calculates the range of the dataset.
- `calculateVariance()`: Calculates the variance of the dataset.
- `calculateStandardDeviation()`: Calculates the standard deviation of the dataset.
- `calculateQuartiles()`: Calculates the lower and upper quartiles of the dataset.
- `calculateInterquartileRange()`: Calculates the interquartile range of the dataset.

