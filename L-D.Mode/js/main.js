    const sphere = document.querySelector("#sphere-btn");
    const background = document.querySelector("#background");

    background.addEventListener("click",func);

    function func (){

        sphere.classList.toggle("lightMode");
        sphere.classList.toggle("darkMode");

        background.classList.toggle("lightBackGr");
        background.classList.toggle("darkBackGr");
    }

    

            

        
    