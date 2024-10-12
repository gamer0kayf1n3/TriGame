window.addEventListener('keydown', function (e) {
    if (e.code == "KeyP" && e.shiftKey && e.ctrlKey || e.code == "Escape") {
        e.preventDefault()
        console.log("yes")
    }
})