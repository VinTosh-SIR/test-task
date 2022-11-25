/* Look for any elements with the class "custom-select": */

let getCustomSelect = document.getElementsByClassName("custom-select");
for (let i = 0; i < getCustomSelect.length; i++) {
    let selElmnt = getCustomSelect[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    let createDiv = document.createElement("DIV");
    createDiv.setAttribute("class", "select-selected");
    createDiv.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    getCustomSelect[i].appendChild(createDiv);
    /* For each element, create a new DIV that will contain the option list: */
    let createContainDiv = document.createElement("DIV");
    createContainDiv.setAttribute("class", "select-items select-hide");
    for (let i = 1; i < selElmnt.length; i++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        let createDivOption = document.createElement("DIV");
        createDivOption.innerHTML = selElmnt.options[i].innerHTML;
        createDivOption.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            let updateBox = this.parentNode.parentNode.getElementsByTagName("select")[0];

            let selectSelected = this.parentNode.previousSibling;
            for (let i = 0; i < updateBox.length; i++) {
                if (updateBox.options[i].innerHTML == this.innerHTML) {
                    updateBox.selectedIndex = i;
                    selectSelected.innerHTML = this.innerHTML;
                    let sameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");

                    for (let i = 0; i < sameAsSelected.length; i++) {
                        sameAsSelected[i].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            selectSelected.click();
        });
        createContainDiv.appendChild(createDivOption);
    }
    getCustomSelect[i].appendChild(createContainDiv);
    createDiv.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    let arrNo = [];
    let getSelectItems = document.getElementsByClassName("select-items");
    let getSelectSelected = document.getElementsByClassName("select-selected");
    for (let i = 0; i < getSelectSelected.length; i++) {
        if (elmnt == getSelectSelected[i]) {
            arrNo.push(i)
        } else {
            getSelectSelected[i].classList.remove("select-arrow-active");
        }
    }
    for (let i = 0; i < getSelectItems.length; i++) {
        if (arrNo.indexOf(i)) {
            getSelectItems[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);