let tid, name, date, desc
let data = {}

function onload () {
  tid = document.getElementById('tid')
  name = document.getElementById('tname')
  date = document.getElementById('tdate')
  desc = document.getElementById('tdesc')
}

let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]
btn.onclick = function () {
  modal.style.display = 'block'
}
span.onclick = function () {
  modal.style.display = 'none'
}
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
function createTask () {
  if (tid === undefined || tid.value === undefined) {
    onload()
  }
  tid = tid.value
  data[ tid ] = {}
  data[ tid ].tid = tid
  data[ tid ].tname = name.value
  data[ tid ].tdate = date.value
  data[ tid ].tdesc = desc.value
  divFunc(data, tid)
}
let btn1 = document.getElementById('myBtn1')
btn1.onclick = function () {
  try {
    let li = document.getElementsByTagName('li')
    if (li === null || li === undefined) throw new Error('Todo list is empty')
    let id = li[0].getAttribute('id')
    console.log(id)
    li[0].remove()
    delete data[id]
  } catch (e) {
    console.log(e)
    alert('Todo list is empty')
  }
}


function updateTodo (e) {
  let message
  let d = window.prompt(message, 'What do you want to finish?')
  e.path[2].childNodes[0].data = d
  let id = e.path[2].attributes[0].nodeValue
  data[id] = d
  console.log(data)
}

function deleteTodo(e) {
  let check = alert()
  let id = e.path[2].attributes[0].nodeValue
  console.log(id)
  let li = document.getElementById(id)
  li.remove()
  delete data[id]
  console.log(data[id])
}

function divFunc (data, a) {
  let ul = document.getElementById('form4ul')
  for (let i in data) {
    console.log(document.getElementById(data[ i ].tid))
    if (document.getElementById(data[ i ].tid) === null) {
      let div = document.createElement('div')
      let div2 = document.createElement('div')
      let li = document.createElement('li')
      div.setAttribute('class', 'popUp')
      li.setAttribute('id', data[ i ].tid)
      let name = document.createTextNode(data[i].tname)
      let edit = document.createElement('i')
      edit.setAttribute('class', 'fa fa-pencil')
      edit.setAttribute('onclick', 'updateTodo(event)')
      let close = document.createElement('i')
      close.setAttribute('class', 'fa fa-trash')
      close.setAttribute('onclick', 'deleteTodo(event)')
      li.appendChild(name)
      div2.appendChild(edit)
      div2.appendChild(close)
      li.appendChild(div2)
      div.appendChild(li)
      ul.appendChild(div)
    }
  }
}
