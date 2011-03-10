basse.js
========

Boot
----
Few examples of the boot module:

    // Example with module/action
    BASSE.boot.register({module:"page", action:"index"}, function (params) {
      // ...
    });
    
    BASSE.boot.run({
      id:     ['module','action'],
      params: {module:"page", action:"index", locale:"es"}
    });
    
    // Example with just an id
    BASSE.boot.register({id:"homepage"}, function (params) {
      // ...
    });
    
    BASSE.boot.run({
      id:     ['id'],
      params: {id:"homepage", module:"page", action:"index", locale:"es"}
    });