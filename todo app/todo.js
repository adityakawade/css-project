document.addEventListener( "DOMContentLoaded",function(){
    let input=document.querySelector("input");
    let button=document.querySelector("button");
    let list=document.querySelector(".list")

    button.addEventListener("click",()=>{
        if (input.value.trim() !==  " ") {
            let newlist=document.createElement("li")
            newlist.className="li";
            let span=document.createElement("span")
            span.innerText=input.value;
            newlist.appendChild(span)
            let deletebutton=document.createElement("span");
            deletebutton.innerHTML=`<i class="ri-delete-bin-line"></i>`
            deletebutton.className="del-btn";
            deletebutton.addEventListener("click",()=>{
                list.removeChild(newlist)
            })
            newlist.appendChild(deletebutton);
            list.appendChild(newlist);
            input.value="";
            
        }
    })
})