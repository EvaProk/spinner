process.stdout.write('hello from spinner2.js... \rheyyy\n');

const array =['\r|   ','\r/   ', '\r-   ','\r\\   ', '\r|   ', '\r/   ', '\r-   ','\r\\   ','\r|   ', '  \n' ];

let i = 0; 
  for (const element of array) {
    setTimeout(() => {
      process.stdout.write(element);
    },i);
    i += 300;
  }