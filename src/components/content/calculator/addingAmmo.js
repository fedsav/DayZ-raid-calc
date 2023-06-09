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

// new ammo adding

let buttons = document.querySelectorAll('.btn')

buttons.forEach( el => {
    el.addEventListener('click', (event) => {
       let ammoInput = event.target.parentElement.previousElementSibling;
       let ammoValue = event.target.parentElement.previousElementSibling.value;

       if  (ammoInput.classList.contains('mosinValue')) {
        damage["D762x54"] = ammoValue * 150
        allRounds["762x54"] = ammoValue

        let txtZone = document.querySelector(".round_ofgun__mosin");
        txtZone.textContent = ammoValue
            }

        else if (ammoInput.classList.contains('winValue')) {
                damage["D308"] = ammoValue * 150
                allRounds["308"] = ammoValue
    
                let txtZone = document.querySelector(".round_ofgun__win");
                txtZone.textContent = ammoValue
            } 

            else if (ammoInput.classList.contains('m4Value')) {
                damage["D5x56"] = ammoValue * 107
                allRounds["5x56"] = ammoValue

                let txtZone = document.querySelector(".round_ofgun__m4");
                txtZone.textContent = ammoValue
            } 

            else if (ammoInput.classList.contains('akValue')) {
                damage["D5x45"] = ammoValue * 80
                allRounds["5x45"] = ammoValue

                let txtZone = document.querySelector(".round_ofgun__ak");
                txtZone.textContent = ammoValue
            }

            else if (ammoInput.classList.contains('sksValue')) {
                damage["D762x39"] = ammoValue * 110
                allRounds["762x39"] = ammoValue

                let txtZone = document.querySelector(".round_ofgun__sks");
                txtZone.textContent = ammoValue
            }

            else if (ammoInput.classList.contains('vssValue')) {
                damage["D9x39"] = ammoValue * 75
                allRounds["9x39"] = ammoValue

                let txtZone = document.querySelector(".round_ofgun__vss");
                txtZone.textContent = ammoValue
            }

            else if (ammoInput.classList.contains('slugsValue')) {
                damage["Dslugs"] = ammoValue * 99
                allRounds["slugs"] = ammoValue

                let txtZone = document.querySelector(".round_ofgun__slugs");
                txtZone.textContent = ammoValue
            }

            else if (ammoInput.classList.contains('buckshotValue')) {
                damage["Dbuckshot"] = ammoValue * 125
                allRounds["buckshot"] = ammoValue

                let txtZone = document.querySelector(".round_ofgun__buckshot");
                txtZone.textContent = ammoValue
            }
            
    })
})

//new reset !!DONE!!

let allResets = document.querySelectorAll('.reset');
allResets.forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.parentElement.previousElementSibling.value = ''
    })
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