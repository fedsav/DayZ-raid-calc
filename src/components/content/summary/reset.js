import {allRounds, damage} from "/src/components/content/calculator/addingAmmo.js";

let resetBtn = document.querySelector(".final_reset");

resetBtn.addEventListener("click", () => {
    for (let key in damage) {
        damage[key] = 0
    }

    console.log(damage)

    for (let key in allRounds) {
        allRounds[key] = 0
    }
    console.log(allRounds)

    let mosinData = document.querySelector(".round_ofgun__mosin");
    mosinData.textContent = "";

    let winData = document.querySelector(".round_ofgun__win");
    winData.textContent = "";

    let m4Data = document.querySelector(".round_ofgun__m4");
    m4Data.textContent = "";

    let akData = document.querySelector(".round_ofgun__ak");
    akData.textContent = "";

    let sksData = document.querySelector(".round_ofgun__sks");
    sksData.textContent = "";

    let vssData = document.querySelector(".round_ofgun__vss");
    vssData.textContent = "";

    let slugsData = document.querySelector(".round_ofgun__slugs");
    slugsData.textContent = "";

    let buckshotData = document.querySelector(".round_ofgun__buckshot");
    buckshotData.textContent = ""

    let finalNumber = document.querySelector(".final_doors");
    finalNumber.textContent = 0;
    

    let fields = document.querySelectorAll(".inputField");
    fields.forEach(element => {
        element.value = ''
    });
})