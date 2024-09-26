const exp=document.getElementById('check')
const title=document.getElementById('t1')
const duration=document.getElementById('dr')
const description=document.getElementById('d')

function checkValue(c)
{
    if(title.innerText=='' && duration.innerText=='' && description.innerText=='')
    {
        c.style.display='none'
    }
}

checkValue(exp)