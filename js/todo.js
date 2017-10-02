let name, date, desc
let data = {}
function onload () {
  name = document.getElementById('tname')
  date = document.getElementById('tdate')
  desc = document.getElementById('tdesc')
}
function createTask () {
  let tid = parseInt(Math.random() * (11 - 1) * 10)
  if (data[tid] === undefined) {
    data[tid] = {}
    data[tid].tid = tid
    data[tid].tname = name.value
    data[tid].tdate = date.value
  console.log(data)
    
    date[tid].td = desc.value
  console.log(data)
    return data
  }

}
