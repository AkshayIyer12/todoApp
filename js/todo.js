let name, date, desc
let data = {}
function onload () {
  name = document.getElementById('tname')
  date = document.getElementById('tdate')
  desc = document.getElementById('tdesc')
}
function createTask () {
  let tid = parseInt(Math.random() * (11 - 1) * 10)
  data[tid] = {}
  data[tid].tid = tid
  data[tid].tname = name.value
  data[tid].tdate = date.value
  data[tid].tdesc = desc.value
  return data
}
function hashCode(tname) {
  let hash = 0, i, chr;
  if (tname.length === 0) return hash;
  for (i = 0; i < tname.length; i++) {
    chr   = tname.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
