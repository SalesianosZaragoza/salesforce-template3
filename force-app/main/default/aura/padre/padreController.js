({
    myAction : function(component, event, helper) {

    },
    llamarafuncionDelHijo : function(component, event, helper) {
        var findcomp = component.find('hijo');
        findcomp.funcionDelHijo("mensaje desde padre");
    }
  
})
