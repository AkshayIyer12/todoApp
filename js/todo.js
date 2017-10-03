let tid, name, date, desc
let data = {}
function onload () {
  tid = document.getElementById('tid')
  name = document.getElementById('tname')
  date = document.getElementById('tdate')
  desc = document.getElementById('tdesc')
}
function createTask () {
  // let tid = parseInt(Math.random() * (11 - 1) * 10)
  // let tid = hashCode(name.value)
  if (tid.value === undefined) {
    tid = document.getElementById('tid')
  name = document.getElementById('tname')
  date = document.getElementById('tdate')
  desc = document.getElementById('tdesc')
  }
  tid = tid.value
  data[tid] = {}
  data[tid].tid = tid
  data[tid].tname = name.value
  data[tid].tdate = date.value
  data[tid].tdesc = desc.value
  return data
}
// function hashCode (tname) {
//   let hash = 0, i, chr
//   if (tname.length === 0) return hash
//   for (i = 0; i < tname.length; i++) {
//     chr = tname.charCodeAt(i)
//     hash = ((hash << 5) - hash) + chr
//     hash |= 0 // Convert to 32bit integer
//   }
//   return hash
// }
function findTask (name) {
  try {
    let tid = document.getElementById('ftid').value
    // let tid = hashCode(name)
    if (data[tid] === undefined || data[tid] === null) throw new Error('Task does not exist!')
    console.log(data[tid], tid)
    return data[tid]
  } catch (e) {
    console.log(e)
    alert('Task does not exist')
  }
}
function updateTask () {
  let utid = document.getElementById('utid').value
  let name = document.getElementById('utname').value
  let date = document.getElementById('utdate').value
  let desc = document.getElementById('utdesc').value
  // let findTid = hashCode(findName)
  // let updateTid = hashCode(name)
  // console.log(findTid, updateTid, name, desc)
  // if (findTid === updateTid) {
  //   data[updateTid].tdate = date
  //   data[updateTid].tdesc = desc
  //   console.log(data[updateTid])
  //   return data
  // }
  console.log(data)
  data[utid].tname = name
  data[utid].tdate = date
  data[utid].tdesc = desc
  // if (findTid !== updateTid) {
  //   // delete data[findTid]
  //   data[updateTid].tid = updateTid
  //   data[updateTid].tname = name
  //   data[updateTid].tdate = date
  //   data[updateTid].tdesc = desc
  //   console.log(data[findTid])
  //   console.log(data[updateTid])
  //   return data
  // }
  console.log(data)
  return data
}
function deleteTask () {
  let dtid = document.getElementById('dtid').value
  //let tid = hashCode(name)
  delete data[dtid]
  console.log(data)
  return data
}