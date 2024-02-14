const axios = require('axios');
const api = axios.create({
    baseURL:"http://localhost:4000/users/",
    headers: {
        'Content-Type': 'application/json'
    }
})

exports.getUserById = (id) => {
    return api.get(`/${id}`)
}

exports.addUser = (user) => {
    return api.post('/',user)
}
exports.updateUser = (user) => {
    return api.put('/',user)
}