
function stateman() {
    this.curfunc  = null;
    this.nextfunc = null;
    this.candfunc = null;
    this.bNoWait  = false;

    this.goto=(func)=>{ 
        this.nextfunc = func;
    };

    this.update=()=>{

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

    this.checkstate=(func)=>{
        return this.curfunc === func;
    };

    this.setnext=(func)=>{
        this.candfunc = func;
    };

    this.gonext=()=>{
        this.nextfunc = this.candfunc;
        this.candfunc = null;
    };

    this.hasnextstate=()=>{
        return this.candfunc != null;
    };

    this.nowait=()=>{
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
