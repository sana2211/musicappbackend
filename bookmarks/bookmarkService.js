  const BookmarkService = {
   
    insertNewBookmark(knex, newUser){
        return knex
            .insert(newUser)
            .into('bookmarks')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    
    getBookmarks(knex, id){
        return knex 
            .select('*')  
            .from('bookmarks')
            .where('user_id', id)
    },

    deleteBookmark(knex, id){
        return knex 
            .delete('*')  
            .from('bookmarks')
            .where('id', id)
    }
}

module.exports = BookmarkService;

