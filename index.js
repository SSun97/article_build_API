const express = require('express')
const app = express()
const fs = require('fs')

full_list_from_program = ["Adam", "Brian", "Chris", "Dan"]

app.get('/full_list', function (req, res) {
  res.send(full_list_from_program)
})

app.put('/full_list', function (req, res) {
  let full_list_from_file = fs.readFileSync('full_list.txt', 'utf8') // read the file
  full_list_from_file_array = full_list_from_file.split(',')  // split the file into an array
  full_list_from_file_array.push(req.query.name)  // add the new name to the array
  list_string = full_list_from_file_array.join(', ')  // join the array into a string
  fs.writeFileSync('full_list.txt', list_string)  // write the string to the file
  res.send(list_string)   
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})