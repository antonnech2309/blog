let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle('active-menu');
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu")
    }
})
        //modal message
    let showMessageButton = document.querySelector(".resume-button");
    let form = document.querySelector(".modal-form");
    
    showMessageButton.addEventListener("click", function() {
        form.classList.toggle("show")
    })

    $('.menu').onePageNav()
    //modal window
    
    // let modal = document.querySelector(".registration-block")
    // let btn = document.querySelector(".quit-button")
    
    // function openModal () {
    //     modal.classList.add("show")
    //     modal.classList.remove("hide")
    // }
    // window.addEventListener("scroll", showModalByScroll)
    // function closeModal() {
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    // }
    
    // function showModalByScroll() {
    //     if(window.pageYOffset > document.documentElement.scrollHeight/2) {
    //         openModal()
    //         removeEventListener("scroll", showModalByScroll)
    //     }
    // }
    
    // btn.addEventListener("click", closeModal)
    
    // modal.addEventListener("click", function(e) {
    //     if(e.target === modal) {
    //         closeModal()
    //     }
    // })
    // function clickQuitButton() {
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    // }

    // btn.addEventListener("click", clickQuitButton)

    // modal.addEventListener("click", clickQuitButton)

    AOS.init();