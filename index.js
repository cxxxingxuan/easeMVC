function easeMVC(option) {
      this.$element= $(option.element)
      this.events = option.events
      this.bindEvents()
}

easeMVC.prototype.bindEvents = function () {
      for(let key in this.events){
            console.log(key)
            let parts = key.split(' ')
            let eventType = parts.shift()
            let selector = parts.join(' ')
            this.$element.on(eventType,selector,this.events[key])
      }
}
new easeMVC({
      element: '.module3',
      events: {
            'change  input':function (e) {
                  console.log('change3')
            },
            'click  button': function (e) {
                  console.log('click3')
            }
      }
})