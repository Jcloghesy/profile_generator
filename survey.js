const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? You can also use a nicknames.\n", (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing?\n", (answer) => {
    const activities = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      const musicPreference = answer;
      rl.question("Which is your favourite meal (eg: breakfast, etc.)?\n", (answer) => {
        const faveMeal = answer;
        rl.question("What's your favourite thing to eat?\n", (answer) => {
          const faveFood = answer;
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
            const faveSport = answer;
              rl.question("What is your superpower?\n", (answer) => {
                const superpower = answer;
                {console.log(`${name} loves listening to ${musicPreference} while ${activities}, devouring ${faveFood} for ${faveMeal}, prefers ${faveSport} over any other sport, and is amazing at ${superpower}.`)};
              rl.close();
            });
          });
        });
      });
    });
  });
});
