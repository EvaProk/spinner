process.stdout.write('hello from spinner2.js... \rheyyy\n');

const array =['\r|   ','\r/   ', '\r-   ','\r\\   ', '\r|   ', '\r/   ', '\r-   ','\r\\   ','\r|   ', '  \n' ];

let i = 0; 
  for (const element of array) {
    setTimeout(() => {
      process.stdout.write(element);
    },i);
    i += 300;
  }
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);
// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);