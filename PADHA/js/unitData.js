
function activateEdit() {
    document.getElementById("unitManager").disabled = false;
    document.getElementById("unitManagerPhone").disabled = false;

    document.getElementById("denChairman").disabled = false;
    document.getElementById("denChairmanPhone").disabled = false;

    document.getElementById("prosthChairman").disabled = false;
    document.getElementById("prosthChairmanPhone").disabled = false;

    document.getElementById("maintenanceAdmin").disabled = false;
    document.getElementById("maintenanceAdminPhone").disabled = false;

    document.getElementById("manPowerAdmin").disabled = false;
    document.getElementById("manPowerAdminPhone").disabled = false;

    document.getElementById("conEduAdmin").disabled = false;
    document.getElementById("conEduAdminPhone").disabled = false;

    document.getElementById("qulityAdmin").disabled = false;
    document.getElementById("qulityAdminPhone").disabled = false;

    document.getElementById("qulityAdmin").disabled = false;
    document.getElementById("qulityAdminPhone").disabled = false;

    document.getElementById("ICAdmin").disabled = false;
    document.getElementById("ICAdminPhone").disabled = false;

    document.getElementById("dentFullPower").disabled = false;
    document.getElementById("techFullPower").disabled = false;

    document.getElementById("dentMalePower").disabled = false;
    document.getElementById("techMalePower").disabled = false;

    document.getElementById("dentFemalePower").disabled = false;
    document.getElementById("techFemalePower").disabled = false;

    document.getElementById("dentFullTime").disabled = false;
    document.getElementById("techFullTime").disabled = false;

    document.getElementById("dentPartTime").disabled = false;
    document.getElementById("techPartTime").disabled = false;

    document.getElementById("dentMandatoryVacation").disabled = false;
    document.getElementById("techMandatoryVacation").disabled = false;

    document.getElementById("dentUnMandatoryVacation").disabled = false;
    document.getElementById("techUnMandatoryVacation").disabled = false;

    document.getElementById("dentBachelorDegree").disabled = false;
    document.getElementById("techBachelorDegree").disabled = false;

    document.getElementById("dentDiploma").disabled = false;
    document.getElementById("dentMaster").disabled = false;
    document.getElementById("dentPhD").disabled = false;
    document.getElementById("dentFellowship").disabled = false;


    ////////////////////// right /////////////

    document.getElementById("validClinic").disabled = false;
    document.getElementById("invalidClinic").disabled = false;

    document.getElementById("validUnit").disabled = false;
    document.getElementById("invalidUnit").disabled = false;

    document.getElementById("validCompressor").disabled = false;
    document.getElementById("invalidCompressor").disabled = false;

    document.getElementById("validHSHP").disabled = false;
    document.getElementById("invalidHSHP").disabled = false;

    document.getElementById("validLSHP").disabled = false;
    document.getElementById("invalidLSHP").disabled = false;

    document.getElementById("validRotary").disabled = false;
    document.getElementById("invalidRotary").disabled = false;

    document.getElementById("validPeriapical").disabled = false;
    document.getElementById("invalidPeriapical").disabled = false;

    document.getElementById("validPanorama").disabled = false;
    document.getElementById("invalidPanorama").disabled = false;

    document.getElementById("validCBCT").disabled = false;
    document.getElementById("invalidCBCT").disabled = false;

    document.getElementById("validDarkBox").disabled = false;
    document.getElementById("invalidDarkBox").disabled = false;

    document.getElementById("validCavitron").disabled = false;
    document.getElementById("invalidCavitron").disabled = false;

    document.getElementById("validAmalgamator").disabled = false;
    document.getElementById("invalidAmalgamator").disabled = false;

    document.getElementById("validLightCure").disabled = false;
    document.getElementById("invalidLightCure").disabled = false;

    document.getElementById("validSyringe").disabled = false;
    document.getElementById("invalidSyringe").disabled = false;

    document.getElementById("validMirror").disabled = false;
    document.getElementById("invalidMirror").disabled = false;

    document.getElementById("validProbe").disabled = false;
    document.getElementById("invalidProbe").disabled = false;

    document.getElementById("validTweezer").disabled = false;
    document.getElementById("invalidTweezer").disabled = false;

    let UnitDataConfirmEdit = document.getElementById('UnitDataConfirmEdit');
    UnitDataConfirmEdit.innerHTML =
        `
        <button class="btn btn-padha mt-2 py-2 w-100">
        <i class="fa-solid fa-pen-to-square"></i>Confirm Edit
        </button>
       `
};

