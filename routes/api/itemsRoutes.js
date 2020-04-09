const express = require('express'),
router = express.Router();


//Item Models 
const Item = require('../../Models/Items');

//@route DET api/items
//@desc det All item
//@access Public
router.get('/', (req, res) => {
    Item.find()
        .select('_id name date')
        .sort({ date: -1 })
       // .then(items => res.json(items))
       .then(docs => {
        const response = {
            //count: docs.length,
            items: docs.map(doc =>{
                return {
                    _id: doc._id,
                    name: doc.name,
                    date: doc.date,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/api/items/' + doc._id
                    }
                }
            })
        };
        console.log(response);
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});


//@route POST api/items
//@desc create a post
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem
        .save()
        //.then(item => res.json(item))
        .then(result => {
            console.log(result);  
            res.status(201).json({
               message: 'Handling POST requests to /api/items',
               createdPost: {
                   _id: result._id,
                   name: result.name,
                   date: result.date,
                   request: {
                       type: 'POST',
                       url: 'http://localhost:5000/api/items/' + result._id
                   }
               }
           }) 
       })
       .catch(err => {
           console.log(err);
           res.status(201).json({
               error: err
           });
       })       
});


//@route GET  by id api/items/:ItemId
//@desc get a specific item
//@access Public
router.get('/:itemId', (req, res) => {
    const id = req.params.itemId;
     Item.findById({_id:id}) 
     .select('name price _id')
     .exec()
     .then(doc => {
         console.log('From Database :', doc);
         if (doc) {
            res.status(200).json({
                item: doc,
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/api/items' + doc._id
                }
            });
         } else {
            res.status(404).json({error: 'ID INVALID'});
         }
         
     })
     .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err.message
        });
     });
})


//@route DELETE api/items/:id
//@desc delete a specific item
//@access Public
router.delete('/:itemId', (req, res) => {
    const id = req.params.itemId;
    Item.deleteOne({_id:id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Item deleted',
                request: {
                    type:'DELETE',
                    url: 'http://localhost:7000/api/items' + result._id,
                    body: { name: 'String', date: 'Number'}
                }
            });
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        })

});

module.exports = router;