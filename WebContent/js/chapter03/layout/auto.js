Ext.require(['*']);

Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: 'Panel 1',
		height: 60,
		width: 100
	});

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: 'Panel 2',
		height: 80,
		width: 60
	});

	var panel3 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 3',
		html: 'Panel 3',
		height: 65,
		width: 100
	});

	var panel4 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 4',
		html: 'Panel 4',
		height: 70,
		width: '90%'
	});

	var auto = Ext.create('Ext.window.Window', {
		title: 'Auto Layout',
		width: 100,
		height: 320,
		layout:'auto',
		defaults: {
			bodyStyle: 'padding:15px'
	    },
		items: [panel1, panel2, panel3, panel4]
	});
	auto.show();
});