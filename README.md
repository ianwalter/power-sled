# @ianwalter/power-sled
> A JavaScript micro-library for adding slide-down menu functionality to
> elements

[![npm page][npmImage]][npmUrl]

# Installation

```console
yarn add @ianwalter/power-sled
```

## Usage

**Vanilla JavaScript example:**

```js
import PowerSled from '@ianwalter/power-sled'
const sled = new PowerSled(document.myMenuLink, document.myMenu)

// Add an event listener on the body that calls the toggle method. power-sled
// will figure out if it needs to open, close, or do nothing with the menu when
// called.
document.body.addEventListener('click', sled.toggle())
```

**Vue.js example:**

```js
import PowerSled from '@ianwalter/power-sled'

let sled

export default {
  mounted () {
    sled = new PowerSled(this.$refs.menuLink, this.$refs.menu)
    document.body.addEventListener('click', sled.toggle())
  },
  destroyed () {
    document.body.removeEventListener('click', sled.toggle())
  }
}
```

## Related

* [`@ianwalter/sled`][sledUrl] - A JavaScript micro-library for animating an
  element's height to create a slide effect

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/power-sled.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/power-sled
[sledUrl]: https://github.com/ianwalter/sled
[licenseUrl]: https://github.com/ianwalter/power-sled/blob/master/LICENSE

