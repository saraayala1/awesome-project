function insertComment(event){
event.preventDefault();
let username=document.querySelector("#username");
let comment=document.querySelector("#comment");
let output=document.querySelector("#output");
output.innerHTML=`${username} says ${comment}`;
}
let submit=document.querySelector("#submit")
submit.addEventListener("click", insertComment)