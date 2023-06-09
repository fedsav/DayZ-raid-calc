import {allRounds, damage} from "/src/components/content/calculator/addingAmmo.js"

let finalBtn = document.querySelector(".final_count");
let doorsNumber = document.querySelector(".final_doors");


finalBtn.addEventListener("click", () => {
    let hp = 28600;

    let oneMulti = document.querySelector(".summary_radio__one");
    let oneAndHalfMulti = document.querySelector(".summary_radio__onePointFive");
    let twoMulti = document.querySelector(".summary_radio__two");

    if (oneAndHalfMulti.checked === true) {
        hp *= 1.5;
    } if (twoMulti.checked === true) {
        hp *= 2
    }
    
    let damageArr = Object.values(damage)
    let allDamage = damageArr.reduce((sum, current) => sum + current, 0);

    doorsNumber.innerHTML = Math.floor(allDamage / hp)
})

// анимация тени

let summary = document.querySelector(".summary");

summary.addEventListener("click", (event) => {
    let elem = event.target;
    if (elem.classList.contains("final_reset")) {
        elem.style.boxShadow = "0px 0px 0px 7px rgba(252, 131, 75, 0.42)";
        setTimeout(function () {
            elem.style.boxShadow = "none"
        }, 350)
    }  if (elem.classList.contains("final_count")) {
        elem.style.boxShadow = "0px 0px 0px 7px rgba(47, 144, 223, 0.42)";
        setTimeout(function () {
            elem.style.boxShadow = "none"
        }, 350)
    }
})