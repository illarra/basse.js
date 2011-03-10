basse.js
========

Boot
----
Let's you execute an init callback depending on an input object. Here is a little example how this should be used:

    <html>
      <head>
        <title>basse.js boot example</title>    
      </head>
      <body>
        <script>
        // This should change depending on the requested page. Note that you can
        // save this also JSON encoded in an html element attribute or put it safe
        // on your own namespace.
        var boot = {module:"page", action:"index", locale:"es"};
        
        BASSE.boot.register({module:"page", action:"index"}, function (params) {
          // In this example this callback will be executed
          // Note that the boot parameters are available with the "params" var.
        });        

        BASSE.boot.register({module:"page", action:"about"}, function (params) {
          // ...
        });
        
        // Onload handling with jQuery
        $(function () {
          // page/index initializer will be executed
          BASSE.boot.run({
            id:     ['module','action'],
            params: boot
          });
        });
        </script>
      </body>
    </html>
    
You can you any object as the Id for your callbacks. Here is an example with just an "id":
    
    // Example with just an id
    BASSE.boot.register({id:"homepage"}, function (params) {
      // ...
    });
    
    BASSE.boot.run({
      id:     ['id'],
      params: {id:"homepage", module:"page", action:"index", locale:"es"}
    });
    
The API methods:

    BASSE.boot.register(id, callback)
    id:       An object which will be used as an Id.
    callback: Callback to run when the Id is matched.
    
    BASSE.boot.run(id, params)
    id:       An array describing how Boot should match the registered callbacks.
    params:   Input parameters based on wich Boot will choose a callback.