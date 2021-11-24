// // cell -> formula remove / value set 
for (let i = 0; i < allCells.length; i++){
    allCells[i].addEventListener("blur", function(){
        let content = allCells[i].textContent;
        let address = addressInput.value;
        let id=getRidCid(address);
        let cellObject = db[`${id.rId}`][`${id.cId}`];
        cellObject.value = content;
    })
}