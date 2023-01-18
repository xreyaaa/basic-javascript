const title=document.getElementById("title");
const description =document.getElementById("description");
const form= document.querySelector("form");//tag xa vane nthg
const container=document.querySelector(".container");//class xa vane . id xa vane #
// <!-- <div class="task">
//                 <div>
//                     <p>title</p>
//                     <span>span</span>
//                 </div>
//                 <button class="deleteBtn">-</button>
//             </div>
//              --> yo banako ho tala due to help of DOM


let tasks= localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
: [];
showAllAddTasks();
//?true vaneko id else turnory operator :else

function showAllAddTasks(){
tasks.forEach((value,index)=>{
    const div=document.createElement("div");
    div.setAttribute("class","task");

    const innerDiv=document.createElement("div");
    div.append(innerDiv);

    const p=document.createElement("p");
    p.innerText=value.title;
    innerDiv.append(p);

    const span=document.createElement("span")
    span.innerText=value.description;
    innerDiv.append(span);

    const btn=document.createElement("button");
    btn.setAttribute("class","deleteBtn");

    btn.innerText="_";


    btn.addEventListener("click",()=>{
        removeTasks();
    
        tasks.splice(index,1);//
        localStorage.setItem("tasks",JSON.stringify(tasks))// browser ma delet garda localstorage bata delet haneko
        showAllAddTasks();//delete vako matra hatxa ani aru dekhauxa
    })
    div.append(btn); //?
    container.append(div);//?
    
});
}

function removeTasks(){
    tasks.forEach(()=>{
       const mainDiv= document.querySelector(".task");
        mainDiv.remove();
    })
}


form.addEventListener("submit",(e)=>{
    e.preventDefault(); //protct form ko data browser nma data loss nahos vanera use gareko
    removeTasks();

    tasks.push({// array ko method
        title: title.value,//form submit vayepaxi emplty array bitra data lai push gareko
        description: description.value,

    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllAddTasks();
 
});