const GITHUB_API = "https://api.github.com/users/shata1729"

const user = fetch(GITHUB_API)

console.log(user)

user.then(data => {
    console.log(data.body)
})

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.