# expa/req-tags-presence

If set, the specified tags must be on the page. If the tags are missing, the rule is considered broken.

## true
Any tags can be passed into the array. If at least one of them is missing, the rule is considered broken.

```json
{
  "expa/req-tags-presence": [true, ["h1", "main"]]
}
```

The following models are considered violations:

Cause without tag `<h1>` and `<main>`.

```html
<body>
  <div></div>
  <div></div>
  <div></div>
</body>
```

Because without the `<h1>` tag.

```html
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
```

The following patterns are **not** considered problems:

```html
<body>
  <main>
    <h1></h1>
  </main>
</body>
```
