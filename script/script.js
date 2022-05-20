function openNav() {
    var checkBox = document.getElementById("custom")
    var stripe1 = document.getElementById("stripe1")
    var stripe2 = document.getElementById("stripe2")
    if (checkBox.checked == true) {
        console.log("yes")
        document.getElementById("myNav").style.visibility= "visible";
        setTimeout(function width () {
            document.getElementById("myNav").style.width = "100%";
        }, 300);
        
        document.querySelector("body").style.overflow = "hidden";
        setTimeout(function style () {
            stripe1.style.background = "rgb(255, 255, 255)"
            stripe2.style.background = "rgb(255, 255, 255)"
        }, 400);
    } else {
        document.getElementById("myNav").style.width = "0%";
        document.querySelector("body").style.overflow = "scroll";
        stripe1.style.background = "rgb(0, 0, 0)"
        stripe2.style.background = "rgb(0, 0, 0)"
        setTimeout(function visibility () {
            document.getElementById("myNav").style.visibility= "hidden"
        }, 400);
    }
  
  }
  