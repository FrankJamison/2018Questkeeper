/* Update Ability Modifier
-------------------------------------*/
function updateAbilityModifier(ability) {

    // Target Ability and Modifier Variables
    var abilityModifier,
        abilityModifierDiv,
        abilityModifierValue,
        targetAbility,
        targetAbilityScore,
        targetModifier,
        url,
        xhr;

    // Set the Target Ability and Modifier Elements
    if (ability === "STR") {
        abilityModifier = "strengthModifier";
        abilityModifierDiv = "strengthMod";
        targetAbility = document.getElementById("strengthScore");
        targetModifier = document.getElementById(abilityModifierDiv);
    } else if (ability === "DEX") {
        abilityModifier = "dexterityModifier";
        abilityModifierDiv = "dexterityMod";
        targetAbility = document.getElementById("dexterityScore");
        targetModifier = document.getElementById(abilityModifierDiv);
    } else if (ability === "CON") {
        abilityModifier = "constitutionModifier";
        abilityModifierDiv = "constitutionMod";
        targetAbility = document.getElementById("constitutionScore");
        targetModifier = document.getElementById(abilityModifierDiv);
    } else if (ability === "INT") {
        abilityModifier = "intelligenceModifier";
        abilityModifierDiv = "intelligenceMod";
        targetAbility = document.getElementById("intelligenceScore");
        targetModifier = document.getElementById(abilityModifierDiv);
    } else if (ability === "WIS") {
        abilityModifier = "wisdomModifier";
        abilityModifierDiv = "wisdomMod";
        targetAbility = document.getElementById("wisdomScore");
        targetModifier = document.getElementById(abilityModifierDiv);
    } else {
        abilityModifier = "charismaModifier";
        abilityModifierDiv = "charismaMod";
        targetAbility = document.getElementById("charismaScore");
        targetModifier = document.getElementById(abilityModifierDiv);
    }

    // Get the target ability score
    targetAbilityScore = targetAbility.value;

    // Set the target URL for the XHR call with GET variables
    url = "../members/abilityModifier.php?abilityScore=" + targetAbilityScore + "&abilityModifier=" + abilityModifier;

    // Create a new XMLHttpRequest object
    xhr = new XMLHttpRequest();

    // Open the XMLHttpRequest() object            
    xhr.open('GET', url, true);

    // Update the ability modifier when response is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            targetModifier.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();

}