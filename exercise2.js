/*1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6] */
function evenNumbers(...arr){
    let evenArr = new Array()

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            evenArr.push(arr[i])
        }
    }

    return evenArr
}

console.log(evenNumbers(1,2,3,4,5,6,7,8,9,10))

/*2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The 
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the 
array can only contain 5 elements). 
a. Example : 
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
The function will return [5, 10, 24, 3, 6]*/
function limitArray(maxSize, arr){
    let result = []
    for(let i = 0; i < maxSize; i++){
        result.push(arr[i])
    }

    return result
}
console.log(limitArray(5, [1,2,3,4,5,6,6,7,8,9,0]))
console.log(limitArray(7, [1,2,3,4,5,6,6,7,8,9,0]))

/*3. Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]*/
function concatArray(arr1, arr2){
    let resultArr = []

    resultArr = arr1.concat(arr2)
    /*for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i])
    }*/

    return resultArr
}
console.log(concatArray([1,2,3], [4,5,6]))

/*4. Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]*/
function duplicateArray(arr){
    let doubleArr = []
    for(let i = 0; i < arr.length; i++){
        let found = false
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[i] == arr[j] && arr[i] != null && arr[j] != null){
                arr[j] = null
                found = true
            }
        }

        if(found){
            doubleArr.push(arr[i])
        }
    }

    return doubleArr
}

console.log(duplicateArray([1, 2, 2, 2, 3, 3, 4, 5, 5]))

/*5. Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]*/
function differenceArray(arr1, arr2){
    let combineArray = arr1.concat(arr2)
    diffArray = []

    for(let i = 0; i < combineArray.length; i++){
        let found = false
        for(let j = 0; j < combineArray.length; j++){
            if(i != j && combineArray[i] == combineArray[j]){
                found = true
                break;
            }
        }

        if(!found){
            diffArray.push(combineArray[i])
        }
    }

    return diffArray
}

console.log(differenceArray([1,2,3,4,5],[3,4,5,6,7]))