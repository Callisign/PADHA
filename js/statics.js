let masterColor = '#007ee6';
let masterColorAlt = '#0069be';
let redColor = '#ef0f0f';
let redColorAlt = '#c40d0d';
let darkestColor = '#292929';
let darkestColorAlt = '#111111';
let greenColor = '#257000';


/// Oral Surgery ///
let pedoExreaction = document.getElementById('pedoExreaction');
let permenantExtraction = document.getElementById('permenantExtraction');
let surgicalSpare = document.getElementById('surgicalSpare');
let surgicalExtraction = document.getElementById('surgicalExtraction');
let minorSurgery = document.getElementById('minorSurgery');


/// Pedo conservative ///
let pedoTempFilling = document.getElementById('pedoTempFilling');
let pedoAmalgamFilling = document.getElementById('pedoAmalgamFilling');
let pedoCompositeFilling = document.getElementById('pedoCompositeFilling');
let pedoGIC = document.getElementById('pedoGIC');
let pedoPulpotomyVisit = document.getElementById('pedoPulpotomyVisit');
let pedoPulpotomyFilling = document.getElementById('pedoPulpotomyFilling');


/// Pedo conservative ///
let PermenantTemporary = document.getElementById('PermenantTemporary');
let permenantAmalgam = document.getElementById('permenantAmalgam');
let permenantComposite = document.getElementById('permenantComposite');
let permenantGIC = document.getElementById('permenantGIC');
let RCTVisit = document.getElementById('RCTVisit');
let RCTFilling = document.getElementById('RCTFilling');



/// Periodontics ///
let scaling = document.getElementById('scaling');
let gingivalProcedures = document.getElementById('gingivalProcedures');



/// Treatment ///
let drugsTreatment = document.getElementById('drugsTreatment');



/// Transition ///
let internalTransition = document.getElementById('internalTransition');
let externalTransition = document.getElementById('externalTransition');



/// Radiation ///
let periapicalRadiation = document.getElementById('periapicalRadiation');
let panoramicRadiation = document.getElementById('panoramicRadiation');
let coneBeamCT = document.getElementById('coneBeamCT');



/// Prosthodontics ///
let prosFullMouth = document.getElementById('prosFullMouth');
let prosSingleArch = document.getElementById('prosSingleArch');
let prosPartialMoreThanThree = document.getElementById('prosPartialMoreThanThree');
let prosPartialLessThanThree = document.getElementById('prosPartialLessThanThree');
let prosRepairs = document.getElementById('prosRepairs');
let prosTotalTitle = document.getElementById('prosTotalTitle');
let prosTotal = document.getElementById('prosTotal');

function getTotalProsthodontics() {

    if (
        prosFullMouth.value != '' ||
        prosSingleArch.value != '' ||
        prosPartialMoreThanThree.value != '' ||
        prosPartialLessThanThree.value != '' ||
        prosRepairs.value != ''
    ) {
        // ((+)) before variable means that converted string into number
        let getTotalProsthodonticsCases =
            +prosFullMouth.value +
            +prosSingleArch.value +
            +prosPartialMoreThanThree.value +
            +prosPartialLessThanThree.value +
            +prosRepairs.value;

        prosTotal.innerHTML = getTotalProsthodonticsCases;
        prosTotal.style.background = masterColor;
        prosTotalTitle.style.background = masterColor;
    }
    else {
        prosTotal.innerHTML = '';
        prosTotal.style.background = darkestColor;
        prosTotalTitle.style.background = darkestColor;
    }
}


/// Others ///
let implant = document.getElementById('implant');
let orthodontics = document.getElementById('orthodontics');
let fixedProsthodontics = document.getElementById('fixedProsthodontics');
let stStCrown = document.getElementById('stStCrown');
let flourideApplication = document.getElementById('flourideApplication');
let pitAndFissureSealant = document.getElementById('pitAndFissureSealant');
let otherCases = document.getElementById('otherCases');



/// First Health Education ///

let newPregnant = document.getElementById('newPregnant');
let frequentPregnant = document.getElementById('frequentPregnant');
let totalPregnant = document.getElementById('totalPregnant');
let totalPregnantTitle = document.getElementById('totalPregnantTitle');

function getTotalPregnant() {

    if (newPregnant.value != '' || frequentPregnant.value != '') {
        // ((+)) before variable means that converted string into number
        let totalPregnantCases = +newPregnant.value + +frequentPregnant.value;
        totalPregnant.innerHTML = totalPregnantCases;
        totalPregnant.style.background = masterColor;
        totalPregnantTitle.style.background = masterColor;
    }
    else {
        totalPregnant.innerHTML = '';
        totalPregnant.style.background = darkestColor;
        totalPregnantTitle.style.background = darkestColor;
    }
}


let newPatients = document.getElementById('newPatients');
let frequentPatients = document.getElementById('frequentPatients');
let totalPatients = document.getElementById('totalPatients');
let totalPatientsTitle = document.getElementById('totalPatientsTitle');
let totalPatientsTitleIcon = document.getElementById('totalPatientsTitleIcon');

function getTotalPatients() {
    // ((||)) means or
    // ((!= '')) means not Empty

    if (newPatients.value != '' || frequentPatients.value != '') {
        // ((+)) before variable means that converted string into number
        let totalPatientsCases = +newPatients.value + +frequentPatients.value;
        totalPatients.innerHTML = totalPatientsCases;
        totalPatients.style.background = masterColor;
        totalPatientsTitle.style.background = masterColor;
        totalPatientsTitleIcon.style.background = masterColor;

    }
    else {
        totalPatients.innerHTML = '';
        totalPatients.style.background = darkestColor;
        totalPatientsTitle.style.background = darkestColor;
        totalPatientsTitleIcon.style.background = darkestColor;
    }
}


/// Second Health Education ///

let healthyGingiva = document.getElementById('healthyGingiva');
let bleedingGingiva = document.getElementById('bleedingGingiva');
let gingivalCalculus = document.getElementById('gingivalCalculus');
let healthyTeeth = document.getElementById('healthyTeeth');
let cariousTeeth = document.getElementById('cariousTeeth');



/// Third Health Education ///

let kidsDelayedTeeth = document.getElementById('kidsDelayedTeeth');
let kidsHealthyTeeth = document.getElementById('kidsHealthyTeeth');
let kidsCariousTeeth = document.getElementById('kidsCariousTeeth');
let kidsFilledTeeth = document.getElementById('kidsFilledTeeth');
let kidsExtractedTeeth = document.getElementById('kidsExtractedTeeth');



