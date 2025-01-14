// Problem #1 // 
function getYearlySubscribers(users){
    return users.filter(user => user.subscription.type === 'Yearly');
}

// Problem #2 //
//this is a nested array, use a for loop to nest through the nested array
function getTheaterGoers(users) {
    return users.filter(user => {
        //return true if the curent user has a movie marked theater in watched array
        for (let i = 0; i < user.watched.length; i++){
            if (user.watched[i].platform === "Theater"){
                return true;
            }
        }
    });
}


// Problem #3 // 
function mapUsers(array) {
    return array.map(user => {
      const subscriptionType = user.subscription.type.toLowerCase();
      const subscriptionCost = user.subscription.cost;
      return `${user.name} has a ${subscriptionType} subscription that costs ${subscriptionCost}.`;
    });
  }
  
    
// Problem #4 //
function getObjects(users){
    return users.map((user) => { 
        return { 
        user: user.name, 
        location: `${user.location.city} , ${user.location.state}`, 
        watchedFilms: user.watched.length, 
        filmsInQueue: user.queue.length,
    }
    });
}
// Problem #5 //
function getInfoByCity(array, city, output = [], index = 0) {
    // Base case: Stop recursion if index is out of bounds
    if (index >= array.length) {
      return output;
    }
  
    const user = array[index];
    // Check if the user is in the specified city
    if (user.city && user.city.toLowerCase() === city.toLowerCase()) {
      output.push(`${user.name} - ${user.email}`);
    }
  
    // Recurse with the next index
    return getInfoByCity(array, city, output, index + 1);
  }
  

// Problem #6 //
function getYearlyCost(array) {
    // Use reduce to iterate over the array and build an object
    return array.reduce((acc, user) => {
    // Determine the yearly cost based on subscription type
let yearlyCost;

// Check the subscription type
if (user.subscription.type.toLowerCase() === 'yearly') {
  // If the subscription is yearly, use the cost as is
  yearlyCost = user.subscription.cost;
} else {
  // If the subscription is monthly, multiply the cost by 12
  yearlyCost = user.subscription.cost * 12;
}

      
      // Add a new property to the accumulator object
      // Key is the user's name, value is the calculated yearly cost
      acc[user.name] = yearlyCost;
  
      // Return the updated accumulator for the next iteration
      return acc;
    }, {}); // Start with an empty object as the initial value
  }
  


