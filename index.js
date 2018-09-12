import Sled from '@ianwalter/sled'

export default class PowerSled {
  constructor (triggerEl, menuEl) {
    this.triggerEl = triggerEl
    this.sled = new Sled(menuEl)
  }
}
