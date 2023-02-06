({
     changeMessage : function(component, event, helper) {
        var params = event.getParams();
        if(params){
            component.set("v.message", params.message);
        }
    }
})
