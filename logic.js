let btn=document.querySelector("#btn");
let no=document.querySelector(".cgpa");
let percentage=document.getElementById("percentage");



btn.addEventListener("click",()=>{
    event.preventDefault();
    let cgpa=parseFloat(no.value);
    if (cgpa < 0 || cgpa > 10) {
        alert("Please enter a valid CGPA between 0 and 10.");
        return;
    }
    let per=cgpa*9.5;
    percentage.innerText="your percentage is "+per;
})
