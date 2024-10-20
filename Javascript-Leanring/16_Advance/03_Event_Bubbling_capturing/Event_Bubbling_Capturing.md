#Event Bubbling
In this, the click is goes(triggerd) from bottom to top.
By passing false it is set to Event Bubbling.
By default, the triggers are set to perform event bubbling.

Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element(i.e, global window object).

#Event Capturing
And we can stop this behaviour by passing third parameter in addEventListener "true" which means event capturing mode is on.

Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost target DOM element.

NOTE: When there is multiple true false are passed as paramters then firstly event capturing will be performed and then evevnt bublling will take place.

We can stop this behaviour, cause this is very expensive with the help of passing e as argument in callback function.
e.stopPropagation()
