// -- application
var sm = new testcontrol();
sm.goto(sm.s_start);

var element = document.getElementById('hoge');
var counter = 0;
function step() {
    if (sm.update!=null) sm.update();
  element.innerHTML = counter++;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

//
