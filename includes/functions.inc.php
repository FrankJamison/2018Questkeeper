<?php
// Get ability Modifier
function getAbilityModifier($abilityScore)
{
	//Ability modifier is (ability score / 2) - 5
	return floor($abilityScore / 2) - 5;
}

function convertCheckboxToBool($checkbox)
{

	// If checkbox is on return true, else return false
	if ($checkbox == "on") {
		return true;
	} else {
		return false;
	}
}


?>