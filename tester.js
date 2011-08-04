var NUM_TABS = 20,
    NUM_REP = 10;

Tester = {

    startTime : function(){
        var me = this;
        me.start = new Date();
        me.start = me.start.getTime();
    },

    endTime : function(){
        var me = this;
        me.end = new Date();
        me.end = me.end.getTime();
    },

    execTime : function(){
        var me = this;
        if(typeof me.end == 'undefined')
            me.endTime();

        return me.end-me.start;
    },

    startTest : function(cycles){
        var i,t,
            me = this;
        me.avengeTime = 0;

        for(t = 0; t < 10; t++) {

            me.startTime();

            for (i = 0; i < cycles; i++) {
                TabCreator.create();
                TabCreator.destroy();
            }
//            TabCreator.create();
            me.endTime();

            me.avengeTime +=  me.execTime();
        }
    },

    avengeResult : function(){
        return this.avengeTime/10;
    }
}