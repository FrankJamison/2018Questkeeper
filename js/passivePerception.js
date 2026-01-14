/* Update passive perception
-----------------------------------------------*/
function updatePassivePerception() {

    // Variable declarations
    var characterLevel,
        isProficient,
        passivePerceptionDiv,
        perceptionProficiency,
        wisdomScore,
        url,
        xhr;

    // Set wisdom score
    wisdomScore = $("#wisdomScore").val();

    // Get the passive perception container element
    passivePerceptionDiv = document.getElementById("passivePerceptionDiv");

    // Get the perception proficiency element
    perceptionProficiency = document.getElementById("perceptionProficiency");

    // Account for empty wisdom score
    if (!wisdomScore) {
        wisdomScore = 10;
    }

    // Get perception proficiency flag
    isProficient = perceptionProficiency.checked;

    // Get the current character level
    characterLevel = parseInt($("#characterLevel").val());

    // Account for empty character level
    if (!characterLevel || characterLevel == 21) {
        characterLevel = 1;
    }

    // Set the target URL for the XHR call with GET variables"
    url = "../members/passivePerception.php?wisdomScore=" + wisdomScore + "&isProficient=" + isProficient + "&characterLevel=" + characterLevel;

    // Create a new XMLHttpRequest object
    xhr = new XMLHttpRequest();

    // Open the XMLHttpRequest() object            
    xhr.open('GET', url, true);

    // Update the proficiency bonus when response is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            passivePerceptionDiv.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
}