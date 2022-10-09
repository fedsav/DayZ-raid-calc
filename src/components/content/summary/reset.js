import {allRounds, damage} from "/src/components/content/calculator/addingAmmo.js";

let resetBtn = document.querySelector(".final_reset");

resetBtn.addEventListener("click", () => {
    damage.length = 0
    console.log(damage)
    allRounds["762x54"] = 0;
    allRounds["308"] = 0;
    allRounds["5x56"] = 0;
    allRounds["5x45"] = 0;
    allRounds["762x39"] = 0;
    allRounds["9x39"] = 0;
    allRounds["slugs"] = 0;
    allRounds["buckshot"] = 0;
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