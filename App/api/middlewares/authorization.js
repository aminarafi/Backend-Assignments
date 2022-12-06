const authorizeTo = (...systemRoles) => {
    return async (req, res, next) => {
      
      try {
        console.log('*** authorization ***')
        const user = req.user
  
        console.log({
          systemRoles,
          myRole: user
        })
  
        if (!systemRoles.includes(user?.systemRole)) {
          console.log(user.systemRole);
          return res.status(401).json({
            message: "You're un Authorized to do this action"
          })
        }
  
        next()
      } catch (error) {
        console.log(error)
  
        res.status(500).json({
          error: 'INTERNAL SERVER ERROR'
        })
      }
    }
}
  

 module.exports = { authorizeTo }
  