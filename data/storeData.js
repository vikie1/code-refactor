const fs = require('fs');

module.exports = {
    store
};

function store(data){
    fs.writeFile('./response.json', data, function (err) {
        if (err) {
          console.log('There has been an error saving your configuration data.');
          console.log(err.message);
          return;
        }
        console.log('Configuration saved successfully.')
    });
}