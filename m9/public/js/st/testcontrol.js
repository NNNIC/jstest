// -- test control
var testcontrol = function() {
    this.counter = 0;
};
testcontrol.prototype = new stateman();
testcontrol.prototype.s_start = function(first) {
    if (first) {
        console.log("s_start fitst");
        this.counter = 0;
        this.setnext(this.s_0001);
    }
    console.log("s_start update : " + this.counter +" - " + + Date.now());

    if (this.counter++ >= 30) {
        this.setnowait();
        this.gonext();
    }
};
testcontrol.prototype.s_0001 = function(first) {
    if (first) {
        console.log("s_0001 first " + Date.now());
        this.counter = 0;
        this.setnext(this.s_end);
    }
    console.log("s_0001 update : " + this.counter);
    if (this.counter++ >= 30) {
        if (this.hasnext())
        {
            this.gonext();
        }
    }
};
testcontrol.prototype.s_end = function(first) {
    if (first) {
        this.setoutofdate();
        console.log("s_end");
    }    
};
