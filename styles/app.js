 
//  Variables for on click of the hamburger menu
 var mynav = document.getElementsByClassName("nav")[0]
 var hnav = document.getElementsByClassName("h-nav")[0]
 var xx = document.getElementsByClassName("h-nav")[0].children[0].firstElementChild
 var logo = document.getElementsByClassName("logo")[0]
// Hide/Show for the hamburger menu in mobile viewport
mynav.addEventListener("click",function(){
    if(hnav.classList.contains("hide")){
        hnav.classList.remove("hide")
        mynav.style.display = "none";
        logo.style.display = "NONE"
    }else{
        hnav.classList.add("hide")
        mynav.style.dispaly = "flex";
        logo.style.display = "block"
    }
})
xx.addEventListener("click", function(){
    if(mynav.style.display = "none"){
        hnav.classList.add("hide")
        mynav.style.display = "flex"
        logo.style.display = "block"
    }
})



 //  Variables for on click of the directional arrows
// Previous and Next to show three differnent levels of content 
var navl = document.getElementsByClassName("nav-arrow")[0].children[0]
var parent = document.getElementsByClassName("top-right")[0].children[0]
var parent1 = document.getElementsByClassName("top-right")[0].children[1]
var parent2 = document.getElementsByClassName("top-right")[0].children[2]
var elder = [parent, parent1, parent2]
navl.addEventListener("click",function(){
    var  i 
    for(i = 0; i < elder.length;i++){
        console.log(i)
        if(elder[i].classList.contains("hide")){
            elder[i].classList.remove("hide")
            i = i
        }else{
            elder[i].classList.add("hide")
            i = i
        }
    }
   
    // console.log("clicked")
    // for(i = 0; i < parent.length; i){
    //      if(parent[0].children[i].style.dispaly = "block"){
    //          parent[0].children[i].style.display = "none"
    //          console.log(i)
    //      }else{
    //          parent[0].children[i].style.dispaly = "block"
             
    //      }
    //      console.log(i)
    // }  
})