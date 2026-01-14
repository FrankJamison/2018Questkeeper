    /* Update Proficiency Bonus
    -------------------------------------*/
    function updateProficiencyBonus() {

        // Get the character level element
        var characterLevel = document.getElementById("characterLevel");

        // Get the proficiency bonus container element
        var proficiencyBonusDiv = document.getElementById("proficiencyBonusDiv");

        // Set the character level
        var characterLevelValue = characterLevel.options[characterLevel.selectedIndex].value;

        // Set the target URL for the XHR call with GET variables
        var url = "../members/proficiencyBonus.php?characterLevel=" + characterLevelValue;

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Open the XMLHttpRequest() object            
        xhr.open('GET', url, true);

        // Update the proficiency bonus when response is complete
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                proficiencyBonusDiv.innerHTML = xhr.responseText;
            }
        }

        // Send the request
        xhr.send();
    }