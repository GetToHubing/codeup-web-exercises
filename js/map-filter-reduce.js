// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//bonus: Use .reduce to get the unique list of languages from the list of users.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguageUsers = users.filter(function (n) {
    return n.languages.length >= 3;
});
console.log('#1');
console.log(threeLanguageUsers);

let usersEmails = users.map(function (n) {
    let x = [];
    x.push(n.email);
    return x;
});
console.log('#2');
console.log(usersEmails);

let totalYears = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0) / users.length;
console.log('#3');
console.log(totalYears);

//hopefully this is acceptable
const longestEmail = function (x) {
    let longestEmailLength = users.reduce((longest, userEmail) => {
        if (userEmail.email.length > longest.email.length) {
            return userEmail;
        } else {
            return longest;
        }
    });
    return longestEmailLength.email;
}
console.log('#4');
console.log(longestEmail(users));


let nameList = users.reduce((final, user) => {
    final = final.concat(user.name) +', ';
    return final;
}, '').slice(0,-2); //definitely not the best way to do it
console.log('#5');
console.log(nameList);


let uniquerList = function (x) {
    const uniqueList = x.reduce((list, user) => {
        list.push(...user.languages.filter(language => {
            return !list.includes(language);
        }))
        return list;
    },[]).join(', ');
    return uniqueList
}
console.log(uniquerList(users));