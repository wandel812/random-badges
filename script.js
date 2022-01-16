const IMG_WIDTH = 3000;
const BADGE_STEP = 100;
const DICE_BADGE_POS = 775;


function handleSubmit(event) {
    const choosenBadgeColor = findCheckedRadioValue();
    const finalWheelPosition = calcBadgePosition(choosenBadgeColor)
        + calcFancyOffset()
        - calcExtraSpeens();

    const wheel = document.querySelector("#roulette");
    wheel.style.setProperty("--end-pos", finalWheelPosition);
    wheel.classList.add("animate");

    const rollButton = document.querySelector("#roll");
    rollButton.setAttribute("disabled", "disabled");
}

function handleReset(event) {
    const wheel = document.querySelector("#roulette");
    wheel.classList.remove("animate");
    wheel.style.setProperty("--end-pos", 0);

    const rollButton = document.querySelector("#roll");
    rollButton.removeAttribute("disabled", "disabled");
}

function findCheckedRadioValue() {
    const radios = document.querySelectorAll(".wheel-control-item>input");
    let checkedRadio;
    for (let r of radios) {
        if (r.checked) {
            checkedRadio = r;
            break;
        }
    }
    return checkedRadio.value;
}

function calcExtraSpeens() {
    const additionalSpeensBeforeEnd = 3 + (Math.floor(Math.random() * 10) % 5);
    return additionalSpeensBeforeEnd * IMG_WIDTH;
}

function calcFancyOffset() {
    if (Math.random() < 0.66) {
        return (Math.random() < 0.5) ? +25 : -25;
    } else {
        return 0;
    }
}

function calcBadgePosition(badgeColor) {
    console.log(badgeColor)
    let resultPosition = DICE_BADGE_POS;
    if (badgeColor === "gold") {
        resultPosition += (2 * randomNumberBetween(0, 3) + 1) * 100;
    } else if (badgeColor === "black") {
        resultPosition += (2 * randomNumberBetween(0, 3)) * 100;
    }
    return resultPosition;
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const submitButton = document.querySelector("#roll");
submitButton.addEventListener("click", () => handleSubmit());

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => handleReset());