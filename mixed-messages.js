// Define the different 
const frontEnd = ['We should', 'You should', 'I\'m going to', 'We\'re going to', 'I ought to', 'We ought to', 'Let\'s'];
const activity = ['hiking', 'for a hike', 'swimming', 'biking', 'running', 'out', 'outside', 'touch grass', 'skydiving', 'rock climbing', 'fishing', 'kyaking', 'to the arcade', 'for a walk', 'skating', 'to the park'];
const backEnd = ['today', 'tomorrow', 'soon', 'more often', 'regularly', 'more regularly', 'every day', 'every week'];

const randIndex = arr => Math.floor(Math.random() * arr.length);

console.log(frontEnd[randIndex] + ' ' + activity[randIndex] + ' ' + backEnd[randIndex] + '!');