
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookmarks').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookmarks').insert([
        {title: 'title 1', user_id: 4, artist: 'coldplay', url: 'url 1'},
        {title: 'title 2', user_id: 4, artist: 'coldplay', url: 'url 2'},
        {title: 'title 3', user_id: 5, artist: 'kanye west', url: 'url 3'}
      ]);
    });
};
