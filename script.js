//input text
let currentInput = ""
const listInput = (ev) => {
    currentInput = ev.target.value
}

let listadd = { dolist:[]}

if (localStorage.length === 0) {
    window.localStorage.setItem('done', 0)
    window.localStorage.setItem('list', 0)
}

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'max-w-sm mx-auto text-lgs')
const comDiv = document.createElement('div')
comDiv.setAttribute('class', 'max-w-sm mx-auto p-2 text-lg bg-green-200 rounded-xl')

// Enter
const input = document.getElementById("myinput")
input.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
        ev.preventDefault()
        document.getElementById('myBtn').click()
    }
})

// add list
const addlist = (backup) => {
    const Taskspan = document.createElement('p')
    Taskspan.setAttribute('class', 'group flex justify-between p-2 border-b-2 transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out rounded-xl hover:shadow-lg bg-white')
    const span = document.createElement('p')
    const btndiv = document.createElement('div')
    btndiv.setAttribute('class', 'space-x-4')
    if (currentInput != "") {
        span.innerHTML = currentInput
        if(backup===0)
        {
            listadd.dolist.push(currentInput)
            localStorage.listadd = JSON.stringify(listadd)
        }
        Taskspan.append(span)
        input.value=""

        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'text-white  pr-3 pl-3 group-hover:bg-red-400 group-hover:text-black rounded-lg')
        delBtn.innerHTML = "Delete"
        delBtn.addEventListener('click', () => {
            listadd.dolist.splice(listadd.dolist.indexOf(span.innerHTML),1)
            localStorage.listadd = JSON.stringify(listadd)
            mainDiv.removeChild(Taskspan)
        })

        const comBtn = document.createElement('button')
        comBtn.setAttribute('class', 'text-white  pr-4 pl-4 group-hover:bg-green-400 group-hover:text-black rounded-lg')
        comBtn.innerHTML = "Done"
        comBtn.addEventListener('click', () => {
            const del = document.createElement('del')
            let test = localStorage.getItem('done')
            window.localStorage.setItem('key' + test,[ span.innerHTML])
            del.innerHTML = localStorage.getItem('key' + test)
            test++
            window.localStorage.setItem('done', test)
            
            listadd.dolist.splice(listadd.dolist.indexOf(del.innerHTML),1)
            localStorage.listadd = JSON.stringify(listadd)
            del.append(document.createElement('br'))
            comDiv.prepend(del)
            mainDiv.removeChild(Taskspan)

        })

        btndiv.append(comBtn)
        btndiv.append(delBtn)
        Taskspan.append(btndiv)
        mainDiv.prepend(Taskspan)
        document.body.append(mainDiv)
        document.body.append(comDiv)
    }
    else {
        alert("Task cannot be empty")
    }
}
const loadDoneList = () =>{
    for (let i = 0; i <localStorage.getItem('done'); i++) {
        if (localStorage.getItem('key' + i )!== null) {
            const del1 = document.createElement('del')
            del1.innerHTML = localStorage.getItem('key' + i)
            del1.append(document.createElement('br'))
            comDiv.prepend(del1)
        }
    }
    document.body.append(comDiv)
}
const loadDolist = () => {
    if(localStorage.listadd)
    {
        listadd = JSON.parse(localStorage.listadd)
    }
    for(let i = 0 ; i< listadd.dolist.length;i++)
    {
        currentInput = listadd.dolist[i]
        addlist(1)
    }
}
loadDolist()
loadDoneList()
