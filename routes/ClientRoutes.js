let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ClientControllers');

router.get('/clients', list); //Whole array
router.get('/clients/:id', show); // Single item
router.post('/clients', create);
router.put('/clients/:id', update);
router.delete('/clients/:id', remove);
module.exports =  router;