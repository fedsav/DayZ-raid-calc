export let allRounds = {
    "762x54": 0,
    "308": 0,
    "5x56": 0,
    "5x45": 0,
    "762x39": 0,
    "9x39": 0,
    "slugs": 0,
    "buckshot": 0,
};
export let damage = {
    "D762x54": 0,
    "D308": 0,
    "D5x56": 0,
    "D5x45": 0,
    "D762x39": 0,
    "D9x39": 0,
    "Dslugs": 0,
    "Dbucksot": 0,
};

// мосинский патрон

let mosinRounds = 0;
let mosinBtn = document.querySelector('.mosin_button');

mosinBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.mosinValue').value;
    damage["D762x54"] = ammo * 150
    allRounds["762x54"] = ammo

    let txtZone = document.querySelector(".round_ofgun__mosin");
    txtZone.textContent = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)
})

let mosinReset = document.querySelector(".reset_mosin");

mosinReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__mosin");
    data.textContent = ""
})

// 308 вин патрон

let winRounds = 0;
let winBtn = document.querySelector('.win_button');

winBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.winValue').value;
    damage["D308"] = ammo * 150
    allRounds["308"] = ammo

    let txtZone = document.querySelector(".round_ofgun__win");
    txtZone.textContent = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)
})

let winReset = document.querySelector(".reset_win");

winReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__win");
    data.textContent = ""
})

//патрон эмки

let m4Rounds = 0;
let m4Btn = document.querySelector('.m4_button');

m4Btn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.m4Value').value;
    damage["D5x56"] = ammo * 107
    allRounds["5x56"] = ammo

    let txtZone = document.querySelector(".round_ofgun__m4");
    txtZone.textContent = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)
})

let m4Reset = document.querySelector(".reset_m4");

m4Reset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__m4");
    data.textContent = ""
})

//патрон калаша

let akRounds = 0;
let akBtn = document.querySelector('.ak_button');

akBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.akValue').value;
    damage["D5x45"] = ammo * 80
    allRounds["5x45"] = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)

    let txtZone = document.querySelector(".round_ofgun__ak");
    txtZone.textContent = ammo
})

let akReset = document.querySelector(".reset_ak");

akReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__ak");
    data.textContent = ""
})

//патрон скс

let sksRounds = 0;
let sksBtn = document.querySelector('.sks_button');

sksBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.sksValue').value;
    damage["D762x39"] = ammo * 110
    allRounds["762x39"] = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)

    let txtZone = document.querySelector(".round_ofgun__sks");
    txtZone.textContent = ammo
})

let sksReset = document.querySelector(".reset_sks");

sksReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__sks");
    data.textContent = ""
})

//патрон всс

let vssRounds = 0;
let vssBtn = document.querySelector('.vss_button');

vssBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.vssValue').value;
    damage["D9x39"] = ammo * 75
    allRounds["9x39"] = ammo

    let txtZone = document.querySelector(".round_ofgun__vss");
    txtZone.textContent = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)
})

let vssReset = document.querySelector(".reset_vss");

vssReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__vss");
    data.textContent = ""
})

//слаги

let slugsRounds = 0;
let slugsBtn = document.querySelector('.slugs_button');

slugsBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.slugsValue').value;
    damage["Dslugs"] = ammo * 99
    allRounds["slugs"] = ammo

    let txtZone = document.querySelector(".round_ofgun__slugs");
    txtZone.textContent = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)
})

let slugsReset = document.querySelector(".reset_slugs");

slugsReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__slugs");
    data.textContent = ""
})

//дробь

let buckshotRounds = 0;
let buckshotBtn = document.querySelector('.buckshot_button');

buckshotBtn.addEventListener('click', (event) => {
    let ammo = document.querySelector('.buckshotValue').value;
    damage["Dbuckshot"] = ammo * 125
    allRounds["buckshot"] = ammo

    let txtZone = document.querySelector(".round_ofgun__buckshot");
    txtZone.textContent = ammo

    console.log("Патроны вот", allRounds)
    console.log("Урон весь вот", damage)
})

let buckshotReset = document.querySelector(".reset_buckshot");

buckshotReset.addEventListener("click", () => {
    let data = document.querySelector(".round_ofgun__buckshot");
    data.textContent = ""
})

// кнопка сброса

let calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (event) => {
    if (event.target.id === "reset") {
        let inp = event.target.closest(".calculator_form").childNodes[1];
        event.target.closest(".calculator_form").childNodes[1].value = ''
    }
})

//preventDeafault полей

calculator.addEventListener("keydown", (event) => {
    if (event.target.classList.contains("inputField") && event.keyCode == "13") {
        event.preventDefault()
    }
})

// тени при клике

calculator.addEventListener("click", (event) => {
    let elem = event.target;
    if (elem.classList.contains("btn") || elem.classList.contains("reset")) {
        elem.style.boxShadow = "0px 0px 0px 7px rgba(134, 173, 134, 0.42)";
        setTimeout(function () {
            elem.style.boxShadow = "none"
        }, 350)
    }  
})