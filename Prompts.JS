// 1
for (let i = 10; i <= 20; i++){
    console.log(i);
}

// 2
for (let i = 40; i >= 0; i--){
    console.log(i);
}

// 3
for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

// 4
for (let i = -15; i <= 15; i++){
    console.log(i);
}

// 5
const answer = 17
for (let i = 20; i <= 30; i += 2){
    answer = i;
}
console.log(answer);


// 6
for (let a = 0; a <= 30; a++){
    if (a % 2 == 0) {
        console.log(`${a} is an even number`);
    } else {
        console.log(`${a} is an odd number`);
    }
}

// 7
for (let i = 0; i <= 10; i++){
    console.log(i * 9);
}


// 8
let i = 0
do {
i+= 2
console.log(i)
} while(i<20);  

// 9
let number = 5
while (number < 20) {
    number ++;
    console.log(number);
}

// 10
let numberTwo = 20
while (numberTwo > 0) {
    numberTwo --;
    console.log(numberTwo);
}

// 11
const magicNumber = 8
let guess = prompt("What's the magic number?");
while ( guess !== magicNumber) {
    prompt("What's the magic number?");
}

// 12
let j = 0;
do {
    j++;
    console.log(`the number is ${j}`)
  } while (j < 5);