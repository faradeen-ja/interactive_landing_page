// Globally Variable
// Udacity Nano Degree Program
// Final Review 
const header = document.querySelector('.header')
const menu_toggle = document.querySelector('.menu_toggle')
const cross= document.querySelector('.cross')
const bar= document.querySelector('.bar')
const navbar = document.querySelector('.navbar__list')
const navbar_div = document.querySelector('.navbar__menu')
// menu_toggle 
menu_toggle.addEventListener('click',()=>{
navbar_div.classList.toggle('navbar_active')
})
//Scroll to top page
document.getElementById('scroll_to_top_img').onclick=function()
{
    scrollTo({top:0,behavior:"smooth"});
}

//   Creating Navbar by using dynamic method     //
const section = document.querySelectorAll('section')
let total_section=0;
const creatingNavigation=(content)=>
{
    total_section++;
    const li=document.createElement('li');
    li.innerHTML=content;
    li.setAttribute('id',total_section);
    li.setAttribute('class','menu__link');
    document.getElementById("navbar__list").append(li);
}
//using this method when we creating any section then automatically create navbar
section.forEach(sec=>(
    creatingNavigation(sec.getAttribute("data-nav"))
))

// For body scroll and active class 
document.body.onscroll=function()
{
    for (let i = 1; i < total_section; i++) {
        if (window.pageYOffset >= (document.getElementById(`section${i}`).offsetTop + document.getElementById("main").offsetTop - window.innerHeight) && window.pageYOffset < (document.getElementById(`section${i + 1}`).offsetTop + document.getElementById("main").offsetTop - window.innerHeight)) {
            if (document.getElementsByClassName('active')[0] != undefined)//for the first click only
                document.getElementsByClassName('active')[0].setAttribute('class', 'menu__link');

            document.getElementById(i).setAttribute('class', 'active');
        }
    }
    //for the last element only
    if (window.pageYOffset >= (document.getElementById(`section${total_section}`).offsetTop + document.getElementById("main").offsetTop - window.innerHeight)) {
        if (document.getElementsByClassName('active')[0] != undefined)//for the first click only
            document.getElementsByClassName('active')[0].setAttribute('class', 'menu__link');

        document.getElementById(total_section).setAttribute('class', 'active');
    }

    //visible the scroll to top option when reaching the last two sections
    if (window.pageYOffset >= (document.getElementById(`section${total_section - 1}`).offsetTop + document.getElementById("main").offsetTop - window.innerHeight)) {
        document.getElementById('scroll_to_top_img').style.visibility = 'visible';
    }
    else
        document.getElementById('scroll_to_top_img').style.visibility = 'hidden';


}
// scroll to section by using event
document.getElementById("navbar__list").addEventListener('click',scroll_to_section);



function scroll_to_section(pressed)
{
    if(document.getElementsByClassName('active')[0]!=undefined)
        document.getElementsByClassName('active')[0].setAttribute('class','menu__link');
      if(pressed.target.tagName=='LI')
    {
       pressed.target.setAttribute('class','active');
        let id_of_li_pressed=pressed.target.id;
        navbar_div.classList.remove('navbar_active')
        let wanted_section=document.getElementById(`section${id_of_li_pressed}`);
        wanted_section.scrollIntoView({behavior: 'smooth'});
    }
}
