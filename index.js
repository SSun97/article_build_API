const express = require('express')
const app = express()
const fs = require('fs')

full_list_from_program = ["Adam", "Brian", "Chris", "Dan"]

app.get('/full_list', function (req, res) {
  res.send(full_list_from_program)
})

app.put('/full_list', function (req, res) {
  // read the file
  let full_list_from_file = fs.readFileSync('full_list.txt', 'utf8') 
  // split the file into an array
  full_list_from_file_array = full_list_from_file.split(', ')
  // add the new name to the array
  full_list_from_file_array.push(req.query.name)
  // join the array into a string 
  list_string = full_list_from_file_array.join(', ')
  // write the string to the file
  fs.writeFileSync('full_list.txt', list_string)  
  res.send(list_string)   
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})