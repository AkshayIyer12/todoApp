class IOCore {constructor (ioFunc) {this.then = cb => ioFunc((...args) => cb(...args));};map (transform) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {let result = transform(...args);if (result !== undefined) {if (Array.isArray(result)) {cb(...result);} else {cb(result);}}});};return this;};bind (ioFunc) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {if (args !== undefined) {let _args = ioFunc.length < args.length ? args.slice(0, ioFunc.length) : args;let cbReturn = ioFunc(..._args);if (cbReturn !== undefined) {let cbReturnLen = cbReturn.length;let io = cbReturn[cbReturnLen - 1];let argsForCb = cbReturn.slice(0, cbReturnLen - 1);io.then((...ioargs) => cb(...argsForCb, ...ioargs));}}});};return this;};static timer (s) {var intervalId;var timer = new IOCore(cb => {intervalId = setInterval(cb, Math.floor(s * 1000))});timer.clear = () => clearInterval(intervalId);return timer;};static createIO (ioFunc) {return new IOCore(ioFunc);};};const readline = require('readline');const rlConfig = {input: process.stdin,output: process.stdout}; class IO extends IOCore {static getLine (str) {const rl = readline.createInterface(rlConfig);return new IO(cb => rl.question(str, cb)).map(data => {rl.close();return data;});};static putLine (...data) {return new IO(cb => process.nextTick(cb, data)).map(data => {console.log(...data);return data});};};

global.IO = IO

const board = {};
const addTask = (board, value1, value2, value3) => IO.putLine('Adding Task...').map(() => {
  Object.defineProperty(board, 'Task1', {
    value: value1,
    enumerable: true,
    writable: true,
    configurable: true
  });
  Object.defineProperty(board, 'Task2', {
    value: value2,
    enumerable: true,
    writable: true,
    configurable: true
  });
  Object.defineProperty(board, 'Task3', {
    value: value3,
    enumerable: true,
    writable: true,
    configurable: true
  });
  return [board]
});
const deleteTask = (board, task) => IO.putLine('Deleting Task...').map(() => {
  (delete board[task])
  return [board]
});
const viewTask = (board, task) => IO.putLine('Opening Task...').map(() => [board[task]]);
const main = IO.getLine('Enter Task: ').bind(val1 => [
  val1,
  IO.getLine('Enter Task: ')
]).bind((val1, val2) => [
  val1,
  val2,
  IO.getLine('Enter Task: ')
]).bind((val1, val2, val3) => [
  val1,
  val2,
  val3,
  addTask(board, val1, val2, val3)
]).bind((val1, val2, val3, val4) => [
  val1,
  val2,
  val3,
  val4,
  IO.putLine('Task Board: ', board)
]).bind((val1, val2, val3, val4) => [
  val1,
  val2,
  val3,
  val4,
  IO.getLine('Delete Task: ')
]).bind((val1, val2, val3, val4, val5) => [
  val1,
  val2,
  val3,
  val4,
  val5,
  deleteTask(val4, val5)
]).bind((val1, val2, val3, val4, val5, val6) => [
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  IO.putLine('Task Board: ', board)
]).bind((val1, val2, val3, val4, val5, val6) => [
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  IO.getLine('Enter Task to view: ')
]).bind((val1, val2, val3, val4, val5, val6, val7) => [
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  val7,
  viewTask(val6, val7)
]).bind((val1, val2, val3, val4, val5, val6, val7, val8) => [
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  val7,
  val8,
  IO.putLine(val8)
]).bind((val1, val2, val3, val4, val5, val6, val7, val8) => [
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  val7,
  val8,
  IO.putLine('Task Board: ', board)
]).then(() => [])
