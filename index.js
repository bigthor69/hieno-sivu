let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function Lisää() {
    count += 1
    countEl.innerText = count
}

function Tallenna() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}

function KaikkiPois(){

    count = 0
    console.log(count)
    document.getElementById("count-el").innerText = count
}
