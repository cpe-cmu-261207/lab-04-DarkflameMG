//input text
let currentInput = ""
const listInput = (ev) => {
    currentInput = ev.target.value
}

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'max-w-sm mx-auto text-lg')
const comDiv = document.createElement('div')
comDiv.setAttribute('class', 'max-w-sm mx-auto p-2 text-lg')

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
    const Taskspan = document.createElement('p')
    Taskspan.setAttribute('class', 'group flex justify-between p-2')
    const span = document.createElement('p')
    const btndiv = document.createElement('div')
    btndiv.setAttribute('class', 'space-x-4')
    if (currentInput != "") {
        span.innerHTML = currentInput
        Taskspan.append(span)


        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'text-white  group-hover:bg-red-400 group-hover:text-black')
        delBtn.innerHTML = "Delete"
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(Taskspan)
        })

        const comBtn = document.createElement('button')
        comBtn.setAttribute('class', 'text-white  group-hover:bg-green-400 group-hover:text-black')
        comBtn.innerHTML = "Done"
        comBtn.addEventListener('click', () => {
            const del = document.createElement('del')
            //del.setAttribute('class','p-2')
            del.innerHTML = span.innerHTML
            del.append(document.createElement('br'))
            comDiv.prepend(del)
            mainDiv.removeChild(Taskspan)
        })

        btndiv.append(comBtn)
        btndiv.append(delBtn)
        Taskspan.append(btndiv)
        //Taskspan.append(document.createElement('br'))
        mainDiv.prepend(Taskspan)
        document.body.append(mainDiv)
        document.body.append(comDiv)
    }
    else {
        alert("Task cannot be empty")
    }
}