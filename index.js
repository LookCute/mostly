// Run once on page load
updateProjectClass();
// Run every time the window is resized
window.addEventListener("resize", updateProjectClass);
function updateProjectClass() {
    const projectPageSize = window.innerWidth;

    const element = document.getElementById("project-add-class");
    if (projectPageSize < 1700){
        if(clicked){
            element.classList.remove("card-show-hide");
            element.style.display = "block";    
        }
        else{
            element.classList.add("card-show-hide");
            element.style.display = "none";
        }
    } else {
        element.classList.remove("card-show-hide");
        element.style.display = "block";
    }
}


let clicked = false;
const cardHideShow = document.querySelectorAll(".card-show-hide");
document.getElementById("button-show-hide-card").addEventListener('click', () => {
    clicked = !clicked;
    cardHideShow.forEach(card => {
        // card.Style.display = (card.Style.display === "none" || card.Style.display === "") ? "block" : "none";
        if(card.style.display === "none" || card.style.display === ""){
            card.style.display = "block";
            document.getElementById("button-show-hide-card").innerHTML = "Hide Projects";
        }
        else{
            card.style.display = "none"; 
            document.getElementById("button-show-hide-card").innerHTML = "View All Projects";
        }
    });
    updateProjectClass();
});


const sidebar = document.getElementById("topsidebar-show-hide");
window.onscroll = function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        sidebar.style.display = "none";
    }
    else{
        sidebar.style.display = "flex";
    }
};


function scrollToSection(id){
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
}

window.addEventListener("scroll", () => {

    let currentId = "";
    document.querySelectorAll(".section").forEach(section => {
        if(scrollY >= section.offsetTop - 100){
            currentId = section.getAttribute("id");
        }
    });
    
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });
    
    if(currentId){
        const activeLink = document.getElementById(`link-${currentId}`);
        activeLink.classList.add("active");
    }
});