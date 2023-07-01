function add(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function divide(a, b) {
    return Number((a / b).toFixed(3))
}

function multiply(a, b) {
    return a * b
}

function promptNumber(msg) {
    const res = prompt(msg)
    const maxNumber = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER))
    if (isNaN(+res) || res === "") {
        return promptNumber("Only numbers allowed!!!")
    }
    if (+res > Math.abs(maxNumber)) {
        return promptNumber(`Allowed number range is from ${-maxNumber} to ${maxNumber}`)
    }
    return res ? +res : null
}

function alertCaltulated() {
    const a = promptNumber("Please, enter a number")
    if (!a) return

    const b = promptNumber("Please, enter a number")
    if (!b) return

    const sum = add(a, b)
    const difference = minus(a, b)
    const division = divide(a, b)
    const multiplication = multiply(a, b)

    const message = `Користувач ввів ${a} і ${b}:
    • ${a} + ${b} = ${sum};
    • ${a} - ${b} = ${difference};
    • ${a} / ${b} = ${division};
    • ${a} * ${b} = ${multiplication};
    `

    alert(message)
}

const btnEl = document.createElement("button")
btnEl.textContent = "Calculate"
btnEl.onclick = alertCaltulated

document.body.append(btnEl)
