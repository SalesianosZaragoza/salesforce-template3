({
     changeMessage : function(component, event, helper) {
        var params = event.getParam("arguments");
        console.log(params)
        if(params){
            console.log(params.message)
            component.set("v.message", params.message);
        }
    }
})
