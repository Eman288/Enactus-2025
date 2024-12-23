function Power(num, power)
{
    return Math.pow(num, power);
}

function PrintPowers(nums, pows)
{
    for (let i = 0; i < nums.length; i++)
    {
        console.log(`the power ${pows[i]} of number ${nums[i]} is ${Power(nums[i], pows[i])}\n`)
    }
}

let numberOfTries = +prompt("Enter the Number of Tries You Want: \n");
let num;
let pow;
let nums = new Array();
let pows = new Array();


for (let i = 0; i < numberOfTries; i+=1)
{
    num = +prompt("Enter the Number: \n");
    pow = +prompt("Enter the Power: \n");
    nums.push(num);
    pows.push(pow);
}

PrintPowers(nums, pows);
