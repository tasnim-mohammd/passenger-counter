let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function decrement() {
    if(count > 0)
    {
        count -= 1
        countEl.textContent = count
    }
    else
    {
        let errorParagraph = document.getElementById("error")
        errorParagraph.textContent = "You can't decrement when the counter is zero, it should be more than that."

        setTimeout(function() {
            errorParagraph.textContent = "";
        }, 5000); 
    }   

}

function reset(){
    count = 0
    saveEl.textContent = "Previous entries: "
}