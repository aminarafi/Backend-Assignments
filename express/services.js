const fs = require('fs')

let users = fs.readFileSync('users.json', 'utf-8')

users = JSON.parse(users)

const listUsers = () => {
  return users
}

const getUser = userId => {
  userId = Number(userId)

  return users.find(user => user.id === userId)
}

const addUser = user => {
  users.push(user)

  fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8')

  return 'SUCCESS: user added'
}

const updateUser = (user,userId) => {
  console.log(userId)
  const index = users.findIndex((user) => 
    user.id ==userId)
  
  console.log(users[index])


    if (index >= 0) {
      users[index].name=user.name
      users[index].age=user.age
      users[index].profession=user.profession
      users[index].role=user.role
        fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8')
        return "Success : user updated"
     
  }
    else {
      return "No user found"
    }

 }
const deleteUser = userId=> {

    users = users.filter(user => user.id !== Number(userId))

    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8')

    return "Success : user deleted"
    
    }  
module.exports = {
  listUsers: listUsers,
  getUser: getUser,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}