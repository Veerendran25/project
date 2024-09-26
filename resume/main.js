let a=document.getElementById('cont')
let b=document.getElementById('slide')
let nxt=document.getElementById('nxt')
let c=document.getElementById('slide1')
let prev=document.getElementById('prev')
let nxt1=document.getElementById('nxt1')
let s2=document.getElementById('s2')
const btn=document.getElementById('btn')
let nxt2=document.getElementById('nxt2')
let prev1=document.getElementById('prev1')
let s3=document.getElementById('s3')
let prev2=document.getElementById('prev2')
let nxt3=document.getElementById('nxt3')
let s4=document.getElementById('s4')
let prev4=document.getElementById('prev4')
let nxt5=document.getElementById('nxt5')
let prev3=document.getElementById('prev3')
let nxt4=document.getElementById('nxt4')
let s5=document.getElementById('s5')
let s6=document.getElementById('s6')
let prev5=document.getElementById('prev5')
let prev6=document.getElementById('prev6')
let nxt6=document.getElementById('nxt6')
let submit=document.getElementById('submit')
let dwnld=document.getElementById('dwnld')
let s7=document.getElementById('s7')
let s8=document.getElementById('s8')


prev5.addEventListener('click',()=>
{
    s6.style.display="none"
    s5.style.display="block"
})
prev6.addEventListener('click',()=>
{
    s7.style.display="none"
    s6.style.display="block"
})
nxt6.addEventListener('click',()=>
{
    s6.style.display="none"
    s7.style.display="block"
})
submit.addEventListener('click',()=>
{
    s7.style.display="none"
    s8.style.display="block"
})


prev3.addEventListener('click',function()
{
    s4.style.display="none"
    s3.style.display="block"
})
prev4.addEventListener('click',()=>
{
    s4.style.display="block"
    s5.style.display="none"
})
nxt4.addEventListener('click',function()
{
    s4.style.display="none"
    s5.style.display="block"
})
nxt5.addEventListener('click',function()
{
    s5.style.display="none"
    s6.style.display="block"
})

prev2.addEventListener('click',function()
{
    s3.style.display="none";
    s2.style.display="block"
})
nxt3.addEventListener('click',function()
{
    s3.style.display="none";
    s4.style.display="block"
})

prev1.addEventListener('click',function()
{
    s2.style.display="none";
    c.style.display="block"
})
nxt2.addEventListener('click',function()
{
    s2.style.display="none";
    s3.style.display="block";
})

nxt1.addEventListener('click',function()
{
    c.style.display="none"
    s2.style.display="block"
})
prev.addEventListener('click',function()
{
    c.style.display="none";
    b.style.display="block";
})
btn.addEventListener('click',function()
{
        a.style.display="none";
        b.style.display="block";
})

nxt.addEventListener('click',function()
{
    b.style.display="none";
    c.style.display="block"
})


dwnld.addEventListener('click',()=>
    {
        
        s8.style.display="none"
        a.style.display="flex"
    })

