/* Update Ability Modifier
-------------------------------------*/
function updateSaveBonus(ability) {

    // Target ability and modifier variables
    var characterLevel,
        isProficient,
        abilityScore,
        saveBonusType,
        saveBonusDiv,
        targetProficiency,
        url,
        xhr;

    // Set the target ability and modifier elements for each ability
    if (ability === "STR") {
        abilityScore = $("#strengthScore").val();
        saveBonusType = "strengthSave";
        saveBonusDiv = document.getElementById("strengthSaveDiv");
        targetProficiency = document.getElementById("strengthSaveProficiency");
    } else if (ability === "DEX") {
        abilityScore = $("#dexterityScore").val();
        saveBonusType = "dexteritySave";
        saveBonusDiv = document.getElementById("dexteritySaveDiv");
        targetProficiency = document.getElementById("dexteritySaveProficiency");
    } else if (ability === "CON") {
        abilityScore = $("#constitutionScore").val();
        saveBonusType = "constitutionSave";
        saveBonusDiv = document.getElementById("constitutionSaveDiv");
        targetProficiency = document.getElementById("constitutionSaveProficiency");
    } else if (ability === "INT") {
        abilityScore = $("#intelligenceScore").val();
        saveBonusType = "intelligenceSave";
        saveBonusDiv = document.getElementById("intelligenceSaveDiv");
        targetProficiency = document.getElementById("intelligenceSaveProficiency");
    } else if (ability === "WIS") {
        abilityScore = $("#wisdomScore").val();
        saveBonusType = "wisdomSave";
        saveBonusDiv = document.getElementById("wisdomSaveDiv");
        targetProficiency = document.getElementById("wisdomSaveProficiency");
    } else {
        abilityScore = $("#charismaScore").val();
        saveBonusType = "charismaSave";
        saveBonusDiv = document.getElementById("charismaSaveDiv");
        targetProficiency = document.getElementById("charismaSaveProficiency");
    }

    // Account for empty ability score
    if (!abilityScore) {
        abilityScore = 10;
    }

    // Get proficiency flag
    isProficient = targetProficiency.checked;

    // Get the current proficiency bonus
    characterLevel = parseInt($("#characterLevel").val());

    // Account for empty character level
    if (!characterLevel) {
        characterLevel = 1;
    }

    // Set the target URL for the XHR call with GET variables
    url = "../members/saveBonus.php?abilityScore=" + abilityScore + "&saveBonusType=" + saveBonusType + "&isProficient=" + isProficient + "&characterLevel=" + characterLevel;

    // Create a new XMLHttpRequest object
    xhr = new XMLHttpRequest();

    // Open the XMLHttpRequest() object            
    xhr.open('GET', url, true);

    // Update the saving throw modifier when response is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            saveBonusDiv.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
}