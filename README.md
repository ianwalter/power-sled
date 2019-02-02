# @ianwalter/power-sled
> A JavaScript micro-library for adding slide-down menu functionality to
> elements

# Installation

```console
npm install @ianwalter/power-sled --save
```

## Usage

**Vanilla JavaScript example:**

```js
import PowerSled from '@ianwalter/power-sled'
const sled = new PowerSled(document.myMenuLink, document.myMenu)

// Add a event listener to close the menu if the user clicks anywhere on the
// body while the menu is open.
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

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[licenseUrl]: https://github.com/ianwalter/power-sled/blob/master/LICENSE

