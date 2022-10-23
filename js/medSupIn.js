let supDivision = document.getElementById('supDivision');
let supMonth = document.getElementById('supMonth');
let supYear = document.getElementById('supYear');
let supItemGroup = document.getElementById('supItemGroup');
let supItemLabel = document.getElementById('supItemLabel');
let supType = document.getElementById('supType');
let supAmount = document.getElementById('supAmount');
let supAddItem = document.getElementById('supAddItem');
let supAddItemIcon = document.getElementById('supAddItemIcon');
let supClearItem = document.getElementById('supClearItem');
let supDeleteAll = document.getElementById('supDeleteAll');
let supEdit = document.getElementById('supEdit');
let supDelete = document.getElementById('supDelete');
let confirmInputs = document.getElementById('confirmInputs');
let mood = 'add'
let temporaryMood;

/////////////////////// Create Item ///////////////////////////

let dataItem;

if (localStorage.item != null) {
    dataItem = JSON.parse(localStorage.item)
}
else {
    dataItem = [];
};

supAddItem.onclick = function () {
    let newItem = {
        supMonth: supMonth.value.toLowerCase(),
        supYear: supYear.value,
        supItemGroup: supItemGroup.value.toLowerCase(),
        supItemLabel: supItemLabel.value.toLowerCase(),
        supType: supType.value.toLowerCase(),
        supAmount: supAmount.value,
    }
    if (supMonth.value != '' && supYear.value != '' && supItemGroup.value != '' && supItemLabel.value != '' && supType.value != '' && supAmount.value != '') {
        if (mood === 'add') {
            dataItem.push(newItem);
            localStorage.setItem('item', JSON.stringify(dataItem));
        } else {
            dataItem[temporaryMood] = newItem;
            mood = 'add';
            supAddItem.innerHTML = '<i class="fa-solid fa-plus"></i>add to Chart';
        }
        clearData();
    }
    showData();
};

supClearItem.onclick = function () {
    clearData();
};

function clearData() {
    supMonthClear();
    supYearClear();
    supItemGroupClear();
    supItemLabelClear();
    supTypeClear();
    supAmountClear();
};

//////////////////////// Show Data //////////////

function showData() {
    let SupplyTable = '';
    for (let i = 0; i < dataItem.length; i++) {
        SupplyTable += `
        <tr>
            <td class="text-nowrap">${i + 1}</td>
            <td class="text-nowrap">${dataItem[i].supMonth}</td>
            <td class="text-nowrap">${dataItem[i].supYear}</td>
            <td class="text-nowrap">${dataItem[i].supItemGroup}</td>
            <td class="text-nowrap">${dataItem[i].supItemLabel}</td>
            <td class="text-nowrap">${dataItem[i].supType}</td>
            <td class="text-nowrap">${dataItem[i].supAmount}</td>
            <td class="text-nowrap"><button onclick=editData(${i}) class="btn btn-master" id="supEdit"><atr data-translation="supItemEdit"></atr></button></td>
            <td class="text-nowrap"><button onclick=deleteData(${i}) class="btn btn-red" id="supDelete"><atr data-translation="supItemDelete"></atr></button></td>
        </tr> 
        `;
    }
    document.getElementById('tbodySupply').innerHTML = SupplyTable;
    if (dataItem.length > 0) {
        supDeleteAll.innerHTML =
            `
        <button onclick="deleteAll()" class="btn btn-red">
        <i class="fa-solid fa-trash-can"></i>
        <atr data-translation="deleteAllItems"></atr> ( ${dataItem.length} <atr data-translation="supItem"></atr> )</button>
        `;
        confirmInputs.innerHTML = `
        <div class="mb-4 row g-1 justify-content-end mt-4">
            <button class="btn btn-padha col-md-4" type="submit" id="submitStaticsToServer">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                <atr data-translation="confirmInputs"></atr>
            </button>
        </div>
        `;
    }
    else {
        supDeleteAll.innerHTML = '';
        confirmInputs.innerHTML = '';
    }
};
showData();

//////////////////////// Delete Data //////////////

function deleteAll() {
    document.getElementById('configModal').style.display = 'flex';
};

