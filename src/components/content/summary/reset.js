import {allRounds, damage} from "/src/components/content/calculator/addingAmmo.js";

let resetBtn = document.querySelector(".final_reset");

resetBtn.addEventListener("click", () => {
    for (let key in damage) {
        damage[key] = 0
    }

    for (let key in allRounds) {
        allRounds[key] = 0
    }

    let allCurrentAmmo = document.querySelectorAll('.round_ofgun');
    allCurrentAmmo.forEach(e => {
        e.textContent = ''
    })

    let fields = document.querySelectorAll(".inputField");
    fields.forEach(element => {
        element.value = ''
    });
})