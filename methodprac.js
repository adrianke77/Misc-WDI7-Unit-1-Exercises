var total = {
  max : 10,
  value : 0,
  cropToMax: function (val, context) {
    if (val > context.max) return context.max
    return val
  },
  add : function (val) {
    context = this
    this.value = this.cropToMax( this.value + val, context)
  },  
  subtract: function (val) {
    context = this
    this.value = this.cropToMax( this.value - val, context)
  },
}

total.add(9000)
console.log(total.value)
total.subtract(2)
console.log(total.value)