//initial Count
let count = 0;
//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll("#inc");
const btn2 = document.querySelectorAll(".btn btn-outline-secondary");
//Functionnality of the Program 
btns.forEach(function(btn){
        btns[0].addEventListener("click",function(e){
            const styles = e.currentTarget.classList;
            if(styles.contains("btn")){
                count++;
            }else if(styles.contains("btn btn-outline-secondary")){
                count--;
            }else{
                count=0;
            }
            if(count>0){
                value.style.color="green";
            }if(count<0){
                value.style.color="red";
            }
            if(count===0){
                value.style.color= "#222";
            }
                value.textContent = count;

        });
     
});
