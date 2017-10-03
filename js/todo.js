let name, date, desc
let data = {}
function onload () {
  name = document.getElementById('tname')
  date = document.getElementById('tdate')
  desc = document.getElementById('tdesc')
}
function createTask () {
  // let tid = parseInt(Math.random() * (11 - 1) * 10)
  let tid = hashCode(name.value)
  data[tid] = {}
  data[tid].tid = tid
  data[tid].tname = name.value
  data[tid].tdate = date.value
  data[tid].tdesc = desc.value
  return data
}
function hashCode (tname) {
  let hash = 0, i, chr
  if (tname.length === 0) return hash
  for (i = 0; i < tname.length; i++) {
    chr = tname.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}
function findTask (name) {
  try {
    let name = document.getElementById('ftname').value
    let tid = hashCode(name)
    if (data[tid] === undefined || data[tid] === null) throw new Error('Task does not exist!')
    console.log(data[tid], tid)
    return data[tid]
  } catch (e) {
    console.log(e)
    alert('Task does not exist')
  }
}
function updateTask () {
  let findName = document.getElementById('uftname').value
  let updateName = document.getElementById('utname').value
  let updateDate = document.getElementById('utdate').value
  let updateDesc = document.getElementById('utdesc').value
  let findTid = hashCode(fname)
  let updateTid = hashCode(utname)
  if (findTid === updateTid) {
    data[updateTid].tdate = updateDate
    data[updateTid].tdesc = updateDesc
    console.log(data[updateTid])
    return data
  }
  if (findTid !== updateTid) {
    delete data[findTid]
    data[updateTid].tid = updateTid
    data[updateTid].tname = updateName
    data[updateTid].tdate = updateDate
    data[updateTid].tdesc = updateDesc
    console.log(data[tidF])
    console.log(data[tidU])
    return data
  }
}
