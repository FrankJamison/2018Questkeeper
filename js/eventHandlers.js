// On charisma score change
$("#characterLevel").change(function() {
    updateProficiencyBonus();
    updateSaveBonus("STR");
    updateSaveBonus("DEX");
    updateSaveBonus("CON");
    updateSaveBonus("INT");
    updateSaveBonus("WIS");
    updateSaveBonus("CHA");
    updateSkillBonus("STR", "athletics");
    updateSkillBonus("DEX", "acrobatics");
    updateSkillBonus("DEX", "sleightOfHand");
    updateSkillBonus("DEX", "stealth");
    updateSkillBonus("INT", "arcana");
    updateSkillBonus("INT", "history");
    updateSkillBonus("INT", "investigation");
    updateSkillBonus("INT", "nature");
    updateSkillBonus("INT", "religion");
    updateSkillBonus("WIS", "animalHandling");
    updateSkillBonus("WIS", "insight");
    updateSkillBonus("WIS", "medicine");
    updateSkillBonus("WIS", "perception");
    updateSkillBonus("WIS", "survival");
    updateSkillBonus("CHA", "deception");
    updateSkillBonus("CHA", "intimidation");
    updateSkillBonus("CHA", "performance");
    updateSkillBonus("CHA", "persuasion");
    updatePassivePerception();
});

// On strength score change
$("#strengthScore").change(function() {
    updateAbilityModifier("STR");
    updateSaveBonus("STR");
    updateSkillBonus("STR", "athletics");
});

// On dexterity score change
$("#dexterityScore").change(function() {
    updateAbilityModifier("DEX");
    updateSaveBonus("DEX");
    updateSkillBonus("DEX", "acrobatics");
    updateSkillBonus("DEX", "sleightOfHand");
    updateSkillBonus("DEX", "stealth");
});

// On constitution score change
$("#constitutionScore").change(function() {
    updateAbilityModifier("CON");
    updateSaveBonus("CON");
});

// On intelligence score change
$("#intelligenceScore").change(function() {
    updateAbilityModifier("INT");
    updateSaveBonus("INT");
    updateSkillBonus("INT", "arcana");
    updateSkillBonus("INT", "history");
    updateSkillBonus("INT", "investigation");
    updateSkillBonus("INT", "nature");
    updateSkillBonus("INT", "religion");
});

// On wisdom score change
$("#wisdomScore").change(function() {
    updateAbilityModifier("WIS");
    updateSaveBonus("WIS");
    updateSkillBonus("WIS", "animalHandling");
    updateSkillBonus("WIS", "insight");
    updateSkillBonus("WIS", "medicine");
    updateSkillBonus("WIS", "perception");
    updateSkillBonus("WIS", "survival");
    updatePassivePerception();
});

// On charisma score change
$("#charismaScore").change(function() {
    updateAbilityModifier("CHA");
    updateSaveBonus("CHA");
    updateSkillBonus("CHA", "deception");
    updateSkillBonus("CHA", "intimidation");
    updateSkillBonus("CHA", "performance");
    updateSkillBonus("CHA", "persuasion");
});

// On strength save proficiency change
$("#strengthSaveProficiency").change(function() {
    updateSaveBonus("STR");
});

// On dexterity save proficiency change
$("#dexteritySaveProficiency").change(function() {
    updateSaveBonus("DEX");
});

// On constitution save proficiency change
$("#constitutionSaveProficiency").change(function() {
    updateSaveBonus("CON");
});

// On intelligence save proficiency change
$("#intelligenceSaveProficiency").change(function() {
    updateSaveBonus("INT");
});

// On wisdom save proficiency change
$("#wisdomSaveProficiency").change(function() {
    updateSaveBonus("WIS");
});

// On charisma save proficiency change
$("#charismaSaveProficiency").change(function() {
    updateSaveBonus("CHA");
});

// On acrobatics proficiency change
$("#acrobaticsProficiency").change(function() {
    updateSkillBonus("DEX", "acrobatics");
});

// On animal handling proficiency change
$("#animalHandlingProficiency").change(function() {
    updateSkillBonus("WIS", "animalHandling");
});

// On arcana proficiency change
$("#arcanaProficiency").change(function() {
    updateSkillBonus("INT", "arcana");
});

// On athletics proficiency change
$("#athleticsProficiency").change(function() {
    updateSkillBonus("STR", "athletics");
});

// On deception proficiency change
$("#deceptionProficiency").change(function() {
    updateSkillBonus("CHA", "deception");
});

// On history proficiency change
$("#historyProficiency").change(function() {
    updateSkillBonus("INT", "history");
});

// On insight proficiency change
$("#insightProficiency").change(function() {
    updateSkillBonus("WIS", "insight");
});

// On intimidation proficiency change
$("#intimidationProficiency").change(function() {
    updateSkillBonus("CHA", "intimidation");
});

// On investigation proficiency change
$("#investigationProficiency").change(function() {
    updateSkillBonus("INT", "investigation");
});

// On medicine proficiency change
$("#medicineProficiency").change(function() {
    updateSkillBonus("WIS", "medicine");
});

// On nature proficiency change
$("#natureProficiency").change(function() {
    updateSkillBonus("INT", "nature");
});

// On perception proficiency change
$("#perceptionProficiency").change(function() {
    updateSkillBonus("WIS", "perception");
    updatePassivePerception();
});

// On performance proficiency change
$("#performanceProficiency").change(function() {
    updateSkillBonus("CHA", "performance");
});

// On persuasion proficiency change
$("#persuasionProficiency").change(function() {
    updateSkillBonus("CHA", "persuasion");
});

// On religion proficiency change
$("#religionProficiency").change(function() {
    updateSkillBonus("INT", "religion");
});

// On sleight of hand proficiency change
$("#sleightOfHandProficiency").change(function() {
    updateSkillBonus("DEX", "sleightOfHand");
});

// On stealth proficiency change
$("#stealthProficiency").change(function() {
    updateSkillBonus("DEX", "stealth");
});

// On survival proficiency change
$("#survivalProficiency").change(function() {
    updateSkillBonus("WIS", "survival");
});