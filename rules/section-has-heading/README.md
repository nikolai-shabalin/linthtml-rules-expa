# expa/section-has-heading

The rule checks if `<section>` has any h1-h6 level header. The rule accepts `true` or `false` values

## true
`<section>` has a child header of any h1-h6 level.

The following patterns are considered problematic:
```html
<section>
  ...
</section>
```

The following patterns are **not** considered problems:
```html
 <section>
  <h2>title</h2>
</section>

 <section>
   <div>
      <h2>title</h2>
   </div>
</section>
```

The nesting of the header(h1-h6) can be any.
