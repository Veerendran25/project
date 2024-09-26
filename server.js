const express =require('express')
let app=express()
const cors=require('cors')
const fs=require('fs')
const path=require('path')
const body=require('body-parser')
app.use(express.static('./resume'))
const mainPage=fs.readFileSync('./resume/index.html','utf8')
const html=fs.readFileSync('./resume/resume.html','utf8')
app.use(cors())
app.use(body.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',(req,res)=>
{
    console.log('....:/')
    res.status(200).send(mainPage)
})
app.post('/',(req,res)=>
{
    const {firstName,lastName,phone,linked,git,loc,l1,l2,l3,l4,l5,l6,sk1,sk2,sk3,sk4,sk5,sk6,Mail,spec,clgName,twschlName,syear,eyear,schlName,twsyear,tweyear,tesyear,teeyear,floatingTextarea,title1,title2,sub1,sub2,desc1,desc2,t1,t2,dr1,dr2,d1,d2,cgpa,twp,tep}=req.body
    console.log(req.body)
    /*let ans=html.replace('{{%firstName%}}',firstName)
    ans=ans.replace('{{%lastName%}}',lastName)
    ans=ans.replace('{{%phone%}}',phone)
    ans=ans.replace('{{%location%}}',loc)
    ans=ans.replace('{{%mail%}}',Mail)
    ans=ans.replace('{{%linkedIn%}}',linked)
    ans=ans.replace('{{%github%}}',git)
    ans=ans.replace('{{%content%}}',floatingTextarea)
    ans=ans.replace('{{%Specialization%}}',spec)
    ans=ans.replace('{{%college%}}',clgName)
    ans=ans.replace('{{%cgpa%}}',cgpa)
    ans=ans.replace('{{%clgStart%}}',syear)
    ans=ans.replace('{{%clgEnd%}}',eyear)
    ans=ans.replace('{{%schoolHSC%}}',twschlName)
    ans=ans.replace('{{%twelve%}}',twp)
    ans=ans.replace('{{%twStart%}}',twsyear)
    ans=ans.replace('{{%twEnd%}}',tweyear)
    ans=ans.replace('{{%schoolSSLC%}}',schlName)
    ans=ans.replace('{{%ten%}}',tep)
    ans=ans.replace('{{%tenStart%}}',tesyear)
    ans=ans.replace('{{%tenEnd%}}',teeyear)
    ans=ans.replace('{{%skill1%}}',sk1)
    ans=ans.replace('{{%skill2%}}',sk2)
    ans=ans.replace('{{%skill3%}}',sk3)
    ans=ans.replace('{{%skill4%}}',sk4)
    ans=ans.replace('{{%skill5%}}',sk5)
    ans=ans.replace('{{%skill6%}}',sk6)
    ans=ans.replace('{{%projectTitle1%}}',title1)
    ans=ans.replace('{{%TechStack1%}}',sub1)
    ans=ans.replace('{{%desc1%}}',desc1)
    ans=ans.replace('{{%projectTitle2%}}',title2)
    ans=ans.replace('{{%TechStack2%}}',sub2)
    ans=ans.replace('{{%desc2%}}',desc2)
    ans=ans.replace('{{%Title1%}}',t1)
    ans=ans.replace('{{%duration%}}',dr1)
    ans=ans.replace('{{%eDesc1%}}',d1)
    ans=ans.replace('{{%Title2%}}',t2)
    ans=ans.replace('{{%duration1%}}',dr2)
    ans=ans.replace('{{%eDesc2%}}',d2)
    ans=ans.replace('{{%l1%}}',l1)
    ans=ans.replace('{{%l2%}}',l2)
    ans=ans.replace('{{%l3%}}',l3)
    ans=ans.replace('{{%l4%}}',l4)
    ans=ans.replace('{{%l5%}}',l5)
    ans=ans.replace('{{%l6%}}',l6)
    */
    let ans=html

    function valueReplace(placeholder,value)
    {
        if (value && value.trim()!=='')
        {
            ans=ans.replace(`{{%${placeholder}%}}`,value)
        }
        else
        {
            ans=ans.replace(`{{%${placeholder}%}}`,'')
        }
    }
    valueReplace('firstName', firstName);
    valueReplace('lastName', lastName);
    valueReplace('phone', phone);
    valueReplace('location', loc);
    valueReplace('mail', Mail);
    valueReplace('linkedIn', linked);
    valueReplace('github', git);
    valueReplace('gb',git);
    valueReplace('lIn',linked);
    valueReplace('m',Mail);
    valueReplace('content', floatingTextarea);
    valueReplace('Specialization', spec);
    valueReplace('college', clgName);
    valueReplace('cgpa', cgpa);
    valueReplace('clgStart', syear);
    valueReplace('clgEnd', eyear);
    valueReplace('schoolHSC', twschlName);
    valueReplace('twelve', twp);
    valueReplace('twStart', twsyear);
    valueReplace('twEnd', tweyear);
    valueReplace('schoolSSLC', schlName);
    valueReplace('ten', tep);
    valueReplace('tenStart', tesyear);
    valueReplace('tenEnd', teeyear);
    valueReplace('skill1', sk1);
    valueReplace('skill2', sk2);
    valueReplace('skill3', sk3);
    valueReplace('skill4', sk4);
    valueReplace('skill5', sk5);
    valueReplace('skill6', sk6);
    valueReplace('projectTitle1', title1);
    valueReplace('TechStack1', sub1);
    valueReplace('desc1', desc1);
    valueReplace('projectTitle2', title2);
    valueReplace('TechStack2', sub2);
    valueReplace('desc2', desc2);
    valueReplace('Title1', t1);
    valueReplace('duration', dr1);
    valueReplace('eDesc1', d1);
    valueReplace('Title2', t2);
    valueReplace('duration1', dr2);
    valueReplace('eDesc2', d2);
    valueReplace('l1', l1);
    valueReplace('l2', l2);
    valueReplace('l3', l3);
    valueReplace('l4', l4);
    valueReplace('l5', l5);
    valueReplace('l6', l6);


    fs.writeFile('./resume/output.html',ans,(err)=>
    {
        if(err)
        {
            console.log("error",err)
        res.status(404).send("Page Not Found 404")
        }
        console.log("resume updated successfully")
        res.status(200).send(ans);
    })
})

app.listen(5000,'127.0.0.1',()=>
{
    console.log('server is listening')
})