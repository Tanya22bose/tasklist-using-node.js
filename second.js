var http = require('http');
var url = require('url')

taskitems = [
    {
        id : 1,
        Title : 'Task 1',
        Deadline : 'Today'
    },
    {
        id : 2,
        Title : 'Task 2',
        Deadline : 'Tomorrow'
    },
    {
        id : 3,
        Title : 'Task 3',
        Deadline : 'yesterday'
    }
];


var server = http.createServer(function handleResponse(req, res){
      
    for(var i=0; i<taskitems.length; i++)
    {
        res.write(`<div>
                    <h1>${taskitems[i].Title}</h1>
                    <p>${taskitems[i].Deadline}</p>
                  </div>`);
    }

    res.end();
    
});

server.listen(8080);
