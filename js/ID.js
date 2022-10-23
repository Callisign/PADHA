
function DatOfBirthAuto() {

    let ID = document.getElementById("ID").value;
    let IDDayStr = ID.slice(5, 7);
    let IDMonthStr = ID.slice(3, 5);
    let IDYearStr = ID.slice(1, 3);
    let IDCenturyStr = ID.slice(0, 1);

    IDCenturyStr == "1" ?
        IDCenturyStr = "18" :
        IDCenturyStr == "2" ?
            IDCenturyStr = "19" :
            IDCenturyStr == "3" ?
                IDCenturyStr = "20" :
                IDCenturyStr == "4" ?
                    IDCenturyStr = "21" :
                    IDCenturyStr == "5" ?
                        IDCenturyStr = "22" :
                        IDCenturyStr = "";

    let IDDOBStr = IDDayStr + "/" + IDMonthStr + "/" + IDCenturyStr + IDYearStr;
    document.getElementById('DOB').innerHTML = `Date of Birth: ${IDDOBStr}`;


    let IDPOBStr = ID.slice(7, 9);
    let IDSexStr = ID.slice(12, 13);

    switch (IDPOBStr) {
        case "01":
            document.getElementById('output').innerHTML = "Place of Birth: Cairo";
            break;
        case "02":
            document.getElementById('output').innerHTML = "Place of Birth: Alexandria";
            break;
        case "18":
            document.getElementById('output').innerHTML = "Place of Birth: Kafr AlShiekh";
            break;
        case "88":
            document.getElementById('output').innerHTML = "Place of Birth: Not In Egypt";
            break;
    };

    switch (IDSexStr) {
        case "1": case "3": case "5": case "7": case "9":
            document.getElementById('sex').innerHTML = "Sex: Male";
            break;
        case "0": case "2": case "4": case "6": case "8":
            document.getElementById('sex').innerHTML = "Sex: Female";
            break;
    };

}




