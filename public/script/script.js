function openNav() {
    var checkBox = document.getElementById("custom")
    var stripe1 = document.getElementById("stripe1")
    var stripe2 = document.getElementById("stripe2")
    if (checkBox.checked == true) {
        console.log("yes")
        document.getElementById("myNav").style.visibility = "visible";
        setTimeout(function width() {
            document.getElementById("myNav").style.width = "100%";
        }, 300);

        document.querySelector("body").style.overflow = "hidden";
        setTimeout(function style() {
            stripe1.style.background = "rgb(255, 255, 255)"
            stripe2.style.background = "rgb(255, 255, 255)"
        }, 700);
    } else {
        document.getElementById("myNav").style.width = "0%";
        document.querySelector("body").style.overflow = "scroll";
        stripe1.style.background = "rgb(0, 0, 0)"
        stripe2.style.background = "rgb(0, 0, 0)"
        setTimeout(function visibility() {
            document.getElementById("myNav").style.visibility = "hidden"
        }, 700);
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const filterContainer = document.querySelector(".dropdown-content");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {

        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");

        // activate new 'filter-item'
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");

        galleryItems.forEach((item) => {

            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("remove");
                item.classList.add("display");
                window.location.href = "#" + filterValue;
            } else {
                item.classList.remove("display");
                item.classList.add("remove");
            }

        });
    }
});