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
function assignValue (tid) {
  data[tid] = {}
  data[tid].tid = tid
  data[tid].tname = name.value
  data[tid].tdate = date.value
  data[tid].tdesc = desc.value
}
function createTodo () {
  if (tid === undefined || tid.value === undefined) onload()
  tid = tid.value
  assignValue(tid)
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
  let message, oldData, intent = 'What do you want to finish today?'
  let d = window.prompt(message, intent)
  oldData = e.path[2].childNodes[0].data
  let id = e.path[2].attributes[0].nodeValue
  if (d === null || d === "" || d === intent) {
    e.path[2].childNodes[0].data = oldData
    return
  }
  e.path[2].childNodes[0].data = d
  data[id] = d
 }

function deleteTodo(e) {
  let id = e.path[2].attributes[0].nodeValue
  let li = document.getElementById(id)
  li.remove()
  delete data[id]
}

function divFunc (data, a) {
  let ul = document.getElementById('form4ul')
    if (document.getElementById(data[a].tid) === null) {
      let li = document.createElement('li')
      li.setAttribute('id', data[a].tid)
      let name = document.createTextNode(data[a].tname)
      let edit = document.createElement('i')
      edit.setAttribute('class', 'fa fa-pencil')
      edit.setAttribute('onclick', 'updateTodo(event)')
      let close = document.createElement('i')
      close.setAttribute('class', 'fa fa-trash')
      close.setAttribute('onclick', 'deleteTodo(event)')
      li.appendChild(name)
      let div2 = document.createElement('div') 
      div2.appendChild(edit)
      div2.appendChild(close)
      li.appendChild(div2)
      ul.appendChild(li)
    }
}
