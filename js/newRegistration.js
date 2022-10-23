let firstName = document.getElementById('firstName');
let firstNameAr = document.getElementById('firstNameAr');
let lastName = document.getElementById('lastName');
let lastNameAr = document.getElementById('lastNameAr');
let address = document.getElementById('address');
let government = document.getElementById('government');
let dateOfBirth = document.getElementById('dateOfBirth');
let gender = document.getElementById('gender');
let PlacOfBirth = document.getElementById('placeOfBirth');
let dateOfRetirement = document.getElementById('dateOfRetirement');

function DatOfBirthAuto() {

    let ID = document.getElementById("nationalID").value;
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

    let IDDOBStr = IDDayStr + " / " + IDMonthStr + " / " + IDCenturyStr + IDYearStr;
    dateOfBirth.innerHTML = IDDOBStr;

    let serviceYears;
    let IDFirstLeft = ID.slice(0, 1);

    if (+IDYearStr == 71 && +IDFirstLeft == 2) {
        serviceYears = 61;
    } else if (+IDYearStr == 72 && +IDFirstLeft == 2) {
        serviceYears = 62;
    } else if (+IDYearStr == 73 && +IDFirstLeft == 2) {
        serviceYears = 63;
    } else if (+IDYearStr == 74 && +IDFirstLeft == 2) {
        serviceYears = 64;
    } else if (+IDYearStr > 74 && +IDFirstLeft == 2) {
        serviceYears = 65;
    } else if (+IDYearStr < 71 && +IDFirstLeft == 2) {
        serviceYears = 60;
    } else {
        serviceYears = 65;
    };

    let retireYear = Number(IDYearStr) + serviceYears;
    let retireCentury = Number(IDCenturyStr);

    if (retireYear > 99) {
        retireYear -= 100;
        retireCentury += 1;
    } else {
        retireCentury;
    }

    let retireDate = IDDayStr + " / " + IDMonthStr + " / " + retireCentury + retireYear;
    dateOfRetirement.innerHTML = retireDate;


    let IDPOBStr = ID.slice(7, 9);
    let IDSexStr = ID.slice(12, 13);

    switch (IDSexStr) {
        case "1": case "3": case "5": case "7": case "9":
            gender.innerHTML = `<atr data-translation="male"></atr>`;
            break;
        case "0": case "2": case "4": case "6": case "8":
            gender.innerHTML = `<atr data-translation="female"></atr>`;
            break;
    };
    /*
    switch (IDSexStr) {
        case "1": case "3": case "5": case "7": case "9":
            gender.innerHTML = `<atr data-translation="male"></atr>`;
            break;
        case "0": case "2": case "4": case "6": case "8":
            gender.innerHTML = `<atr data-translation="female"></atr>`;
            break;
    };*/

    switch (IDPOBStr) {
        case "01":
            PlacOfBirth.innerHTML = `<atr data-translation="govCairo"></atr>`;
            break;
        case "02":
            PlacOfBirth.innerHTML = `<atr data-translation="govAlexandria"></atr>`;
            break;
        case "03":
            PlacOfBirth.innerHTML = `<atr data-translation="govPortSaied"></atr>`;
            break;
        case "04":
            PlacOfBirth.innerHTML = `<atr data-translation="govSuez"></atr>`;
            break;
        case "11":
            PlacOfBirth.innerHTML = `<atr data-translation="govDamietta"></atr>`;
            break;
        case "12":
            PlacOfBirth.innerHTML = `<atr data-translation="govDakahlia"></atr>`;
            break;
        case "13":
            PlacOfBirth.innerHTML = `<atr data-translation="govSharqia"></atr>`;
            break;
        case "14":
            PlacOfBirth.innerHTML = `<atr data-translation="govQalyubia"></atr>`;
            break;
        case "15":
            PlacOfBirth.innerHTML = `<atr data-translation="govKafrElSheikh"></atr>`;
            break;
        case "16":
            PlacOfBirth.innerHTML = `<atr data-translation="govDakahlia"></atr>`;
            break;
        case "17":
            PlacOfBirth.innerHTML = `<atr data-translation="govMonufia"></atr>`;
            break;
        case "18":
            PlacOfBirth.innerHTML = `<atr data-translation="govBeheira"></atr>`;
            break;
        case "19":
            PlacOfBirth.innerHTML = `<atr data-translation="govIsmailia"></atr>`;
            break;
        case "21":
            PlacOfBirth.innerHTML = `<atr data-translation="govGiza"></atr>`;
            break;
        case "22":
            PlacOfBirth.innerHTML = `<atr data-translation="govBeniSuef"></atr>`;
            break;
        case "23":
            PlacOfBirth.innerHTML = `<atr data-translation="govFaiyum"></atr>`;
            break;
        case "24":
            PlacOfBirth.innerHTML = `<atr data-translation="govMinya"></atr>`;
            break;
        case "25":
            PlacOfBirth.innerHTML = `<atr data-translation="govAsyut"></atr>`;
            break;
        case "26":
            PlacOfBirth.innerHTML = `<atr data-translation="govSohag"></atr>`;
            break;
        case "27":
            PlacOfBirth.innerHTML = `<atr data-translation="govQena"></atr>`;
            break;
        case "28":
            PlacOfBirth.innerHTML = `<atr data-translation="govAswan"></atr>`;
            break;
        case "29":
            PlacOfBirth.innerHTML = `<atr data-translation="govLuxor"></atr>`;
            break;
        case "31":
            PlacOfBirth.innerHTML = `<atr data-translation="govRedSea"></atr>`;
            break;
        case "32":
            PlacOfBirth.innerHTML = `<atr data-translation="govNewValley"></atr>`;
            break;
        case "33":
            PlacOfBirth.innerHTML = `<atr data-translation="govMatruh"></atr>`;
            break;
        case "34":
            PlacOfBirth.innerHTML = `<atr data-translation="govNotthSinai"></atr>`;
            break;
        case "35":
            PlacOfBirth.innerHTML = `<atr data-translation="govSouthSinai"></atr>`;
            break;
        case "88":
            PlacOfBirth.innerHTML = `<atr data-translation="govOutOfEgypt"></atr>`;
            break;
        default:
            PlacOfBirth.innerHTML = `<atr data-translation="govIDNumberIncorrect"></atr>`;
    };
}


