//var x=9;
//console.log(x);
//x=12;
//console.log(x);
//var x=7*7;
//console.log(x);
// let y=55;
// console.log(y);
// y=56;
// console.log(y);

// const PI=3.14;
// console.log(PI);
// PI=3.89;
// console.log(PI);
// const PI=90;

// const x=90;
// console.log(x);
// console.log(typeof x);
// let bool=true;
// console.log(bool);
// console.log(typeof bool);

// let x=0;
// let y=67;
// let z=true;
// let result=x+y+z;
// console.log(result);
// let name="opod dnm";
// let y=90;
// let find=name+y;
// console.log(find);

// const name="dip";
// const surname="hubj";
// console.log(name+" "+surname);
// const myGreeting= (`my name is ${name} ${surname}.`);
// console.log(`hello vereyone ${myGreeting}`);

// let name="bfehbf ejfeijfb";
// console.log(name);
// console.log(typeof name);
// console.log(typeof Number(name));

// //type convertion and string methds day 3
// let number = 678;
//  console.log(number);
// // console.log(typeof String(number));
// console.log(typeof number .toString());

//string method
let str ="hello, world!";
let y=" lol snkn nksn";
let z="   how is your life    "

// //charAt
// console.log(str.charAt(0))
// //length
// console.log(str.length)
// //concat
// console.log(str.concat(y));//value jodne str rw y ko
// //replace
// console.log(str.replace("hello","hi")) //hello ko thau ma hi lai repplace gardine
// //indexof
// console.log(str.indexOf("o")); //hello ma o ko index nikalne 01234 (first ko)
// //lastindexOf
// console.log(str.lastIndexOf("l"));// autai letter duita xa vane(last ko)
// //includes
// console.log(str.includes("hello"));// tyo word line ma xa vane true auxa natra false auxa jastai hello mathi ko lina ma xa
// //split
// console.log(str.split("l"));//break garxa l bata aru world haru
// //tolowercase
// console.log(str.toUpperCase());

//trim
//console.log(z.trim());//space haru hatauxa agadi paxaid ko space lai matra string paxi ko space lai gardaina

//slice
//console.log(str.slice(0,4));//start dekhi end samma katxa index lai output hell0123 4 end lai gandaina

const heading = document.getElementById("mycss")
console.log(heading)
heading.innerText = "We miss chadwick boseman";
heading.style.background = "red"
heading.style.color = "white";
heading.style.textAlign ="center"

//condition(if else)
// let email="shreyashrestha984@gmail.com";
// let password="9999999999";
// if(email=== "shreyashrestha984@gmail.com"&& password==="9999999999"){
//     console.log("login sucess");//true vayo vane if ko print natra else ko print
// }else{
//     console.log("invalid credentials");
// }

//student grade
// let grade= "A"
// if(grade==="B"){
//     console.log("very good marks");

// }else if (grade==="c"){
//     console.log("good marks");
// }else if(grade==="D"){
//     console.log("needs to improve");
// }else if (grade==="A"){
//     console.log("excellent");
// }else{
//     console.log("invalid marks");
// }

// let x=10;
// if(x>15){
//     console.log("x is greater tan 15");
// }else if(x>5){
//     console.log("x is greater than 5 but");
// }else{
//     console.log("x is greater than 15");
// }

// //weather
// let weather="winter";

// if(weather==="sunny"){
//     console.log("it is beatufukl day");
// }else if(weather==="cloudy"){
//     console.log("it is cludy");
// }else if(weather==="rainy"){
//     console.log("rainy xa");
// }else if(weather==="winter"){
//     console.log("jado xa");
// }
// else{
//     console.log("invalid weather");
// }

//  switch case
// let day="sunday"
// switch (day) {
//     case "monday":
//         console.log("today is sun");
//         break;
//         case "tuesday":
//             console.log("today is tuesdayn");
//             break;
//             case "wedday":
//                 console.log("today is wed");
//                 break;
//                 case "thursadday":
//                     console.log("today is thursaday");
//                     break;
//                     case "friday":
//         console.log("today is fridayun");
//         break;
//         case "saturday":
//         console.log("today is saturdayun");
//         break;
//         case "sunday":
//             console.log("today is sun");
//             break;
    

            
//     default:
//         console.log("errorery")
//         break;
// }


//student

let grade="A"

switch (grade) {
    case "A":
        console.log("excellent");
        
        break;
        case "B":
            console.log("vey god");
            break;
            case "C":
                console.log("average");
                break;
                case "D":
                    console/log("fail")
                    break;

    default:
        console.log("failedd")
        break;
}
 let month="jul"
 switch (month) {
    case "january":
        case "febuary":
            case "march":
                console.log("the month is in q1");
        
        break;
 
        case "april":
            case"may":
            case"june":
            console.log("the month is in q2");
            break;
            case"july":
            case"AUG":
            case"SEP":
            console.log("the month is in q3");
            break;
    default:
        console.log("there iis no june");
        break;
 }

