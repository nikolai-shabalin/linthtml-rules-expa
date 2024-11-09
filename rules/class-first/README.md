# expa/class-first

The rule checks the location of the `class` attribute of a tag. The rule takes the values `true` or `false`

## true The `class` attribute must be specified first.

The following patterns are considered problematic:
```html
<a href="" class="link"></a>
<input type="text" class="field">
<div data-attr="test" class="products"></div>
```

The following patterns are **not** considered problems:
```html
<a class="link" href=""></a>
<input class="field" type="text">
<div class="products" data-attr="test"></div>
```

