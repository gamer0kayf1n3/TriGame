
function newGame() {
    input.value = ""
    convert("response", "")
    document.getElementById("response").style.display = "none"
    //if (document.getElementById("response").firstChild) document.getElementById("response").firstChild.remove()
    console.log("is this running")
    if (current_type == "rad") {
        answer = randomDeg(RANDOM_MIN, RANDOM_MAX, RANDOM_PRECISION)
        convert("formula", deg2rad(answer))
    }
}

input.addEventListener("input", () => {
    document.getElementById("response").style.display = "inline"
    convert("response", rad_input_process(input.value))
    if (answer == input.value) {newGame()}
})

newGame()