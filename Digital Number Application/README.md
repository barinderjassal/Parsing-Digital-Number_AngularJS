# Simple Angular 1.x Question

##How can you limit the scope on a directive and why would you do this?
Scope on a directive can be limited to just its own scope by setting the scope property in the directive definition object to either true or an empty object. 

###1. scope: true

Directive will inherit scope but will not have any dependency on the parent scope (i.e. controller in most cases).

###2. scope: {}
Directive will have its own scope and will not inherit scope from the parent. But some properties can be shared with the parent scope by using '@' string binding, '=' data binding and '&' method binding.
