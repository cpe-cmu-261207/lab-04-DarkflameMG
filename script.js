//input text
let currentInput = ""
const listInput = (ev) => {
    currentInput = ev.target.value
}

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class','max-w-sm mx-auto')
const comDiv = document.createElement('div')
comDiv.setAttribute('class','max-w-sm mx-auto')

// Enter
const input = document.getElementById("myinput")
input.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') {
   ev.preventDefault()
   document.getElementById('myBtn').click()
  }
})

// add list
const addlist = () => {
    const Taskspan = document.createElement('span')
    const span = document.createElement('span')
    if (currentInput != "") {
        span.innerHTML = currentInput
        Taskspan.append(span)
        

        const delBtn = document.createElement('button')
        delBtn.innerHTML = "Delete"
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(Taskspan)
        })

        const comBtn = document.createElement('button')
        comBtn.innerHTML = "Done"
        comBtn.addEventListener('click',() => {
            comDiv.prepend(Taskspan)
            mainDiv.removeChild(Taskspan)
        })

        Taskspan.append(delBtn)
        Taskspan.append(document.createElement('br'))
        mainDiv.prepend(Taskspan)
        document.body.append(mainDiv)
    }
    else
    {
        alert("Task cannot be empty")
    }
}