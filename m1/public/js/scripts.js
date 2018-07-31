
function stateman() {
    let curfunc  = null;
    let nextfunc = null;
    let candfunc = null;
    let bNoWait  = false;

    let goto=(func)=>{ 
        this.nextfunc = func;
    };

    let update=()=>{

        while(true) {
            let bNoWait = false;
            let bFirst = false;
            if (this.nextfunc!=null)
            {
                this.curfunc  = this.nextfunc;
                this.nextfunc = null;
                bFirst = true;
            }
            if (this.curfunc!=null)
            {
                this.curfunc(bFirst);
            }
            if (!this.bNoWait) break;
        }
    };

    let checkstate=(func)=>{
        return this.curfunc === func;
    };

    let setnext=(func)=>{
        this.candfunc = func;
    };

    let gonext=()=>{
        this.nextfunc = this.candfunc;
        this.candfunc = null;
    };

    let hasnextstate=()=>{
        return this.candfunc != null;
    };

    let nowait=()=>{
        this.bNoWait = true;
    };
};



var start = null;
var element = document.getElementById('hoge');
var counter = 0;
function step() {
    if (stateman.update!=null) stateman.update();

  element.innerHTML = counter++;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

//
