    const toogleBtn = document.getElementById("darktoggle");


toogleBtn.addEventListener('click', ()=>{
    const darkMode = document.body.classList.toggle('dark');
    if(darkMode){
        document.body.classList.add("bg-gray-700", "text-white")
        document.body.classList.remove('bg-white', 'text-gray-900')
        toogleBtn.textContent = 'sun';
    }
    else{
        document.body.classList.add("bg-white", "text-gray-900")
        document.body.classList.remove("bg-gray-700", "text-white")
        toogleBtn.textContent = 'moon'
    }
})