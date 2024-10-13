window.addEventListener('keydown', function (e) {
    if (e.code == "KeyP" && e.shiftKey && e.ctrlKey || e.code == "Escape") {
        e.preventDefault()
        console.log("yes")
    }
})

const input = document.getElementById("in");
const main = document.getElementById("main");
function keepFocus() {
    input.focus();
}

window.onload = function() {
    input.focus();
};

main.addEventListener('click', keepFocus);

function rad_input_process(input) {
    if (!input.includes("/")) return input
    input = input.replace("p", "\\pi")

    var [a, ...b] = input.split("/")
    console.log(a)
    console.log(b.join("/"))
    
    input = `\\frac {${a}} {${b}}`
    return input
}
var answer = ""
input.addEventListener("keydown", (e) => {
    if (current_type == "rad") {
        if (!(/[0-9p/]/.test(e.key)) && e.key !== "Backspace") {e.preventDefault(); return}
    }
})

input.addEventListener("input", () => {
    console.log(rad_input_process(input.value))
})