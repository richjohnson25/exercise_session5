/*1. Based on the array below write a function that will return primitive data types only. let 
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]*/
function checkPrimitiveData(arr){
    let resultArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] != "object"){
            resultArr.push(arr[i])
        }
    }

    return resultArr
}

console.log(checkPrimitiveData([1, [], undefined, {}, "string", {}, []]))

/*2. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2*/
function secondSmallestNumber(arr){
    let min = arr[0]
    let min2 = arr[1]

    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        else if(min2 > arr[i] && min2 > min){
            min2 = arr[i]
        }
    }

    return min2
}

console.log(secondSmallestNumber([25, 13, 71, 35, 42, 66]))

/*3. Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3*/
function mixedSum(mixedArray){
    let numberArr = []
    let mixedSum = 0
    for(let i = 0; i < mixedArray.length; i++){
        if(typeof mixedArray[i] == "number"){
            numberArr.push(mixedArray[i])
        }
    }

    for(let j = 0; j < numberArr.length; j++){
        mixedSum += numberArr[j]
    }

    return mixedSum
}

console.log(mixedSum(["3", 1, "string", null, false, undefined, 2]))

/*4. Write a function from the below array of number that will return sum of duplicate values. let 
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40*/
function duplicateSum(arr){
    let sum = 0
    let duplicateArr = []

    for(let i = 0; i < arr.length; i++){
        let duplicate = 0
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[i] === arr[j]){
                duplicate++
            }
        }
        if(duplicate > 0){
            duplicateArr.push(arr[i])
        }
    }

    for(let k = 0; k < duplicateArr.length; k++){
        sum += duplicateArr[k]
    }

    return sum
}

console.log(duplicateSum([10, 20, 40, 10, 50, 30, 10, 60, 10]))

/*5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick 
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'*/
function rockPaperScissors(choice){
    let a = ["rock","paper","scissors"]
    let ai = Math.floor(Math.random() * 3)

    if(choice == a[ai]){
        console.log("Draw")
    } else if((choice == "rock" && a[ai] == "scissors") || (choice == "scissors" && a[ai] == "paper") || (choice == "paper" && a[ai] == "rock")){
        console.log("Win")
    } else {
        console.log("Lose")
    }

    console.log("AI -> ", a[ai], " | Player -> ", choice)
}

rockPaperScissors("rock")
rockPaperScissors("paper")
rockPaperScissors("scissors")