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