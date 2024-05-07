/*1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}*/
function lowest(arr){
    let lowest = 0

    lowest = Math.min(...arr)
    /*let lowest = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(lowest > arr[i]){
            lowest = arr[i]
        }
    }*/

    return lowest
}

function highest(arr){
    let highest = 0

    highest = Math.max(...arr)
    /*let highest = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(highest < arr[i]){
            highest = arr[i]
        }
    }*/

    return highest
}

function average(arr){
    let sum = 0
    let average = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    average = sum / arr.length

    return average
}

console.log(lowest([12, 5, 23, 18, 4, 45, 32]))
console.log(highest([12, 5, 23, 18, 4, 45, 32]))
console.log(average([12, 5, 23, 18, 4, 45, 32]))

/*2. Write a function that takes an array of words and returns a string by concatenating the words in the array, 
separated by commas and - the last word - by an 'and'.
Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”*/
function concatString(arr){
    let concatResult = ""

    for(let i = 0; i <= arr.length-1; i++){
        if(i == arr.length-1){
            concatResult += "and "+arr[i]
        } else {
            concatResult += arr[i]+", "
        }
    }
    return concatResult
}

console.log(concatString(["apple","banana","cherry","date"]))

/*3. Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”]*/
function splitString(string){
    let resultArr = []
    let word = ""

    for(let i = 0; i < string.length; i++){
        if(string[i] == " "){
            resultArr.push(word)
            word = ''
        } else if(i == string.length-1){
            word += string[i]
            resultArr.push(word)
        } else {
            word += string[i]
        }
    }

    return resultArr
}
console.log(splitString("Maypop Mechanic"))

/*4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are 
of the same length.
Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]*/
function arrayElementSum(arr1, arr2){
    if(arr1.length !== arr2.length){
        return "array length must be the same"
    }

    let result = []
    for(let i = 0; i < arr1.length; i++){
        result.push(arr1[i] + arr2[i])
    }

    return result
}

console.log(arrayElementSum([1,2,3],[4,5,6]))

/*5. Write a function that adds an element to the end of an array. However, the element should only be added if it is 
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4] 
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]*/
function addElement(newElement){
    arr = [1, 2, 3, 4]

    if(!arr.includes(newElement)){
        arr.push(newElement)
    }

    return arr
}
console.log(addElement(7))