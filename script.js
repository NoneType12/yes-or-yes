var question = prompt("Enter the question: ");
var message = prompt("Enter the message that will be shown after pressing 'yes': ");
document.getElementById("question").innerHTML = question;
document.addEventListener("mousemove", ()=>{
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    yes.addEventListener("click", ()=>{alert(message)});
    no.addEventListener("mouseover", ()=>{
        yes.innerHTML = "No"; yes.setAttribute("id", "no");
        no.innerHTML = "Yes"; no.setAttribute("id", "yes");
    });
});