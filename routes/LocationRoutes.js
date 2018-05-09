let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/LocationControllers');


router.get('/locations', list); //Whole array
router.get('/locations/:id', show); // Single item
router.post('/locations', create);
router.put('/locations/:id', update);
router.delete('/locations/:id', remove);
module.exports =  router;