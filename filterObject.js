const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]

// Write your code below
const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email)
console.log(finalResult)
