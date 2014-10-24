function bowl1(what) {
    //this.fullOf="";
    if (what!==undefined) this.fullOf=what;
    this.show=function show() {
        console.log("bowl1 of " + this.fullOf);
    }
}
//bowl1("fruit");
//bowl1.show();
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
bowl2("milk");
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
