function submitSymptoms() {
    // get the id of the checkboxes that were checked
    var checked = [];
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox" && inputs[i].checked) {
            checked.push(inputs[i].id);
        }
    }

    document.getElementById("submitSymptomsMessage").textContent =
        "Symptoms submitted!";

    // do whatever you want with the checked ids, for example store them somewhere

    // hide the symptoms form
    document.getElementById("symptomsChecklist").style.display = "none";
}

function changeEmotion(emotion) {
    // store the emotion in daily journal

    // hide the emotion buttons
    document.getElementById("emotions").style.display = "none";

    document.getElementById("submitEmotionMessage").textContent =
        "Emotion submitted!";
}

function submitJournalEntry() {
    // get the journal entry text
    var journalEntry = document.getElementById("journalEntry").value;

    // store the journal entry in daily journal

    document.getElementById("submitJournalEntryMessage").textContent =
        "Journal entry submitted!";

    // hide the journal entry form
    document.getElementById("journal").style.display = "none";
}

