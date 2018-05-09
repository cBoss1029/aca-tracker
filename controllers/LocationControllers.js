let locations = require("../server/locations");
let clients = require("../server/clients");
let fetch = require("node-fetch");

module.exports.list =  function list(request, response) {
return response.json(locations);
}
module.exports.show =  function show(request, response) {
    return response.json({theId: request.params.id});

}
module.exports.create =  function create(request, response) {
    let lat = request.body.lat;
    let long = request.body.long;
    let id = request.body.id;

    let client = clients.find(c=>c.clientId == id);
    

    fetch('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long + '&zoom=18&addressdetails=1', 
{ 
  method: 'GET', 
  headers: {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
  }
})
.then(res => res.json())
.then(json => {
    client.lat = lat;
    client.long = long;
    client.location = json.address;
    return response.json(client);
});

}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}