let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


<<<<<<< HEAD
const logCalc = () => { 
    const isString = typeof calculated 
    const calculatedAsNumber = !isString ? calculated : parseInt(calculated)
    calculated = calculatedAsNumber + 1
=======
const  logCalc = () => { 
    const isString = typeof calculated 
    const calculatedAsNumber = !isString ? calculated : parseInt(calculated)
    calculated = calculatedAsNumber + 1 
>>>>>>> aa43f2afe4ea16677b887aea6502b8754ef7906a
}

const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()