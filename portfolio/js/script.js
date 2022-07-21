const header=document.querySelector('header');
window.addEventListener("scroll",function(e){
    header.classList.toggle("sticky",this.window.scrollY>0)
})