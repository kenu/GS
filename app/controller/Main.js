Ext.define('GS.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'blog list' : {
            	itemtap: 'showPost'
            }
        }
    },
    
    showPost: function(list, index, target, record, e, eOpts) {
    	console.log(record.get('title'));
    }
    
});











