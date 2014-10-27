var lib = function () {

  var privateMethod = function (what) { 
    console.log("bowl of "+what);
  };
  
  return {
    bowl10: function () {
      privateMethod("nuts");
    },
    bowl11: function () {
      privateMethod("dreams");
    },
    bowl12: function () {
      privateMethod("bowls");
    }
  };

};

module.exports=lib;