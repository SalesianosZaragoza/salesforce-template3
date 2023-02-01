({
    myAction : function(component, event, helper) {

    },
    callSon : function(component, event, helper) {
        var son = component.find("son");
        var msg = component.get("v.message");
        son.doSomething(msg);
    }
})
