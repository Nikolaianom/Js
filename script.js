let arr = []

for(let i = 0; i < Infinity; i++) {
  let command = prompt('Введите команду')
  let newArr = command.split(' ')
  if(newArr[0] == 'add') {
    arr.push(newArr[1])
  }else if(newArr[0] == 'del') {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == newArr[1]) {
        arr.splice([1, 1])
      }
    }
  }else if(newArr[0] == 'stop') {
    break
  }
  
}
for(const key in arr) {
   console.log(arr[key]); 
  }