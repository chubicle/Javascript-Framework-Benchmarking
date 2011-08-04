function tabFactory(num){
    var i,
        items=[];

    for(i=0; i<num; i++){
        items.push({
            title : 'Tab'+i,
            html : "<p>"+i+"Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>"
        });
    }

    return items;
}

TabCreator = {
    create : function() {
        this.item = Ext.create('Ext.tab.Panel', {
            width: 400,
            height: 400,
            renderTo: document.body,
            items: tabFactory(NUM_TABS),
            activeTab : 0
        });
    },

    destroy : function() {
        this.item.destroy();
    }
}

Ext.onReady(function(){
    Tester.startTest(NUM_REP);
    alert("Creation and destruction of "+NUM_TABS+" tabs "+ NUM_REP+" times took aprx "+Tester.avengeResult());
});