# expa/no-class-in-container

The rule checks if the `class` attribute is present on child elements inside the specified container.

```json
{
  "expa/no-class-in-container": [true, {
    "containers": ["content", "wrapper"],
    "ignore": {
      "tags": ["h1", "h2"],
      "class": ["content__title", "content__text"]
    }
  }]
}
```

## true
If `true` is specified, then the `class` value of the container must be passed. Multiple classes can be passed to `containers`, then multiple containers will be checked.

```json
{
  "expa/no-class-in-container": [true, {
    "containers": ["content", "wysiwg"]
  }]
}
```

The following patterns are considered problematic:
```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```
Since there is a `class` on the child element `<h1>`.

The following patterns are **not** considered to be problems:
```html
<div class="content">
  <h1>title</h1>
</div>

<div class="wysiwg">
  <h1>title</h1>
  <p>text</p>
</div>
```

### ignore
`ignore` accepts tags and classes to ignore inside the container.

#### ignore.tags 
Ignores the specified tags inside the container.

```json
{
  "expa/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "tags": ["h1"]
    }
  }]
}
```

The following patterns are considered problematic:
```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
</div>
```

Since `<p>` has a `class` attribute.

The following patterns are **not** considered problems:

```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p>text</p>
</div>
```

#### ignore.classes
Ignores elements with the specified classes inside the container.
```json
{
  "expa/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "classes": [ "content__title", "content__text"]
    }
  }]
}
```

The following patterns are considered problematic:
```html
<div class="content">
  <h1 class="content__title">title</h1>
  <h2 class="content__subtitle">subtitle</h2>
  <p class="content__text">text</p>
</div>
```

Since there is a `content__subtitle`.

The following templates are **not** considered problems:

```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
  <svg width="20" height="20"></svg>
</div>
```
