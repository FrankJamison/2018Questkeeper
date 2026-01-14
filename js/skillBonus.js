/* Update Ability Modifier
-------------------------------------*/
function updateSkillBonus(ability, skill) {

    // Target Ability and Modifier Variables
    var abilityScore,
        characterLevel,
        isProficient,
        skillBonusDiv,
        targetProficiency,
        url,
        xhr;

    // Set ability scores
    if (ability === "STR") {
        abilityScore = $("#strengthScore").val();
    } else if (ability === "DEX") {
        abilityScore = $("#dexterityScore").val();
    } else if (ability === "CON") {
        abilityScore = $("#constitutionScore").val();
    } else if (ability === "INT") {
        abilityScore = $("#intelligenceScore").val();
    } else if (ability === "WIS") {
        abilityScore = $("#wisdomScore").val();
    } else {
        abilityScore = $("#charismaScore").val();
    }

    // Set the target skill and modifier elements
    if (skill === "acrobatics") {
        skillBonusDiv = document.getElementById("acrobaticsDiv");
        targetProficiency = document.getElementById("acrobaticsProficiency");
    } else if (skill === "animalHandling") {
        skillBonusDiv = document.getElementById("animalHandlingDiv");
        targetProficiency = document.getElementById("animalHandlingProficiency");
    } else if (skill === "arcana") {
        skillBonusDiv = document.getElementById("arcanaDiv");
        targetProficiency = document.getElementById("arcanaProficiency");
    } else if (skill === "athletics") {
        skillBonusDiv = document.getElementById("athleticsDiv");
        targetProficiency = document.getElementById("athleticsProficiency");
    } else if (skill === "deception") {
        skillBonusDiv = document.getElementById("deceptionDiv");
        targetProficiency = document.getElementById("deceptionProficiency");
    } else if (skill === "history") {
        skillBonusDiv = document.getElementById("historyDiv");
        targetProficiency = document.getElementById("historyProficiency");
    } else if (skill === "insight") {
        skillBonusDiv = document.getElementById("insightDiv");
        targetProficiency = document.getElementById("insightProficiency");
    } else if (skill === "intimidation") {
        skillBonusDiv = document.getElementById("intimidationDiv");
        targetProficiency = document.getElementById("intimidationProficiency");
    } else if (skill === "investigation") {
        skillBonusDiv = document.getElementById("investigationDiv");
        targetProficiency = document.getElementById("investigationProficiency");
    } else if (skill === "medicine") {
        skillBonusDiv = document.getElementById("medicineDiv");
        targetProficiency = document.getElementById("medicineProficiency");
    } else if (skill === "nature") {
        skillBonusDiv = document.getElementById("natureDiv");
        targetProficiency = document.getElementById("natureProficiency");
    } else if (skill === "perception") {
        skillBonusDiv = document.getElementById("perceptionDiv");
        targetProficiency = document.getElementById("perceptionProficiency");
    } else if (skill === "performance") {
        skillBonusDiv = document.getElementById("performanceDiv");
        targetProficiency = document.getElementById("performanceProficiency");
    } else if (skill === "persuasion") {
        skillBonusDiv = document.getElementById("persuasionDiv");
        targetProficiency = document.getElementById("persuasionProficiency");
    } else if (skill === "religion") {
        skillBonusDiv = document.getElementById("religionDiv");
        targetProficiency = document.getElementById("religionProficiency");
    } else if (skill === "sleightOfHand") {
        skillBonusDiv = document.getElementById("sleightOfHandDiv");
        targetProficiency = document.getElementById("sleightOfHandProficiency");
    } else if (skill === "stealth") {
        skillBonusDiv = document.getElementById("stealthDiv");
        targetProficiency = document.getElementById("stealthProficiency");
    } else {
        skillBonusDiv = document.getElementById("survivalDiv");
        targetProficiency = document.getElementById("survivalProficiency");
    }

    // Account for empty ability score
    if (!abilityScore) {
        abilityScore = 10;
    }

    // Get proficiency flag
    isProficient = targetProficiency.checked;

    // Get the current character level
    characterLevel = parseInt($("#characterLevel").val());

    // Account for empty character level
    if (!characterLevel) {
        characterLevel = 1;
    }

    // Set the target URL for the XHR call with GET variables
    url = "../members/skillBonus.php?abilityScore=" + abilityScore + "&skillBonusType=" + skill + "&isProficient=" + isProficient + "&characterLevel=" + characterLevel;

    // Create a new XMLHttpRequest object
    xhr = new XMLHttpRequest();

    // Open the XMLHttpRequest() object            
    xhr.open("GET", url, true);

    // Update the proficiency bonus when response is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            skillBonusDiv.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
}