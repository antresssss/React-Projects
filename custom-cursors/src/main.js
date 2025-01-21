const cursor=document.getElementsById("cursor")

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.pageX +"px"
    cursor.style.top=e.pageY +"px"
})