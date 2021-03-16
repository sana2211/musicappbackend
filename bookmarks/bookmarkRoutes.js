const express = require('express')
const BookmarkService = require('./bookmarkService')

const bookmarkRouter = express.Router()

bookmarkRouter
    .route(`/:user_id`)
    .all((req, res, next)=>{
      BookmarkService.getBookmarks(
          req.app.get('db'),
          req.params.user_id
        )
        .then(user=>{
          if(!user){
             return res.status(404).json({
             error: {message: `No bookmarks` }
              })
            }
            res.user = user
            next()
        })
        .catch(next)       
    })
    .get((req, res, next)=>{
        res.json(res.user)
    })
    .post((req, res, next)=>{
        console.log(req.body)
         const { title, artist, url } = req.body
              const newBookmark ={
                  title,
                  artist,
                  url
              };
              console.log(newBookmark)
              BookmarkService.insertNewBookmark(
                req.app.get('db'),
                newBookmark
               )
              .then(user=>{
                res
                  .status(201)
                  .json(user)
               })
               .catch(next);
   
      })
  
    .delete((req, res, next)=>{
        UsersService.deleteUser(
            req.app.get('db'),
            req.params.user_id
        )
        .then(()=>{
            res.status(204).end()
        })
        .catch(next)
    })



module.exports = bookmarkRouter 