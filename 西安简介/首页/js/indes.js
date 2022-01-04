window.addEventListener('load',function(){
    //1.获取元素
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus =document.querySelector('.focus');
    //2.鼠标经过tupian 就显示隐藏左右按钮
    focus.addEventListener('mouseenter',function(){
        prev.style.display ='block';
        next.style.display ='block';
    })
    focus.addEventListener('mouseleave',function(){
        prev.style.display ='none';
        next.style.display ='none';
    })
})
