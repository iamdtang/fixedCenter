fixedCenter
===========

A simple jQuery plugin that positions an element directly in the center of the page. The element will always stay centered even when you resize the browser window.

### Example

```js
$('#div1').fixedCenter({
	close: function() {
		$(this).remove();
	}
});
```
