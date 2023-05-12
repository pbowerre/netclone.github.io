
    // let times = `<i class="fa fa-times"></i>`;
    let plus = document.querySelectorAll(".innerInfo h3 i"),
    content = document.querySelectorAll(".innerInfo p");

//    let ranks = [times, plus, content];

    for(let i = 0; i < plus.length; i+= 1){
            plus[i].addEventListener('click', function showContent(e){
                fillers = e.target
                morers = fillers.parentElement.parentElement;
                if(morers.id == ""){
                morers.id = "show";
                fillers.id = "show";
                
                }else{
                morers.id = "";
                fillers.id = "";
                }
                // console.log(morers);
            });
    }

    
//    function showContent(){
            
//    }
    
   
//    let btn = document.querySelector(".button");
//    var txtInput = document.querySelector("input[type=text]").value;
//    var txtPass = document.querySelector("input[type=password]").value;


// btn.onclick =  function(){
//    // btn.preventDefault();
//    // alert("welcome to netflix site")
  
//    if(!txtInput || !txtPass){
//        alert("Email and Password is required");
//        return false;
//    }else if(!txtInput.includes('@')){
//        alert(" Email is not correct")
//        return false;

//    }
   
//    if(txtPass > 4){
//        alert("Password must be greater than 4 ");
//        return false;
//    }else{
//        console.log("Success")
//    }
// return true;
// }