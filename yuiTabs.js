function tabFactory(num){
    var i,
        items=[];
    num = num || NUM_TABS;

    for(i=0; i<num; i++){
        items.push("<div id='tab-"+i+"'><p>"+i+"Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p></div>");
    }

    return items;
}

function tabMenu(num){
    var i,
        items=[];

    num = num || NUM_TABS;
    items.push('<ul>');
    for(i=0; i<num; i++){
        items.push("<li><a href='#tab-"+i+"'>Tab"+i+"</a></li>");
    }

    items.push("</ul>");

    return items;
}

TabCreator = {
    create : function() {
        var me = this
            me.target = Y.one("#tabsPlaceholder");

            var htmlPart = tabMenu();
            htmlPart.push(tabFactory().join(''));
            htmlPart = htmlPart.join('');
            me.target.append(htmlPart);
            me.tabObject = new Y.TabView({srcNode: '#tabsPlaceholder'});
    },

    destroy : function() {
        this.target.empty();
    }
}

$(document).ready(function(){
    Tester.startTest(NUM_REP);
    alert("Creation and destruction of "+NUM_TABS+" tabs "+ NUM_REP+" times took aprox "+Tester.avengeResult());
    TabCreator.create();
});

