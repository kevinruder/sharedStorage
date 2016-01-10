/**
 * Created by Kevin on 10/01/2016.
 */
this.StorageRegisterController = RouteController.extend({
    template: "RegisterStorage",


    yieldTemplates: {
        /*YIELD_TEMPLATES*/
    },

    onBeforeAction: function() {
        this.next();
    },

    action: function() {
        if(this.isReady()) { this.render(); } else { this.render("loading"); }
        /*ACTION_FUNCTION*/
    },

    isReady: function() {


        var subs = [
        ];
        var ready = true;
        _.each(subs, function(sub) {
            if(!sub.ready())
                ready = false;
        });
        return ready;
    },

    data: function() {


        return {
            params: this.params || {}
        };
        /*DATA_FUNCTION*/
    },

    onAfterAction: function() {

    }
});