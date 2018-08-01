
// -- state manager
var stateman = function() {
    this.curfunc = null;
}
stateman.prototype.update = function() {
    if (this.curfunc!=null) 
    {
        this.curfunc();
    }
}

// -- test control
var testcontrol = function() {}
testcontrol.prototype = new stateman();
testcontrol.prototype.s_start = function() {
    console.log("s_start");
}

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
