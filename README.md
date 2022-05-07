# This project is reflect the article about making the simplest API in Node.js

## How to use this porject

### Clone the repo to local
```
git clone https://github.com/SSun97/article_build_API.git
```
### In the cloned folder run 
```
npm install
```
### run the project
```
npm start
```

## How to test
### Install postman https://www.postman.com/downloads/
### create new request
- set HTTP method as get, use url: localhost:3000/full_list
  - you should get the result in an array
  ```
  [
    "Adam",
    "Brian",
    "Chris",
    "Dan"
  ]
  ```
- set HTTP method as put, use url: localhost:3000/full_list?name=Adam
  - you should get the result in an string
  ```
  Ethen, Fred, George, Harry, Ivan, Adam
  ```

## Further exercise: try to do this project in another programming language, like Python, c#...

Look forward to your comments and advices.