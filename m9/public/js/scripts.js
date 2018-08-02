// -- statemachine array service
var smlist = [];
function sm_add(sm) {
  smlist.push(sm);
}
function sm_update() {
  // if outofdate == true , delete it
  for(var i = 0; i < smlist.length; i++) {
    var sm = smlist[i];
    if (sm.outofdate==true) {
      smlist.splice(i,1);
      break;
    }
  }
  for(var i = 0; i < smlist.length; i++) {
    var sm = smlist[i];
    if (sm.outofdate===false) {
      sm.update();
    }
  }
}

// -- application
var sm = new testcontrol();
sm.goto(sm.s_start);
sm_add(sm);

var element = document.getElementById('hoge');
var counter = 0;

function step() {
  sm_update();
  element.innerHTML = counter++;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
//
