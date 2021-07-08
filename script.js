var Content = document.getElementsByClassName("Content");
var internalContent = document.getElementsByClassName("internalContent");
var ContentIcon = document.querySelectorAll(".section4 .Content span");
ContentLength = Content.length;


function Goster(a) {
    if(internalContent[a].style.display === "block"){
        internalContent[a].style.display = "none";
        ContentIcon[a].style.transform = "rotate(0deg)"
    }
    else {
        internalContent[a].style.display = "block";
        ContentIcon[a].style.transform = "rotate(45deg)"
    }
}

// document.addEventListener("click", function(){
//     for(var counter = 0; counter < ContentLength; counter++){
//         Content[counter].addEventListener("click",function(){
//             Goster(counter);
//         });
//     }
// })


Content[0].addEventListener("click",function(){
    Goster(0);
} );
Content[1].addEventListener("click",function(){
    Goster(1);
} );
Content[2].addEventListener("click",function(){
    Goster(2);
} );
Content[3].addEventListener("click",function(){
    Goster(3);
} );
Content[4].addEventListener("click",function(){
    Goster(4);
} );