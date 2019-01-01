/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

var catsTalks = 'Mur-myau';

const man = {
    species: 'human',
    legs: '2',
    hands: '2',
    name: 'Adam',
    gender: 'male',
    says: 'This apple wasn\'t even tasty!'
}

const woman = {
    species: 'human',
    legs: '2',
    hands: '2',
    name: 'Eve',
    gender: 'female',
    says: 'Where is your brother?'
}

const dog = {
    species: 'dog',
    legs: '4',
    hands: '0',
    name: 'Snoop',
    gender: 'male',
    says: 'Woof-woouu'
}

const cat = {
    species: 'cat',
    legs: '4',
    hands: '0',
    name: 'Smelly',
    gender: 'male',
    says: catsTalks
}

const catWoman = {
    species: 'wonderWoman',
    legs: '2',
    hands: '2',
    name: 'Alishia',
    gender: 'female',
    says: catsTalks
}

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

print(man.species + ';' + man.legs + ';' + man.hands + ';' + man.name + ';' + man.gender + ';' + man.says);
print(woman.species + ';' + woman.legs + ';' + woman.hands + ';' + woman.name + ';' + woman.gender + ';' + woman.says);
print(dog.species + ';' + dog.legs + ';' + dog.hands + ';' + dog.name + ';' + dog.gender + ';' + dog.says);
print(cat.species + ';' + cat.legs + ';' + cat.hands + ';' + cat.name + ';' + cat.gender + ';' + cat.says);
print(catWoman.species + ';' + catWoman.legs + ';' + catWoman.hands + ';' + catWoman.name + ';' + catWoman.gender + ';' + catWoman.says);