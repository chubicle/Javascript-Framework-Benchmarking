Ext.onReady(function() {

    
    var configs = [{
        title: 'Panel',
        collapsible:false,
        width:488,
        html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat, metus vitae ultricies volutpat, enim purus tempor est, tempus tristique arcu ligula non est. Vivamus rutrum, elit nec malesuada feugiat, odio enim luctus leo, quis accumsan sapien risus a nisi. Quisque tellus ipsum, convallis non venenatis eget, dapibus et augue. Aenean varius varius velit ut consequat. In congue mauris eu nibh tempor semper. Phasellus eget ligula convallis sem ullamcorper commodo sed non tortor. Vestibulum bibendum scelerisque tortor, nec gravida orci porttitor sit amet. Nam pharetra eleifend iaculis. Sed diam urna, bibendum ut faucibus dignissim, imperdiet et enim. Nullam id urna eros. Sed gravida ligula risus, vel placerat tellus. Sed posuere est non eros feugiat nec venenatis lectus laoreet. Pellentesque nec libero mauris, malesuada rutrum massa. Vestibulum cursus nisl at dui hendrerit pellentesque. Curabitur eget nisl vel purus cursus porttitor. Aliquam turpis risus, semper ac sodales metus. '
    }];
    var element = Ext.getBody().createChild({cls: 'panel-container'});
    Ext.each(configs, function(config) {
				var panel = Ext.createWidget('panel', Ext.applyIf(config, {
							renderTo: element,
							bodyPadding: 7
						}));
				var panel2 = panel.cloneConfig();
				var panel3 = panel.cloneConfig();
			});


});