// function power(a,b){
//     var flag = 1
//     for (let i = 1; i <= b; i++) {
//         flag = flag * a;
//     }
//     return flag;
// }   
// console.log(power(3,3))


// function leapYear(year){
//     if((year % 4 == 0) && (year % 100 != 0 ) || (year % 400 == 0)){
//       return "It's a leap year";  
//     }
//     else{
//         return "It's not a leap year";
//     }
// }

// var lYear = +prompt("Enter a year to check leap year: ex# 2012,2013");
// console.log(leapYear(lYear))



// function triangle(side1,side2,side3){
//     function area(Sides){
//         var abc = Math.sqrt(Sides*((Sides-side1)*(Sides-side2)*(Sides-side3)))  
//         return abc;  
//     }
//     var s = (side1 + side2 + side3) / 2
//     return area(s);
// }

// console.log(triangle(5,6,7))



// var sub1 = +prompt("Enter Subject 1 Marks (must be under 100): ")
// var sub2 = +prompt("Enter Subject 2 Marks (must be under 100): ")
// var sub3 = +prompt("Enter Subject 3 Marks (must be under 100): ")

// function mainFunction(subject1,subject2,subject3){
//     var sum = subject1 + subject2 + subject3;
//     function average(){
//         var avg = sum / 3
//         return avg;
//     }

//     function percent(){
//         var per = (sum/300)*100
//         return per;
//     }
    
//     return Math.round(average()) + " " + percent().toFixed(2);
// }
// console.log(mainFunction(sub1,sub2,sub3));



// var str = ("you have learned the function indexof.");
// var search = prompt("enter any alphabet: ");
// function myIndexOf(string){
//     for (var i = 0; i < string.length; i++) {
//         if(str[i] === search.toLowerCase()){
//             alert("Index of entered alphabet is: " + i);
//             break
//         }
//         else{
//             alert("Entered alphabet not found.")
//             break;
//         }
//     }
//     return i;
// }
// myIndexOf(str);



// var string1 = "This is pakistan";
// string1 = string1.toLowerCase();
// function vowels(val){
//     var arr = val.split("");
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
//             arr[i] = "*";
//         }
//     }
//     return arr;
// }
// console.log(vowels(string1))



// var dis = +prompt("Enter distance from Khi to Lhr in 'km': ");

// function distance(val){
//     function meter(){
//         return val * 1000;
//     }
//     function feet(){
//         return val * 3280.84;
//     }
//     function inches(){
//         return val * 39370.1;
//     }
//     function centimeter(){
//         return val * 100000;
//     }

//     return "meter: " + meter() + " " +"feet: " + feet() + " " + "inches: " + inches() + " " + "centimeter: " + centimeter();
// }
// console.log(distance(dis));



// var empHrs = +prompt("Enter worked hours: ");
// function overTime(val){
//     if(val > 40){
//         over_time = val - 40;
//         overTimepay = over_time * 12;
//     }
//     else{
//         alert("You have to work more than 40 hrs to get over time.");
//     }

//     return "Overtime Pay: " + overTimepay + " rupees";
// }
// alert(overTime(empHrs));



// var amt = +prompt("Enter the amount");

// function withdraw(amount){
//     console.log("Hundred Rupee Note: " + Math.floor(amount / 100))
//     console.log("Fifty Rupee Note: " + Math.floor((amount % 100) / 50))
//     console.log("Ten Rupee Note: " + Math.floor((((amount % 100) % 50) / 10)))
//     console.log("Remaining Rupee less than 10: " + Math.floor((((amount % 100) % 50) % 10)));
// }
// withdraw(amt)
