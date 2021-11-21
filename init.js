// Creating cells (A-Z)
let topRow = document.querySelector(".top_row");
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i); //ASCII for A-z
    topRow.appendChild(div)
}

// Creating Cells (1-100)
let leftCol = document.querySelector(".left_col")
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div)
}

//creating empty cells 
let grid = document.querySelector(".grid")
for (let i = 0; i < 100; i++) {
    let row = document.createElement("div");
    row.setAttribute("class","row");
    for (let j = 0; j < 26; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.textContent=String.fromCharCode(65+j)+(i+1);
        div.setAttribute("contentEditable","true")
        div.setAttribute("rId",i);
        div.setAttribute("cId",j);
        row.appendChild(div);
    }
    grid.appendChild(row);
}

// Clicking on cell will give address using rID, cID to address Bar
let allCells=document.querySelectorAll(".grid .cell");
let addressInput = document.querySelector(".address_input");
for(let i=0; i < allCells.length; i++){
    allCells[i].addEventListener("click", function (e) {
        let r = allCells[i].getAttribute("rId");
        let c = allCells[i].getAttribute("cId");
        r=Number(r);
        c=Number(c);
        addressInput.value = String.fromCharCode(c + 65) + (r + 1);
    })
}


// Get First Cell
let firstCell = document.querySelector(".grid .cell[rid='0'][cid='0']");
firstCell.focus();

  
// Get RID CID from address
function getRidCid(address){
    let ASCI=address.charCodeAt(0);
    let cid= (ASCI - 65);
    let rid=Number(address.substring(1))-1;
    return{
        rId:rid, cId:cid
    }
}