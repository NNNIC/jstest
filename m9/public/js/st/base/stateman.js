// -- state manager
var stateman = function() {
    this.outofdate = false;
    this.curfunc   = null;
    this.nextfunc  = null;
    this.candfunc  = null;
    this.nowait    = false;
};
stateman.prototype.setoutofdate = function() {
    this.outofdate = true;
};
stateman.prototype.update = function() {
    if (this.outofdate) return;
    while(true)
    {
        this.nowait = false;

        var first = false;
        if (this.nextfunc!=null) {
            this.curfunc  = this.nextfunc;
            this.nextfunc = null;
            first = true;
        }
        if (this.curfunc!=null) {
            this.curfunc(first);
        }

        if (!this.nowait) break;
    }
};
stateman.prototype.goto = function(st) {
    this.nextfunc = st;
};
stateman.prototype.setnext = function(st) {
    this.candfunc = st;
}
stateman.prototype.gonext = function() {
    this.nextfunc = this.candfunc;
    this.candfunc = null;
}
stateman.prototype.hasnext = function() {
    return this.candfunc!=null;
}
stateman.prototype.setnowait = function() {
    this.nowait = true;
}