
// -- state manager
var stateman = function() {
    this.curfunc  = null;
    this.nextfunc = null;
    this.candfunc = null;
};
stateman.prototype.update = function() {
    var first = false;
    if (this.nextfunc!=null) {
        this.curfunc  = this.nextfunc;
        this.nextfunc = null;
        first = true;
    }
    if (this.curfunc!=null) {
        this.curfunc(first);
    }
};
stateman.prototype.goto = function(st) {
    this.nextfunc = st;
};


// -- test control
var testcontrol = function() {
    this.counter = 0;
};
testcontrol.prototype = new stateman();
testcontrol.prototype.s_start = function(first) {
    if (first) {
        console.log("s_start fitst");
        this.counter = 0;
    }
    console.log("s_start update : " + this.counter);
    if (this.counter++ >= 30) {
        this.goto(this.s_0001);
    }
};
testcontrol.prototype.s_0001 = function(first) {
    if (first) {
        console.log("s_0001 first");
        this.counter = 0;
    }
    console.log("s_0001 update : " + this.counter);
    if (this.counter++ >= 30) {
        this.goto(this.s_end)
    }
};
testcontrol.prototype.s_end = function(first) {
    if (first) {
        console.log("s_end");
    }    
};

// -- application
var sm = new testcontrol();
sm.curfunc = sm.s_start;

var element = document.getElementById('hoge');
var counter = 0;
function step() {
    if (sm.update!=null) sm.update();
  element.innerHTML = counter++;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

//