function deleteData(i) {
    dataItem.splice(i, 1);
    localStorage.item = JSON.stringify(dataItem);
    showData()
    modalCancel()
};

function editData(i) {
    supMonth.value = dataItem[i].supMonth;
    supYear.value = dataItem[i].supYear;
    supItemGroup.value = dataItem[i].supItemGroup;
    supItemLabel.value = dataItem[i].supItemLabel;
    supType.value = dataItem[i].supType;
    supAmount.value = dataItem[i].supAmount;
    supAddItem.innerHTML = `<i class="fa-solid fa-pen-to-square"></i><atr data-translation="editItemData"></atr>`;
    mood = 'edit';
    temporaryMood = i;
    scroll({
        top: 0,
        behavior: 'smooth',
    })
    showData();
};


function modalCancel() {
    document.getElementById('configModal').style.display = 'none';
    document.getElementById('configModalItem').style.display = 'none';
};

function modalDelete() {
    localStorage.clear()
    dataItem.splice(0)
    showData()
    modalCancel()
};

function supMonthValid() {
    let supMonthValidation = document.getElementById('supMonthValid');
    if (!supMonth.checkValidity()) {
        supMonthValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Month`;
        supMonthValidation.style.color = "var(--red-color)";
        supMonthValidation.style.marginTop = "5px";
        supMonth.classList.remove("valid");
        supMonth.classList.add("inValid");
    } else {
        supMonthValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
        supMonthValidation.style.color = "var(--green-color)";
        supMonthValidation.style.marginTop = "5px";
        supMonth.classList.remove("inValid");
        supMonth.classList.add("valid");
    }
    if (supMonth.value === "") {
        supMonthValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Month`;
        supMonthValidation.style.color = "var(--red-color)";
        supMonthValidation.style.marginTop = "5px";
        supMonth.classList.remove("valid");
        supMonth.classList.add("inValid");
    };
};

function supMonthClear() {
    let supMonthValidation = document.getElementById('supMonthValid');
    supMonthValidation.innerHTML = "";
    supMonth.value = "";
    supMonthValidation.style.color = "var(--darkest-color)";
    supMonthValidation.style.marginTop = "0";
    supMonth.classList.remove("valid");
    supMonth.classList.remove("inValid");
};

function supYearValid() {
    let supYearValidation = document.getElementById('supYearValid');
    if (!supYear.checkValidity()) {
        supYearValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Add Valid Year`;
        supYearValidation.style.color = "var(--red-color)";
        supYearValidation.style.marginTop = "5px";
        supYear.classList.remove("valid");
        supYear.classList.add("inValid");
    } else {
        supYearValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
        supYearValidation.style.color = "var(--green-color)";
        supYearValidation.style.marginTop = "5px";
        supYear.classList.remove("inValid");
        supYear.classList.add("valid");
    }
    if (supYear.value === "") {
        supYearValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Add Valid Year`;
        supYearValidation.style.color = "var(--red-color)";
        supYearValidation.style.marginTop = "5px";
        supYear.classList.remove("valid");
        supYear.classList.add("inValid");
    }
};

function supYearClear() {
    let supYearValid = document.getElementById('supYearValid');
    supYearValid.innerHTML = "";
    supYear.value = "";
    supYearValid.style.color = "var(--darkest-color)";
    supYearValid.style.marginTop = "0";
    supYear.classList.remove("valid");
    supYear.classList.remove("inValid");
};

function supItemGroupValid() {
    let supItemGroupValidation = document.getElementById('supItemGroupValid');
    supItemLabel.disabled = false;
    if (!supItemGroup.checkValidity()) {
        supItemGroupValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Item Group`;
        supItemGroupValidation.style.color = "var(--red-color)";
        supItemGroupValidation.style.marginTop = "5px";
        supItemGroup.classList.remove("valid");
        supItemGroup.classList.add("inValid");
    } else {
        supItemGroupValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
        supItemGroupValidation.style.color = "var(--green-color)";
        supItemGroupValidation.style.marginTop = "5px";
        supItemGroup.classList.remove("inValid");
        supItemGroup.classList.add("valid");
    }
    if (supItemGroup.value == "") {
        supItemGroupValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Item Group`;
        supItemGroupValidation.style.color = "var(--red-color)";
        supItemGroupValidation.style.marginTop = "5px";
        supItemGroup.classList.remove("valid");
        supItemGroup.classList.add("inValid");
        supItemLabel.disabled = true;

    }
};

