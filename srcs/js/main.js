
    //selecting all the tags that will be given functionalities
    let plus = document.querySelectorAll(".innerInfo h3 i"),
    content = document.querySelectorAll(".innerInfo p");

    //function to loop over all the p tags in th faq sections
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
