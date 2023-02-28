// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//         console.log(data);
//     })
//     .catch(function(error) {
//         // handle errors
//     });


// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// fetch('https://api.github.com/users/GetToHubing')
//     .then(response => console.log(response.json()))
//     .catch(error => console.error(error));

let x;
fetch('https://api.github.com/search/commits?q=author:gettohubing+sort:commiter-date-desc&per_page=100')
    .then(response => response.json())
    .then(data => console.log(data.items[data.items.length-1].commit.committer.date))
    .catch(error => console.error(error));

// fetch('https://api.github.com/users')
//     .then(response => console.log(response.json()));