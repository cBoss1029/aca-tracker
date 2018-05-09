let clients = require("../server/clients");

module.exports.list =  function list(request, response) {
return response.json(clients);
}
module.exports.show =  function show(request, response) {
return response.json({theId: request.params.id});
}
module.exports.create =  function create(request, response) {
    let lastClientId = clients.length;
    let newObj = {name: request.body, clientId: lastClientId, lat: "", long: "", location: ""};
    clients.push(newObj);
    return response.json(newObj);
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}