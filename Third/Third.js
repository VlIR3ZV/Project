var home=document.getElementsByTagName("a")[0]
var home=document.getElementsByTagName("a")[1]
var store=document.getElementsByTagName("a")[2]
var store=document.getElementsByTagName("a")[3]
var about=document.getElementsByTagName("a")[4]
var about=document.getElementsByTagName("a")[5]
var service=document.getElementsByTagName("a")[6]
var service=document.getElementsByTagName("a")[7]
var contact=document.getElementsByTagName("a")[8]
var contact=document.getElementsByTagName("a")[9]
var color =document.getElementsByTagName("div")[1]

home.addEventListener("mouseenter",()=>{
    color.style.marginRight=350+"px";
    color.style.marginLeft=0+"px";
})
store.addEventListener("mouseenter",()=>{
    color.style.marginRight=186+"px";
    color.style.marginLeft=0+"px";
})
about.addEventListener("mouseenter",()=>{
    color.style.marginRight=0+"px"
    color.style.marginLeft=4+"px";
})
service.addEventListener("mouseenter",()=>{
    color.style.marginLeft=188+"px";
    color.style.marginRight=0+"px";
})
contact.addEventListener("mouseenter",()=>{
    color.style.marginLeft=390+"px";
    color.style.marginRight=0+"px";
})