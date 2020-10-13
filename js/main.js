
// تحديد العناصر 

// الفرنسي 
let france = document.getElementById("france");

// العربي 
let arabic = document.getElementById("arabic");

// العنصر انجليزي 
let english = document.getElementById("english");




// العناصر المراد ترجمتها 
let h1_1 = document.getElementById("h1_1");


// تحديد الامر المراد عند الضغط علي 

// فرنسي
// france.onclick= ()=>{
  // setLanugage("france");
  
  
  // // التخزين المحلي 
  // localStorage.setItem("lang" , "france");
// };


// عربي 
arabic.onclick = ()=>{
  setLanugage("arabic");
  
  
  localStorage.setItem("lang" , "arabic");
};


// عند الضغط علي الانجليزي 
english.onclick = ()=>{
  setLanugage("english");
  
  
  localStorage.setItem("lang" , "english");
};

// هذا العنصر لكي يتم استدعاء العنصر وتنفيذه 
onload = ()=>{
  setLanugage(localStorage.getItem("lang"));
};

// هنا يتم تنفيذ الامر الضغط 
// الضغط علي العربي 
function setLanugage(getLanugage){
  // العربي 
  if(getLanugage === "arabic"){
    
    h1_1.innerHTML = " مازن سعد ";
    
  
  }
  // الفرنسي 
  else if(getLanugage === "france"){
    h1_1.innerHTML = "Mâžêŋ Ŝãåð";
  }
  // الانجليزي 
  else if(getLanugage === "english"){
    h1_1.innerHTML = "Mazen Saad";
    
    
  }
}



//