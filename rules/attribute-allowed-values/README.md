# expa/attribute-allowed-values
Checks attributes for valid values. Enumerated string values are matched case-insensitive.


```js
{
  'expa/attribute-allowed-values': [true,
    {
      "input": {
        "attributes": {
          "type": {
            "enum": ["text", "email"]
          }
        }
      }
    }
  ]
}
```

The following templates are considered problematic:

```html 
<input type="foobar"> 
```

The following templates are **not** considered problematic:

```html 
<input type="text">
```
