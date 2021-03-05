  const UsersService = {
    getAllUsers(knex){
        return knex
        .select('*')
        .from('users')
    },
    insertNewUser(knex, newUser){
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    getUserByUserId(knex, id){
        return knex 
            .from('users')
            .select('*')
            .where('id',id)
            .first()
    },
    getUserByUsername(knex, username){
        return knex 
            .select('id','username','password')
            .from('users')
            .where('username',username)
            .first()
    },
}

module.exports = UsersService;

