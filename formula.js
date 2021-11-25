// // cell -> formula remove / value set 
for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("blur", function () {
        let content = allCells[i].textContent;
        let address = addressInput.value;
        let { rId, cId } = getRidCid(address);
        let cellObject = db[rId][cId];
        cellObject.value = content;
        SolveUI(content, rId, cId)
    })
}

formulaInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && formulaInput.value != "") {
        let cFormula = formulaInput.value;
        let address = addressInput.value;
        let { rId, cId } = getRidCid(address);
        let value = evaluateFormula(cFormula);
        SolveUI(value, rId, cId);
        db[rId][cId].formula = cFormula;
        setParent(address, cFormula);

    }
})

function evaluateFormula(formula) {
    let formulaA = formula.split(" "); //['(', 'A1', '+', 'A2' ,')']
    for (let i = 0; i < formulaA.length; i++) {
        let ASCI = formulaA[i].charCodeAt(0);
        if (ASCI >= 65 && ASCI <= 90) { // A1 and A2
            let { rId, cId } = getRidCid(formulaA[i]);
            let value = db[rId][cId].value;
            formula = formula.replace(formulaA[i], value); // (A1+A2) converted to (10+20)
        }
    }
    let result = eval(formula); //Built in Evaluate function to evalutes maths
    return result;
}
function SolveUI(value, rId, cId) {
    let tobeChangedCell = document.querySelector(`.grid .cell[rid='${rId}'][cid='${cId}']`);
    tobeChangedCell.textContent = value;
    db[rId][cId].value = value;


    let childrenA = db[rId][cId].children;
    for(let i=0; i<childrenA.length; i++){
        let chRidCid = getRidCid(childrenA[i]);
        let chCellObj = db[chRidCid.rId][chRidCid.cId];
        let value= evaluateFormula(chCellObj.formula);
        SolveUI(value, chRidCid.rId, chRidCid.cId)
    }
}

//to set a cell as children of a cell
function setParent(address, formula) {
    let formulaA = formula.split(" "); //['(', 'A1', '+', 'A2' ,')']
    for (let i = 0; i < formulaA.length; i++) {
        let ASCI = formulaA[i].charCodeAt(0);
        if (ASCI >= 65 && ASCI <= 90) { // A1 and A2
            let parentObj = getRidCid(formulaA[i]);
            let children = db[parentObj.rId][parentObj.cId].children;
            children.push(address);
        }
    }
}