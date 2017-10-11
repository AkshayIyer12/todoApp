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
  console.log(data)
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


function showTwoOption (e) {
  e.target.innerText = "CLean @ 7"
  console.log(e.target.innerText)
}
function divFunc (data, a) {
  let ul = document.getElementById('form4ul')
  for (let i in data) {
    console.log(document.getElementById(data[ i ].tid))
    if (document.getElementById(data[ i ].tid) === null) {
      let li = document.createElement('li')
      li.setAttribute('id', data[ i ].tid)
      li.setAttribute('onclick', 'showTwoOption(event)')
      let name = document.createTextNode(data[i].tname)
      li.appendChild(name)
      ul.appendChild(li)
    }
  }
}
