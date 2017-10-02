const data = require('./todoData')

const createTask = (data, tid, tname, tdesc, tts) => {
  data[tid] = {}
  data[tid].tid = tid
  data[tid].tname = tname
  data[tid].tdesc = tdesc
  data[tid].tts = tts
}

const deleteTask = (data, tid) => delete data[tid]

const updateTask = (data, tid, tname) => {
	data[tid].tname = tname
	return data
}

const readTask = data => console.log(data)

createTask(data, 3, 'Read Structure and Interpretation of Computer Programs', 'Finish Section 1 from the book', '5-10-2017')
updateTask(data, 1, 'Read Closure Brave and Truth')
readTask(data)
