const calculator = {
	add: (a, b) => { return a + b },
	multiply: (a, b) => { return a * b },
	internal: function() {
	  const added = this.add(this.internal.a, this.internal.b)
	  const multiplied = this.multiply(this.internal.a, this.internal.b)
	  this.internal.result = added + multiplied
	  return this
	}
  }
  
  const example1 = {
	internal: {
	  a: 2,
	  b: 4,
	  c: 8,
	},
	calculate: calculator.internal,
  }
  
  const example2 = {
	internal: {
	  a: 2,
	  b: 2,
	  c: 3,
	},
	calculate: calculator.internal,
  }
  
  example1.calculate()
  console.log(example1.internal.result)
  
  example2.calculate()
  console.log(example2.internal.result) 