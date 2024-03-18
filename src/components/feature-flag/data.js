// Replicate a JSON API response
const dummyAPIResponse = {
  showLightAndDarkMode : true,
  showTicTacToeBoard : true,
  showRandomColor : true,
  showAccordian : true,
  showTreeView : true
}

const featureFlagsDataServiceCall = () => {

  // A promise is provided a function that has 2 arguments
  // resolve, reject
  // perform an async operation, like a fetch, and at the end check if
  // the data is truthy or falsy, execute resolve or reject accordingly
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) {
      setTimeout(resolve(dummyAPIResponse), 500)
    } else {
      reject("Something went wrong, please try again")
    }
  })
}


export default featureFlagsDataServiceCall;