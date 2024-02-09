//Header section

//Open and Close sidenav-bar Section

function opensidenav(){
    document.querySelector(".sidenav-bar").style.right="0%"
}

function closesidenav(){
    document.querySelector(".sidenav-bar").style.right="-50%"
}





// About Section

// show the about details when we click the about links

var aboutTitleLinks=document.getElementsByClassName("about-title-links")

var aboutTitleContents=document.getElementsByClassName("about-title-contents")

function opentab(tabname){
    for(aboutTitleLink of aboutTitleLinks)
    {

        aboutTitleLink.classList.remove("active-link")

    }
    for(aboutTitleContent of aboutTitleContents)
    {

        aboutTitleContent.classList.remove("active-content")

    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-content")
}