const {getUserById,addUser} = require('../Api/usersApi')

exports.GetById = async(req, res) =>{
    try{
        if(!req.params.id){
            return res.status(404).send('id not provided')
        }
        const user = await getUserById(req.params.id)
        res.status(200).json(user.data)
    }catch(err){
        res.status(500).send('error: ' + err.message)
    }
}

exports.AddNewUser = async(req, res) => {
    const newUser = await addUser(req.body)
    if(newUser.data){
        return res.status(201).send('success: ' + JSON.stringify(newUser.data))
    }
    return res.status(500).send('error:')
}