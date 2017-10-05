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
  console.log(data)
  divFunc(data, tid)
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
  try {
    if (data[utid] === undefined) throw new Error('Task id does not exist')
    data[utid].tname = name
    data[utid].tdate = date
    data[utid].tdesc = desc
  } catch (e) {
    console.log(e)
    alert('Task Id does not exist')
  }
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
}
function deleteTask () {
  let dtid = document.getElementById('dtid').value
  // let tid = hashCode(name)
  try {
    if (data[dtid] === undefined) throw new Error('Task Id does not exist!')
    delete data[dtid]
    console.log(data)
  } catch (e) {
    console.log(e)
    alert('Task Id does not exist')
  }
}
function divFunc (data, a) {
  let currentDiv = document.getElementById('form4')
  let colon = ': '
  let space = ' '
  for (let i in data) {
    console.log('i ->', i)
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    for (let j in data[i]) {
      console.log('j-> ', j)
      let cellText = document.createTextNode(j)
      let coln = document.createTextNode(colon)
      let cellText2 = document.createTextNode(data[i][j])
      let spaced = document.createTextNode(space)
      li.appendChild(cellText)
    li.appendChild(coln)
    li.appendChild(cellText2)
    li.appendChild(spaced)
    }
    ul.appendChild(li)
    currentDiv.appendChild(ul)
  }

  // let tbl = document.createElement('table')
  // let tblBody = document.createElement('tbody')
  // for (let i = 0; i < Object.keys(data).length; i++) {
  //   let row = document.createElement('tr')
  //   console.log(data[i], data)
  //   for (let j in data[i]) {
  //     console.log(j)
  //     let cell = document.createElement('td')
  //     let cellText = document.createTextNode(data[i][j])
  //     cell.appendChild(cellText)
  //     row.appendChild(cell)
  //   }
  //   tblBody.appendChild(row)
  // }
  // tbl.appendChild(tblBody)
  // console.log(currentDiv.appendChild(tbl))
  // tbl.setAttribute('border', '10')
  //currentDiv.innerHTML = data[a].tname
}
