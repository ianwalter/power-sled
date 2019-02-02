import Sled from '@ianwalter/sled'

export default class PowerSled {
  constructor (triggerEl, menuEl, linkSelector = 'a') {
    this.triggerEl = triggerEl
    this.linkSelector = linkSelector
    this.sled = new Sled(menuEl)
  }

  toggle () {
    return ({ target }) => {
      const isTrigger = this.isOrHasParent(target, this.triggerEl)
      const isSled = this.isOrHasParent(target, this.sled.el)
      const matches = target.matches && target.matches(this.linkSelector)
      const msMatches = target.msMatchesSelector &&
                        target.msMatchesSelector(this.linkSelector)
      const isLink = isSled && (matches || msMatches)
      if ((!isSled || isLink) && (isTrigger || this.sled.isOpen)) {
        this.sled.toggle()
      }
    }
  }

  isOrHasParent (a, b) {
    let el = a
    while (el && el.nodeType === 1) {
      if (el === b) {
        return true
      }
      el = el.parentNode
    }

    return false
  }
}
