module("Boot");

test("test with module/action parameters", function () {
  var test = {"run": false, "params": {}},
      oParams = {module:"page", action:"index", locale:"es"};

  BASSE.boot.register({module:"page", action:"index"}, function (params) {
    test.run    = true;
    test.params = params;
  });
  
  BASSE.boot.run({
    id:     ['module','action'],
    params: oParams
  });
  
  ok(test.run,                 "Module/action callback has run.");
  ok("module" in test.params,  "Should have 'module' property.");
  ok("action" in test.params,  "Should have 'action' property.");
  equals(test.params, oParams, "Should be the same object.");    
});

test("test with just an Id", function () {
  var test = {"run": false, "params": {}},
      oParams = {id:"homepage", module:"page", action:"index", locale:"es"};

  BASSE.boot.register({id:"homepage"}, function (params) {
    test.run    = true;
    test.params = params;
  });

  BASSE.boot.run({
    id:     ['id'],
    params: oParams
  });
  
  ok(test.run,                 "Id callback has run.");
  ok("id" in test.params,      "Should have 'id' property.");        
  equals(test.params, oParams, "Should be the same object.");
});