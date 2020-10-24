function insertComment(event){
let username=document.querySelector("#username");
let comment=document.querySelector("#comment");
alert(`Thank you ${username.value}!`);
console.log(comment.value);
}
let submit=document.querySelector("#submit")
submit.addEventListener("click", insertComment)