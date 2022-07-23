const submitButton = document.querySelector(".submit-button"), defaultCard = document.querySelector(".default-card"), tkCard = document.querySelector(".tk-card"), rateMarks = document.querySelectorAll(".rate-mark"), rateSelection = document.querySelector(".rate-selection");
let selectedRate;

submitButton.disabled = true;

rateMarks.forEach(item => {
    item.addEventListener('click', event => {
        rateMarks.forEach((e) => e.classList.remove("active"));
        event.target.classList.add("active");
        submitButton.disabled = false;
        selectedRate = event.target.innerHTML;
    })
})

submitButton.onclick = function() {
    if (selectedRate != null) {
        rateSelection.innerHTML = "You selected " + selectedRate + " out of 5"
        defaultCard.style.display = "none";
        tkCard.style.display = "block";
    }
}