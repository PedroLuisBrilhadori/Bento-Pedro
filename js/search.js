let searchBox=document.getElementById("searchtxt");


searchBox.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        setTimeout(()=>{searchBox.value=""},1000);
    }
});



searchBox.addEventListener('keydown',(e)=>{
    if(searchBox.value=="f" && e.key=="b"){
        window.open('https://www.facebook.com',"_self");
    }
})

searchBox.addEventListener('keydown',(e)=>{
    if(searchBox.value=="w" && e.key=="p"){
        window.open('https://web.whatsapp.com/',"_self");
    }
})
searchBox.addEventListener('keydown',(e)=>{
    if(searchBox.value=="g" && e.key=="g"){
        window.open('https://google.com/',"_self");
    }
})