var eBowl=require("./ebowl");
var bowlLib=require("./bowlLib");
var returned=require("./returned");

function bowl1(what) {
    fullOf="";
    if (what!==undefined) fullOf=what;
    this.show=function show() {
        console.log("bowl1 of " + fullOf);
    }
}
//bowl1("fruit");   //this line doesn't seem to do anything - 
//bowl1.show();     //this line throws an exception. It appears only an instance of the function can call this
bowl1a=new bowl1("soup");
bowl1a.show();
bowl1b=new bowl1();
bowl1b.show();


var bowl2=function(what) {
    var fullOf=what;
    this.show=function() {
        console.log("bowl2 of "+fullOf);
    };
};
//bowl2("milk");
//bowl2.show();
bowl21=new bowl2("rice");
bowl21.show();


(function bowl3() {
    var fullOf = "salad";
    function show() {
        console.log("bowl3 of " + fullOf);
    }
    show();
})();


var bowl4 = { 
  fullOf: "Stuff",
  show: function() {
    console.log("bowl4 of "+this.fullOf);
  }
};
bowl4.show();

var bowl5=new eBowl("beans"); // from eBowl.js
bowl5.show();

var bowl6=new bowlLib.bowl6("water");  //from bowlLib.js
bowl6.show();

var bowl7=new bowlLib.bowl7("beer");   //from bowlLib.js
bowl7.show();

var ret=new returned();
ret.bowl10();
ret.bowl11();
ret.bowl12();


