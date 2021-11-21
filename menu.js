// Font Size
let fontSizeInput=document.querySelector(".font_size_input");
fontSizeInput.addEventListener("change",function(){
    let fontSize = fontSizeInput.value;
    let address = addressInput.value;
    let id=getRidCid(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.fontSize = fontSize+"px";
});


// Font Family
let fontFamilyInput=document.querySelector(".font_family_input");
fontFamilyInput.addEventListener("change",function(){
    let fontFamily = fontFamilyInput.value;
    let address = addressInput.value;
    let id =getRidCid(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.fontFamily = fontFamily;
});



// Bold
let boldInput=document.querySelector(".fa-bold");
boldInput.addEventListener("click",function(){
    let address = addressInput.value;
    let id =getRidCid(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.fontWeight = "bold";
    boldInput.classList.add("selected");
});

//Italic
let ItalicInput=document.querySelector(".fa-italic");
ItalicInput.addEventListener("click",function(){
    let address = addressInput.value;
    let id =getRidCid(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.fontStyle = "italic";
    ItalicInput.classList.add("selected");
});

//UnderLine
let UnderlineInput=document.querySelector(".fa-underline");
UnderlineInput.addEventListener("click",function(){
    let address = addressInput.value;
    let id =getRidCid(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.textDecoration = "underline";
    UnderlineInput.classList.add("selected");
});

// Alignment
let alignInput=document.querySelector(".alignment_container");
alignInput.addEventListener("click",function(e){
    if(e.target !== alignInput){
        let classesArr = e.target.classList;
        let hAlignment = classesArr[classesArr.length - 1];
        let address = addressInput.value;
        let id =getRidCid(address);
        let tobeChangedCell = document.querySelector(`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
        tobeChangedCell.style.textAlign = hAlignment;    
        e.target.classList.add("selected");
    }
});


//Colors
let backgroundHInput = document.querySelector(".background_color");
let backgroundInput = document.querySelector(".fa-fill-drip");
backgroundInput.addEventListener("click", function (e){
    backgroundHInput.click();        //dom helping hidden click to trigger
})
backgroundHInput.addEventListener("change", function(e){
    let color = backgroundHInput.value;
    let address = addressInput.value;
    let id =getRidCid(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.backgroundColor = color;
    backgroundInput.style.color = color;
})

let textColorHInput = document.querySelector(".text_color");
let textColorInput = document.querySelector(".fa-font");
textColorInput.addEventListener("click", function (e){
    textColorHInput.click();        //dom helping hidden click to trigger
})
textColorHInput.addEventListener("change", function(e){
    let color = textColorHInput.value;
    let address = addressInput.value;
    let id =getRidCid(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${id.rId}'][cid='${id.cId}']`);
    tobeChangedCell.style.color = color;
    textColorInput.style.color = color;
})