function supItemGroupClear() {
    let supItemGroupValid = document.getElementById('supItemGroupValid');
    supItemGroupValid.innerHTML = "";
    supItemGroup.value = "";
    supItemGroupValid.style.color = "var(--darkest-color)";
    supItemGroupValid.style.marginTop = "0";
    supItemGroup.classList.remove("valid");
    supItemGroup.classList.remove("inValid");
};

function supItemLabelValid() {
    let supItemLabelValidation = document.getElementById('supItemLabelValid');
    if (!supItemLabel.checkValidity()) {
        supItemLabelValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Item Group`;
        supItemLabelValidation.style.color = "var(--red-color)";
        supItemLabelValidation.style.marginTop = "5px";
        supItemLabel.classList.remove("valid");
        supItemLabel.classList.add("inValid");
    } else {
        supItemLabelValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
        supItemLabelValidation.style.color = "var(--green-color)";
        supItemLabelValidation.style.marginTop = "5px";
        supItemLabel.classList.remove("inValid");
        supItemLabel.classList.add("valid");
    }
    if (supItemLabel.value === "") {
        supItemLabelValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Item Label`;
        supItemLabelValidation.style.color = "var(--red-color)";
        supItemLabelValidation.style.marginTop = "5px";
        supItemLabel.classList.remove("valid");
        supItemLabel.classList.add("inValid");
    }
};

function supItemLabelClear() {
    let supItemLabelValid = document.getElementById('supItemLabelValid');
    supItemLabelValid.innerHTML = "";
    supItemLabel.value = "";
    supItemLabelValid.style.color = "var(--darkest-color)";
    supItemLabelValid.style.marginTop = "0";
    supItemLabel.classList.remove("valid");
    supItemLabel.classList.remove("inValid");
    supItemLabel.disabled = "true";
};

function supTypeValid() {
    let supTypeValidation = document.getElementById('supTypeValid');
    if (!supType.checkValidity()) {
        supTypeValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Item Type`;
        supTypeValidation.style.color = "var(--red-color)";
        supTypeValidation.style.marginTop = "5px";
        supType.classList.remove("valid");
        supType.classList.add("inValid");
    } else {
        supTypeValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
        supTypeValidation.style.color = "var(--green-color)";
        supTypeValidation.style.marginTop = "5px";
        supType.classList.remove("inValid");
        supType.classList.add("valid");
    }
    if (supType.value === "") {
        supTypeValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Choose Item Type`;
        supTypeValidation.style.color = "var(--red-color)";
        supTypeValidation.style.marginTop = "5px";
        supType.classList.remove("valid");
        supType.classList.add("inValid");

    }
};

function supTypeClear() {
    let supTypeValid = document.getElementById('supTypeValid');
    supTypeValid.innerHTML = "";
    supType.value = "";
    supTypeValid.style.color = "var(--darkest-color)";
    supTypeValid.style.marginTop = "0";
    supType.classList.remove("valid");
    supType.classList.remove("inValid");
};

function supAmountValid() {
    let supAmountValidation = document.getElementById('supAmountValid');
    if (!supAmount.checkValidity()) {
        supAmountValidation.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>3 Digits Only`;
        supAmountValidation.style.color = "var(--red-color)";
        supAmountValidation.style.marginTop = "5px";
        supAmount.classList.remove("valid");
        supAmount.classList.add("inValid");
    } else {
        supAmountValidation.innerHTML = `<i class="fa-solid fa-check"></i>`;
        supAmountValidation.style.color = "var(--green-color)";
        supAmountValidation.style.marginTop = "5px";
        supAmount.classList.remove("inValid");
        supAmount.classList.add("valid");
    }
};

function supAmountClear() {
    let supAmountValid = document.getElementById('supAmountValid');
    supAmountValid.innerHTML = "";
    supAmount.value = "";
    supAmountValid.style.color = "var(--darkest-color)";
    supAmountValid.style.marginTop = "0";
    supAmount.classList.remove("valid");
    supAmount.classList.remove("inValid");
};
