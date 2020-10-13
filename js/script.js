// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------


let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

let title1 = document.getElementById("title1");


// title1

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

// ----------------------------------------------------

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

// ----------------------------------------------------

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

// ----------------------------------------------------

function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = " مطعم افندينا ";
    welcome.innerHTML = " مرحبا بكم في صفحة مطعم افندينا ";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = " اسماك افندينا مطعم ماكولات بحرية ";
    contact.innerHTML = "اتصل بنا";
	
	
	title1.innerHTML = " مطعم افندينا ";


}else if(getLanuage ==="english"){
    title.innerHTML = " Afandina Restaurant ";
    welcome.innerHTML = " Welocome To Website Of Afandina Restaurant ";
    about.innerHTML = "  About US";
    aboutText.innerHTML = " Afandina Fish Is a Seafood Restaurant ";
    contact.innerHTML = "Contact us";
	
	
	title1.innerHTML = " Afandina Restaurant ";

}


}




<!-- mdb --><!-- mdb --><!-- mdb --><!-- mdb --><!-- mdb --><!-- mdb -->