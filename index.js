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
// let str ="hello, world!";
// let y=" lol snkn nksn";
// let z="   how is your life    "

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

// const heading = document.getElementById("mycss")
// console.log(heading)
// heading.innerText = "We miss chadwick boseman";
// heading.style.background = "red"
// heading.style.color = "white";
// heading.style.textAlign ="center"

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

// let grade="A"

// switch (grade) {
//     case "A":
//         console.log("excellent");
        
//         break;
//         case "B":
//             console.log("vey god");
//             break;
//             case "C":
//                 console.log("average");
//                 break;
//                 case "D":
//                     console.log("fail")
//                     break;

//     default:
//         console.log("failedd")
//         break;
// }
//  let month="july"
//  switch (month) {
//     case "january":
//         case "febuary":
//             case "march":
//                 console.log("the month is in q1");
        
//         break;
 
//         case "april":
//             case"may":
//             case"june":
//             console.log("the month is in q2");
//             break;
//             case"july":
//             case"AUG":
//             case"SEP":
//             console.log("the month is in q3");
//             break;
//     default:
//         console.log("there iis no june");
//         break;
//  }

// for(i=0;i<10;i++){//initialize condition interution
//     console.log(i);
// }
// let i=0;//globally variable declare
//  while(i<5){
//   console.log(i);
//     i++;
//  }

//do while

// let i=0;
//  do{  //first ma execute hunxa ani matra condition check hunxa
//      console.log(i);
// i++;

//  }while(i<5);

//ARRAY
// const myArr=[1,2,3,4,5,8];
// console.log(myArr.length);
// console.log(myArr[4]);

// const newArr=["shyam","geeta","sita","ram"];
// console.log(newArr);
// //push methoda last ma thapna paryo vane
// const newAdd=newArr.push("iron man");
// console.log(newAdd);

//UNSHIFT METHOD agadi thapne ho 0 index ma
// const newArr=["shreya","amima","shyam"];
// console.log(newArr.unshift("captain"));
// console.log(newArr);

//pop method last ko index lai delete garna paryo vane
// const newArr=[1,2,3,4,56,5];
// console.log(newArr);
// const newData=newArr.pop();
// console.log(newData);

//shift method agadi ko index lai delet hanne

// const newArr=[1,2,3,4,56,5];
// console.log(newArr);
// const newData=newArr.shift();
// console.log(newData);

//concat method duita array lai jodne

// let arr1=[1,2,3,4,5];
// let arr2=["shf","hui","njkbkj"];
// console.log(arr1.concat(arr2));

//filter method  chaine kura ko list nikaldine chaine kura filger garera dine long data bata
// let newArr=[2,34,5,6,7,8];
// console.log(newArr);
// const findFilter=newArr.filter((n)=>n>5)
// console.log(findFilter);
// console.log(newArr);

//splice method  ekaixoti bich ko hatauna delete garna lai
// const newArr=[5,6,7,7,8,8,9,1];
// console.log(newArr);
// const newData=newArr.splice(2,3);
// console.log(newData);
// console.log(newArr);

//reverse method

// const newArr=[6,5,6,7,1,2,9];
// console.log(newArr);
// const newData=newArr.reverse()
// console.log(newData);
// console.log(newArr);

//sort method  acsending order banidinxa default mai

// const newArr=[6,5,6,7,1,2,9];
// console.log(newArr.sort());
//object
// const myprofile=
// {
//     firstname:"shrya",
//     lastname:"rat",
//     age:88,
//     ismarrie:false,
//     issalary: function()//is a ptoperty: dunctiion which is a value in copy
//     {
//         console.log("i m umemployeed");
//         return true;//value return nagari answer audaina funcyion rw method ma
//     },
// };
// console.log(myprofile);
// console.log(myprofile.age); //myprofile ma vako age proprty lai access gareko
// console.log(myprofile["age"]);//acces gareko 
// console.log(myprofile.issalary()); 

// const car={
//      make:"rover",
// //     model:"camry",
// //     color:"red",
// //     runwheel:3,
// //     iselectric: false,
//     startengine: function()
//    {
//       console.log("start");
//          return true;

//   },
//   endengine :function()
//    {
//       console.log("end");
//        return false;
//     }

// };
//      console.log(car);
//    console.log(car.startengine());
//      console.log(car.endengine());
//  if(car.startengine())
//     {
//         console.log("car is about to start");
//     }
//     else if (car.endengine()){
//         console.log("car is at stedyr");

//     }
//     else{
//         console.log("error");
//     }
    
//     //function
//     function mydata(){
//         let a=90;
//         let b=12;
//         let result=(a+b)/2;
//         console.log(result);
//         return result;
     
//     }
 //  mydata(); //call greko function lai\
    

 //another ques
//  function newd(a,b,c){
//    return(a+b+c)/2;
// }
// const ans =newd(2,2,2);
// const ans1=newd(2,3,4);
// console.log(ans);
// console.log(ans1);

// const myvalue= function()
// {
//     let x=3;
//     let y=4;
//     let result=x*y;
//     console.log(result);
//     return result;
// }
// console.log(myvalue());

// function mydata(arr=[]){
//     let total=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         total=total+arr[i];
//     }
//     return total;
// }
// const ans= mydata([1,2,3,4,5]);
// console.log(ans);


// //scoping
// let x=67; //global scoping


// function varr()
// {
// var x=9+9;
// console.log(x);
// }
// console.log(x);
// varr();

// function myblock()
// {
//     if(true)
//     {
//         var x=99*9;
//         console.log(x);

//     }
// }
// myblock();

//DOM manipulation and its methods
// const ans=document.head;//head bitra ko sab lai access gareko
// console.log(ans);

// const ans=document.body.firststElementChild;// body bitra ko first child how lai acces gareko
// console.log(ans);

//tochange is by are

const result= document.getElementById("myIs");
result.innerHTML="ronaldo kina esto  <b>mula<b>"; //esma html tag use garna milxa
result.innerText="ronaldo kina esto"; 

const ans=document.getElementsByClassName("myyour");
console.log(ans[0]);
ans[0].innerHTML="bhjbjh<b>ugguyg</b>";

const newData= document.getElementsByTagName("span")
console.log(newData);

newData[0].innerHTML="<strong>veryhappy</strong>";//text change gareko happy lai very happy

const myEmail=document.getElementsByName("email");//name haru input tag bitra hunxa jastai form ma 
console.log(myEmail[0]);

myEmail[0].style.width="200px";//css deko

const mybutton= document.getElementById("clickgara");
 mybutton.innerText="save"; //clickme bata save gareko text change gareko

 mybutton.style.background="blue"; //color chnage gareko
 mybutton.style.color="white";//white color
 mybutton.style.padding="10px";
 mybutton.style.cursor="pointer";// save nirw jada pointer auxa
 mybutton.style.border="none";// boder hatako

 mybutton.onclick=myFunc;//() halyo vane click garena vane ni afai auxa

 function myFunc(){
 const create=document.createElement("h2");//h2 vanne element create gardinxa hamro body ma
 create.innerHTML="thanos was right";
 document.body.prepend(create);//body ma dekhauna ko lagi method use garne prepend rw apend
 //append vaneko tala auxa

 
}