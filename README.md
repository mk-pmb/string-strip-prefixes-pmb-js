
<!--#echo json="package.json" key="name" underline="=" -->
string-strip-prefixes-pmb
=========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Given a list of potential prefixes and a string, strip all of the former from
the latter.
<!--/#echo -->



API
---

This module exports one function:

### stripPrefixes([prefixes,][ opt,] input)

`prefixes` is a optional array of strings that shall be removed.
`input` is the string from which the prefixes shall be removed.
`opt` is an optional options object that supports these optional keys:

* `prefixes`: Array of string prefixes that shall be removed.
  Will be merged with the `prefixes` parameter if both are given.
* `ignoreCase`: Whether to ignore letter case. Default: `false`





Usage
-----

see [test/usage.mjs](test/usage.mjs).
from [test/usage.mjs](test/usage.mjs):
:TODO:

<!--!#include file="test/usage.mjs" transform="mjsUsageDemo1802" -->
<!--!#include file="test/usage.mjs" outdent="  " code="javascript"
  start="  // #BEGIN# usage demo" stop="  // #ENDOF# usage demo" -->
```javascript
var string-strip-prefixes-pmb = require('string-strip-prefixes-pmb');
D.result  = string-strip-prefixes-pmb(null);
D.expect('===',           null);
```
<!--/include-->

```bash
$ string-strip-prefixes-pmb foo
bar
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
