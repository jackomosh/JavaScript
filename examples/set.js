// An empty object in a variable named street

const street = {}

console.log(street.name) // value is empty thus undefined

street.name = "Tom Mboya" // set the value of street

console.log(street.name) // value printed on the terminal

street.number = 175

const address = {
    country: "Kenya",
    city: "Kisumu",
}

address.postalCode = 100 // setting another property inside the address object

address.street = street // using a different variables value

address.street.type = "boulevard"

address.country = "Uganda"

console.log(address) //

const multipleof5 = []

multipleof5[0] = 5
multipleof5[1] = 10

console.log(multipleof5[1])


