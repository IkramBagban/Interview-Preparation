const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
      country: "USA"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      country: "Canada"
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      age: 35,
      country: "UK"
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      age: 28,
      country: "Australia"
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Williams",
      age: 30,
      country: "USA"
    },
    {
      id: 6,
      firstName: "Sarah",
      lastName: "Taylor",
      age: 25,
      country: "Canada"
    },
    {
      id: 7,
      firstName: "James",
      lastName: "Wilson",
      age: 35,
      country: "UK"
    },
    {
      id: 8,
      firstName: "Emma",
      lastName: "Jones",
      age: 28,
      country: "Australia"
    },
    {
      id: 9,
      firstName: "Ryan",
      lastName: "Martinez",
      age: 30,
      country: "USA"
    },
    {
      id: 10,
      firstName: "Olivia",
      lastName: "Garcia",
      age: 25,
      country: "Canada"
    }
  ];
  

//   Count the Number of Users by Age
// ex : {25: 3, 28: 2, 30: 3, 35: 2}
const countUserAges = users.reduce((ageCount, user) => {
    let userAge = user.age;
    
    if (ageCount[userAge]) {
        ageCount[userAge] += 1;
    } else {
        ageCount[userAge] = 1;
    }

    return ageCount;
}, {});

console.log(countUserAges);

// write the the array of first name whose age is greater than or equal to 30
// ['John', 'Michael', 'David', 'James', 'Ryan']
const firstNameArr = users.reduce((arr, currObj) => {
    if(currObj.age >= 30){
        arr.push(currObj.firstName)
    }

    return arr;
}, [])

firstNameArr

  