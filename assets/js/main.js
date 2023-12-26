const homeContainerFX ='home__container_fx'
const homeContainer ='.home__container'
const $homeContainer = document.querySelector(homeContainer)

$homeContainer.classList.add(homeContainerFX)

/*=============== TOGGLE MENU ===============*/
const menu = "menu"
const dropdown = "menu__dropdown"
const openDropdown = "menu__open"
const $menu = document.querySelector(`#${menu}`)
const $dropdown = document.querySelector(`.${dropdown}`)

const clickMenu = (e)=>{
  $dropdown.classList.toggle(openDropdown)
}
$menu.addEventListener('click',clickMenu)
/*=============== CHANGE BACKGROUND HEADER ===============*/
const headerContainer = "header__container"
const headerContainerShow = "header__container__show"
const $headerContainer = document.querySelector(`.${headerContainer}`)

window.addEventListener('scroll',e=>{
  let scrollTop = e.target.scrollingElement.scrollTop
  if(scrollTop>0){
    $headerContainer.classList.add(headerContainerShow)
  }else{
    $headerContainer.classList.remove(headerContainerShow)
  }
})

/*=============== POPULAR SWIPER ===============*/


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
