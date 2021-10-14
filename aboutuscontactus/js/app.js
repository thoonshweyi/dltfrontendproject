const circles = document.querySelectorAll('.circles');
circles.forEach((circle)=>{
    // console.log(circle);
    circle.addEventListener('mouseenter',()=>{
        // console.log('hay');
        circle.parentNode.parentNode.classList.add('textshows');
    });

    circle.addEventListener('mouseleave',()=>circle.parentNode.parentNode.classList.remove('textshows'));
})