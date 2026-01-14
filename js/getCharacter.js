/* Remove selection function
-------------------------------------------------------------------*/
function remove_selected(id) {
    $("select#" + id + " option").removeAttr('selected');
}

/* Get Character Function
-------------------------------------------------------------------*/
function getCharacter() {

    var characterID = $("#characterName").val(),
        characterName = $("#characterName").find("option:selected").text(),
        targetModifier = document.getElementById('features'),
        characterClass = document.getElementById('characterClass'),
        url,
        xhr;
    $("#characterNameText").val(characterName);

    // Set the target URL for the XHR call with GET variables
    url = './getCharacter.php?characterID=' + characterID;

    // Create a new XMLHttpRequest object
    xhr = new XMLHttpRequest();

    // Open the XMLHttpRequest() object            
    xhr.open('GET', url, true);

    // Update the ability modifier when response is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);

            // Set characterID
            $('#characterID').val(json.characterID);

            // Set selected character class
            remove_selected("characterClass");
            $('select#characterClass option[value="' + json.classID + '"]').prop({
                defaultSelected: true
            });

            // Set selected character level
            remove_selected("characterLevel");
            $('select#characterLevel option[value="' + json.levelID + '"]').prop({
                defaultSelected: true
            });

            // Set selected character background
            remove_selected("characterBackground");
            $('select#characterBackground option[value="' + json.backgroundID + '"]').prop({
                defaultSelected: true
            });

            // Set selected character race
            remove_selected("characterRace");
            $('select#characterRace option[value="' + json.raceID + '"]').prop({
                defaultSelected: true
            });

            // Set selected character alignment
            remove_selected("characterAlignment");
            $('select#characterAlignment option[value="' + json.alignmentID + '"]').prop({
                defaultSelected: true
            });

            // Set experience point value
            $('#experiencePoints').val(json.experiencePoints);

            // Set ability scores
            $('#strengthScore').val(json.strengthScore);
            $('#dexterityScore').val(json.dexterityScore);
            $('#constitutionScore').val(json.constitutionScore);
            $('#intelligenceScore').val(json.intelligenceScore);
            $('#wisdomScore').val(json.wisdomScore);
            $('#charismaScore').val(json.charismaScore);

            // Update ability modifiers
            updateAbilityModifier("STR");
            updateAbilityModifier("DEX");
            updateAbilityModifier("CON");
            updateAbilityModifier("INT");
            updateAbilityModifier("WIS");
            updateAbilityModifier("CHA");

            // Set inspiration
            $('#inspiration').val(json.inspiration);

            // Update proficiency bonus
            updateProficiencyBonus();

            // Set ability proficiencies
            (json.strengthProficiency == 1) ?
            $('#strengthSaveProficiency').prop('checked', true): $('#strengthSaveProficiency').prop('checked', false);
            (json.dexterityProficiency == 1) ?
            $('#dexteritySaveProficiency').prop('checked', true): $('#dexteritySaveProficiency').prop('checked', false);
            (json.constitutionProficiency == 1) ?
            $('#constitutionSaveProficiency').prop('checked', true): $('#constitutionSaveProficiency').prop('checked', false);
            (json.intelligenceProficiency == 1) ?
            $('#intelligenceSaveProficiency').prop('checked', true): $('#intelligenceSaveProficiency').prop('checked', false);
            (json.wisdomProficiency == 1) ?
            $('#wisdomSaveProficiency').prop('checked', true): $('#wisdomSaveProficiency').prop('checked', false);
            (json.charismaProficiency == 1) ?
            $('#charismaSaveProficiency').prop('checked', true): $('#charismaSaveProficiency').prop('checked', false);

            // Update save bonuses
            updateSaveBonus("STR");
            updateSaveBonus("DEX");
            updateSaveBonus("CON");
            updateSaveBonus("INT");
            updateSaveBonus("WIS");
            updateSaveBonus("CHA");

            // Set skill proficiencies
            (json.acrobaticsProficiency == 1) ?
            $('#acrobaticsProficiency').prop('checked', true): $('#acrobaticsProficiency').prop('checked', false);
            (json.animalHandlingProficiency == 1) ?
            $('#animalHandlingProficiency').prop('checked', true): $('#animalHandlingProficiency').prop('checked', false);
            (json.arcanaProficiency == 1) ?
            $('#arcanaProficiency').prop('checked', true): $('#arcanaProficiency').prop('checked', false);
            (json.athleticsProficiency == 1) ?
            $('#athleticsProficiency').prop('checked', true): $('#athleticsProficiency').prop('checked', false);
            (json.deceptionProficiency == 1) ?
            $('#deceptionProficiency').prop('checked', true): $('#deceptionProficiency').prop('checked', false);
            (json.historyProficiency == 1) ?
            $('#historyProficiency').prop('checked', true): $('#historyProficiency').prop('checked', false);
            (json.insightProficiency == 1) ?
            $('#insightProficiency').prop('checked', true): $('#insightProficiency').prop('checked', false);
            (json.intimidationProficiency == 1) ?
            $('#intimidationProficiency').prop('checked', true): $('#intimidationProficiency').prop('checked', false);
            (json.investigationProficiency == 1) ?
            $('#investigationProficiency').prop('checked', true): $('#investigationProficiency').prop('checked', false);
            (json.medicineProficiency == 1) ?
            $('#medicineProficiency').prop('checked', true): $('#medicineProficiency').prop('checked', false);
            (json.natureProficiency == 1) ?
            $('#natureProficiency').prop('checked', true): $('#natureProficiency').prop('checked', false);
            (json.perceptionProficiency == 1) ?
            $('#perceptionProficiency').prop('checked', true): $('#perceptionProficiency').prop('checked', false);
            (json.performanceProficiency == 1) ?
            $('#performanceProficiency').prop('checked', true): $('#performanceProficiency').prop('checked', false);
            (json.persuasionProficiency == 1) ?
            $('#persuasionProficiency').prop('checked', true): $('#persuasionProficiency').prop('checked', false);
            (json.religionProficiency == 1) ?
            $('#religionProficiency').prop('checked', true): $('#religionProficiency').prop('checked', false);
            (json.sleightOfHandProficiency == 1) ?
            $('#sleightOfHandProficiency').prop('checked', true): $('#sleightOfHandProficiency').prop('checked', false);
            (json.stealthProficiency == 1) ?
            $('#stealthProficiency').prop('checked', true): $('#stealthProficiency').prop('checked', false);
            (json.survivalProficiency == 1) ?
            $('#survivalProficiency').prop('checked', true): $('#survivalProficiency').prop('checked', false);

            // Update skill bonuses
            updateSkillBonus("DEX", "acrobatics");
            updateSkillBonus("WIS", "animalHandling");
            updateSkillBonus("INT", "arcana");
            updateSkillBonus("STR", "athletics");
            updateSkillBonus("CHA", "deception");
            updateSkillBonus("INT", "history");
            updateSkillBonus("WIS", "insight");
            updateSkillBonus("CHA", "intimidation");
            updateSkillBonus("INT", "investigation");
            updateSkillBonus("WIS", "medicine");
            updateSkillBonus("INT", "nature");
            updateSkillBonus("WIS", "perception");
            updateSkillBonus("CHA", "performance");
            updateSkillBonus("CHA", "persuasion");
            updateSkillBonus("INT", "religion");
            updateSkillBonus("DEX", "sleightOfHand");
            updateSkillBonus("DEX", "stealth");
            updateSkillBonus("WIS", "survival");

            // Update passive perception
            updatePassivePerception();

            // Set other proficiencies
            $('#otherProficiencies').val(json.otherProficiencies);

            // Set armor class
            $('#armorClass').val(json.armorClass);

            // Set initiative
            (json.initiative >= 0) ?
            $('#initiative').val("+" + json.initiative): $('#initiative').val(json.initiative);

            // Set speed
            $('#speed').val(json.speed);

            // Set hit points
            $('#maxHitPoints').val(json.maxHitPoints);
            $('#currentHitPoints').val(json.currentHitPoints);
            $('#temporaryHitPoints').val(json.temporaryHitPoints);

            // Set hit dice
            $('#totalHitDice').val(json.totalHitDice);
            $('#remainingHitDice').val(json.remainingHitDice);

            // Set death saves
            (json.deathSuccess1 == 1) ?
            $('#deathSuccess1').prop('checked', true): $('#deathSuccess1').prop('checked', false);
            (json.deathSuccess2 == 1) ?
            $('#deathSuccess2').prop('checked', true): $('#deathSuccess2').prop('checked', false);
            (json.deathSuccess3 == 1) ?
            $('#deathSuccess3').prop('checked', true): $('#deathSuccess3').prop('checked', false);
            (json.deathFail1 == 1) ?
            $('#deathFail1').prop('checked', true): $('#deathFail1').prop('checked', false);
            (json.deathFail2 == 1) ?
            $('#deathFail2').prop('checked', true): $('#deathFail2').prop('checked', false);
            (json.deathFail3 == 1) ?
            $('#deathFail3').prop('checked', true): $('#deathFail3').prop('checked', false);

            // Set Attack 1
            $('#attackName1').val(json.attackName1);
            $('#attackBonus1').val(json.attackBonus1);
            $('#attackDamage1').val(json.attackDamage1);

            // Set Attack 2
            $('#attackName2').val(json.attackName2);
            $('#attackBonus2').val(json.attackBonus2);
            $('#attackDamage2').val(json.attackDamage2);

            // Set Attack 3
            $('#attackName3').val(json.attackName3);
            $('#attackBonus3').val(json.attackBonus3);
            $('#attackDamage3').val(json.attackDamage3);

            // Set spellcasting data
            $('#spellcasting').val(json.spellcasting);

            // Set treasure
            $('#copperPieces').val(json.copperPieces);
            $('#silverPieces').val(json.silverPieces);
            $('#electrumPieces').val(json.electrumPieces);
            $('#goldPieces').val(json.goldPieces);
            $('#platinumPieces').val(json.platinumPieces);

            // Set equipment
            $('#equipment').val(json.equipment);

            // Set characteristics
            $('#personality').val(json.personality);
            $('#ideals').val(json.ideals);
            $('#bonds').val(json.bonds);
            $('#flaws').val(json.flaws);
            $('#features').val(json.features);
        }
    }

    // Send the request
    xhr.send();

};

// Get character data
getCharacter();

// Get character data on character change
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select[name="characterName"]').onchange = getCharacter;
}, false);