/*
function DatOfBirthAuto() {

    let ID = document.getElementById("nationalID").value;
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

    let IDDOBStr = IDDayStr + " / " + IDMonthStr + " / " + IDCenturyStr + IDYearStr;
    dateOfBirth.innerHTML = IDDOBStr;


    let retireDay = IDDayStr;
    let retireMnonth;
    let retireYear;
    let retireCentury;


    let retreDate = IDDayStr + " / " + IDMonthStr + " / " + IDCenturyStr + (Number(IDYearStr) - 40);
    dateOfRetirement.innerHTML = retreDate;

    let IDPOBStr = ID.slice(7, 9);
    let IDSexStr = ID.slice(12, 13);

    switch (IDSexStr) {
        case "1": case "3": case "5": case "7": case "9":
            gender.innerHTML = `<atr data-translation="male"></atr>`;
            break;
        case "0": case "2": case "4": case "6": case "8":
            gender.innerHTML = `<atr data-translation="female"></atr>`;
            break;
    };

    switch (IDPOBStr) {
        case "01":
            PlacOfBirth.innerHTML = `<atr data-translation="govCairo"></atr>`;
            break;
        case "02":
            PlacOfBirth.innerHTML = `<atr data-translation="govAlexandria"></atr>`;
            break;
        case "03":
            PlacOfBirth.innerHTML = `<atr data-translation="govPortSaied"></atr>`;
            break;
        case "04":
            PlacOfBirth.innerHTML = `<atr data-translation="govSuez"></atr>`;
            break;
        case "11":
            PlacOfBirth.innerHTML = `<atr data-translation="govDamietta"></atr>`;
            break;
        case "12":
            PlacOfBirth.innerHTML = `<atr data-translation="govDakahlia"></atr>`;
            break;
        case "13":
            PlacOfBirth.innerHTML = `<atr data-translation="govSharqia"></atr>`;
            break;
        case "14":
            PlacOfBirth.innerHTML = `<atr data-translation="govQalyubia"></atr>`;
            break;
        case "15":
            PlacOfBirth.innerHTML = `<atr data-translation="govKafrElSheikh"></atr>`;
            break;
        case "16":
            PlacOfBirth.innerHTML = `<atr data-translation="govDakahlia"></atr>`;
            break;
        case "17":
            PlacOfBirth.innerHTML = `<atr data-translation="govMonufia"></atr>`;
            break;
        case "18":
            PlacOfBirth.innerHTML = `<atr data-translation="govBeheira"></atr>`;
            break;
        case "19":
            PlacOfBirth.innerHTML = `<atr data-translation="govIsmailia"></atr>`;
            break;
        case "21":
            PlacOfBirth.innerHTML = `<atr data-translation="govGiza"></atr>`;
            break;
        case "22":
            PlacOfBirth.innerHTML = `<atr data-translation="govBeniSuef"></atr>`;
            break;
        case "23":
            PlacOfBirth.innerHTML = `<atr data-translation="govFaiyum"></atr>`;
            break;
        case "24":
            PlacOfBirth.innerHTML = `<atr data-translation="govMinya"></atr>`;
            break;
        case "25":
            PlacOfBirth.innerHTML = `<atr data-translation="govAsyut"></atr>`;
            break;
        case "26":
            PlacOfBirth.innerHTML = `<atr data-translation="govSohag"></atr>`;
            break;
        case "27":
            PlacOfBirth.innerHTML = `<atr data-translation="govQena"></atr>`;
            break;
        case "28":
            PlacOfBirth.innerHTML = `<atr data-translation="govAswan"></atr>`;
            break;
        case "29":
            PlacOfBirth.innerHTML = `<atr data-translation="govLuxor"></atr>`;
            break;
        case "31":
            PlacOfBirth.innerHTML = `<atr data-translation="govRedSea"></atr>`;
            break;
        case "32":
            PlacOfBirth.innerHTML = `<atr data-translation="govNewValley"></atr>`;
            break;
        case "33":
            PlacOfBirth.innerHTML = `<atr data-translation="govMatruh"></atr>`;
            break;
        case "34":
            PlacOfBirth.innerHTML = `<atr data-translation="govNotthSinai"></atr>`;
            break;
        case "35":
            PlacOfBirth.innerHTML = `<atr data-translation="govSouthSinai"></atr>`;
            break;
        case "88":
            PlacOfBirth.innerHTML = `<atr data-translation="govOutOfEgypt"></atr>`;
            break;
        default:
            PlacOfBirth.innerHTML = `<atr data-translation="govIDNumberIncorrect"></atr>`;
    };
}
*/




let phoneNumberOne = document.getElementById('phoneNumberOne');
let phoneNumberTwo = document.getElementById('phoneNumberTwo');

let jobTitle = document.getElementById('jobTitle');
let graduationUniversity = document.getElementById('graduationUniversity');
let graduationYear = document.getElementById('graduationYear');

let medicalDistrct = document.getElementById('medicalDistrct');
let medicalUnit = document.getElementById('medicalUnit');
let jobStartDate = document.getElementById('jobStartDate');
let JobStatus = document.getElementById('JobStatus');
let JobType = document.getElementById('JobType');
let jobTypeEndDate = document.getElementById('jobTypeEndDate');
let professionalDegree = document.getElementById('professionalDegree');
let decisionNumber = document.getElementById('decisionNumber');
let promotionDate = document.getElementById('promotionDate');
let specializedDepartment = document.getElementById('specializedDepartment');
let adminJobTitle = document.getElementById('adminJobTitle');
let financialDegree = document.getElementById('financialDegree');
let insuranceNumber = document.getElementById('insuranceNumber');


function activateField() {
    document.getElementById("chooseSpecialityList").disabled = false;
    document.getElementById("disabledPostGraduationYear").disabled = false;
};





