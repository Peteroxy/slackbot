const { App } = require("@slack/bolt");

require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecrete: process.env.SIGN_IN_SECRETE,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command('/hello', async ({ command, ack, say }) => {
  await ack();
  await say(`Hello <@${command.user_id}>`)
});

app.command('/say_name', async ({ command, ack, say }) => {
  await ack();

  const name = command.text;

  await say(`Your name is ${name}`)

});

app.command('/add_numbers', async ({ command, ack, say }) => {
  await ack();

  const numbers = command.text.split(' ');
  const sum = numbers.reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);

  await say(`the sum is ${sum}`)

});


app.command('/random_quote', async ({ command, ack, say }) => {
  await ack();

  const quotes = await fetch("https://type.fit/api/quotes");
  const response = await quotes.json();
  const randomIndex = Math.floor(Math.random() * response.length);
  const randomQuote = response[randomIndex];
  const randomQuoteAuthor = randomQuote.author.replace(/, type\.fit/g, '');
  await say(`"${randomQuote.text}"-${randomQuoteAuthor}`);

})

const PORT = process.env.PORT || 3000;

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log(`App started on ${PORT}`)
})();



// const { App, SocketModeReceiver } = require("@slack/bolt");
// const fetch = require("node-fetch");

// require('dotenv').config();

// const socketModeReceiver = new SocketModeReceiver({
//   appToken: process.env.SLACK_APP_TOKEN,
//   logLevel: 'debug'
// });

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

// // Function to handle /start_repetitive_process command
// const startRepetitiveProcess = async ({ ack, say }) => {
//   await ack();
//   say('Starting repetitive process...');

//   // Start running the commands sequentially
//   await runCommandsSequentially();
// };

// // Function to run the commands sequentially
// const runCommandsSequentially = async ({ ack}) => {
//   await ack();
//   for (const { function: handler, command } of commandHandlers) {
//     await handler({ say: sendResponse, command });
//   }
// };

// // Function to send response
// const sendResponse = async ({ ack, say, message }) => {
//   await ack();
//   await say(message);
// };

// // Function to handle /hello command
// const helloCommandHandler = async ({ ack, say }) => {
//   await ack();
//   await say('Please provide your response to the hello command.');
// };

// // Function to handle /say_name command
// const sayNameCommandHandler = async ({ ack, say }) => {
//   await ack();
//   await say('Please provide your name.');
// };

// // Function to handle /add_numbers command
// const addNumbersCommandHandler = async ({ ack, say }) => {
//   await ack();
//   await say('Please provide numbers separated by spaces.');
// };

// // Function to handle /random_quote command
// const randomQuoteCommandHandler = async ({ ack, say }) => {
//   await ack();
//   await say('Press any key to receive a random quote.');
// };

// // Array of command handlers to run repetitively
// const commandHandlers = [
//   { function: helloCommandHandler, command: '/hello' },
//   { function: sayNameCommandHandler, command: '/say_name' },
//   { function: addNumbersCommandHandler, command: '/add_numbers' },
//   { function: randomQuoteCommandHandler, command: '/random_quote' }
// ];

// // Command listener for /start_repetitive_process
// app.command('/start_repetitive_process', startRepetitiveProcess);

// const PORT = process.env.PORT || 3000;

// (async () => {
//   await app.start(PORT);
//   console.log(`App started on ${PORT}`);
// })();


// const { App, SocketModeReceiver } = require("@slack/bolt");
// const fetch = require("node-fetch");

// require('dotenv').config();

// const socketModeReceiver = new SocketModeReceiver({
//   appToken: process.env.SLACK_APP_TOKEN,
//   logLevel: 'debug'
// });

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

// // Function to handle /start_repetitive_process command
// const startRepetitiveProcess = async ({ ack, say }) => {
//   await ack();
//   say('Starting repetitive process...');

//   // Start running the commands sequentially
//   await runCommandsSequentially();
// };

// // Function to run the commands sequentially
// const runCommandsSequentially = async () => {
//   for (const { function: handler, command } of commandHandlers) {
//     await handler();
//   }
// };

// // Function to handle /hello command
// const helloCommandHandler = async () => {
//   await app.client.chat.postMessage({
//     channel: 'C06RNGD0Q77', // Replace with the channel ID where you want to send the message
//     text: 'Please provide your response to the hello command.'
//   });
// };

// // Function to handle /say_name command
// const sayNameCommandHandler = async () => {
//   await app.client.chat.postMessage({
//     channel: 'C06RNGD0Q77', // Replace with the channel ID where you want to send the message
//     text: 'Please provide your name.'
//   });
// };

// // Function to handle /add_numbers command
// const addNumbersCommandHandler = async () => {
//   await app.client.chat.postMessage({
//     channel: 'C06RNGD0Q77', // Replace with the channel ID where you want to send the message
//     text: 'Please provide numbers separated by spaces.'
//   });
// };

// // Function to handle /random_quote command
// const randomQuoteCommandHandler = async () => {
//   await app.client.chat.postMessage({
//     channel: 'C06RNGD0Q77', // Replace with the channel ID where you want to send the message
//     text: 'Press any key to receive a random quote.'
//   });
// };

// // Array of command handlers to run repetitively
// const commandHandlers = [
//   { function: helloCommandHandler },
//   { function: sayNameCommandHandler },
//   { function: addNumbersCommandHandler },
//   { function: randomQuoteCommandHandler }
// ];

// // Command listener for /start_repetitive_process
// app.command('/start_repetitive_process', startRepetitiveProcess);

// const PORT = process.env.PORT || 3000;

// (async () => {
//   await app.start(PORT);
//   console.log(`App started on ${PORT}`);
// })();


// const { App, SocketModeReceiver } = require("@slack/bolt");
// const fetch = require("node-fetch");

// require('dotenv').config();

// const socketModeReceiver = new SocketModeReceiver({
//   appToken: process.env.SLACK_APP_TOKEN,
//   logLevel: 'debug'
// });

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

// // Array of command handlers to run sequentially
// const commandHandlers = [
//   { command: '/hello', prompt: 'Please provide your response to the hello command.' },
//   { command: '/say_name', prompt: 'Please provide your name.' },
//   { command: '/add_numbers', prompt: 'Please provide numbers separated by spaces.' },
//   { command: '/random_quote', prompt: 'Press any key to receive a random quote.' }
// ];

// // Function to handle /start_repetitive_process command
// const startRepetitiveProcess = async ({ ack, say }) => {
//   await ack();
//   say('Starting repetitive process...');
  
//   // Start running the commands sequentially
//   await runCommandsSequentially({ say });
// };

// // Function to run the commands sequentially
// const runCommandsSequentially = async ({ say }, index = 0) => {
//   if (index >= commandHandlers.length) return; // Exit condition
  
//   const { command, prompt } = commandHandlers[index];
  
//   await say(prompt);
  
//   // Wait for user's response before proceeding to the next command
//   const userResponse = await waitForUserResponse({ say, command });
//   console.log(`User response to ${command}: ${userResponse}`);
  
//   // Proceed to the next command
//   await runCommandsSequentially({ say }, index + 1);
// };

// // Function to wait for user's response to a command
// const waitForUserResponse = async ({ say, command }) => {
//   return new Promise((resolve) => {
//     const handleResponse = async ({ message }) => {
//       if (message && message.text && message.text.startsWith(command)) {
//         // Remove the event listener
//         app.message(command, handleResponse);
//         // Resolve the promise with the received message text
//         resolve(message.text);
//       }
//     };

//     // Listen for user's messages for the current command
//     app.message(command, handleResponse);
//   });
// };

// // Command listener for /start_repetitive_process
// app.command('/start_repetitive_process', startRepetitiveProcess);

// const PORT = process.env.PORT || 3000;

// (async () => {
//   await app.start(PORT);
//   console.log(`App started on ${PORT}`);
// })();


// const { App, SocketModeReceiver } = require("@slack/bolt");
// const fetch = require("node-fetch");

// require('dotenv').config();

// const socketModeReceiver = new SocketModeReceiver({
//   appToken: process.env.SLACK_APP_TOKEN,
//   logLevel: 'debug'
// });

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN
// });

// // Array of question handlers to run sequentially
// const questionHandlers = [
//   { question: 'Please provide your response to the hello command.', responseKey: 'helloResponse' },
//   { question: 'Please provide your name.', responseKey: 'nameResponse' },
//   { question: 'Please provide numbers separated by spaces.', responseKey: 'numbersResponse' },
// ];

// // Function to handle /start_questionnaire command
// const startQuestionnaire = async ({ ack, say }) => {
//   await ack();
//   say('Starting questionnaire...');
  
//   // Start running the questions sequentially
//   await runQuestionsSequentially({ say });
// };

// // Function to run the questions sequentially
// const runQuestionsSequentially = async ({ say }, index = 0, responses = {}) => {
//   if (index >= questionHandlers.length) {
//     // All questions answered, send responses to the channel
//     await sendResponsesToChannel({ say }, responses);
//     return; // Exit condition
//   }
  
//   const { question, responseKey } = questionHandlers[index];
  
//   await say(question);
  
//   // Wait for user's response before proceeding to the next question
//   const userResponse = await waitForUserResponse({ say });
//   console.log(`User response: ${userResponse}`);
  
//   // Store the response in the responses object
//   responses[responseKey] = userResponse;
  
//   // Proceed to the next question
//   await runQuestionsSequentially({ say }, index + 1, responses);
// };

// // Function to wait for user's response
// const waitForUserResponse = async ({ say }) => {
//   return new Promise((resolve) => {
//     const handleResponse = async ({ message }) => {
//       // Remove the event listener
//       app.message('message', handleResponse);
//       // Resolve the promise with the received message text
//       resolve(message.text);
//     };

//     // Listen for user's messages
//     app.message('message', handleResponse);
//   });
// };

// // Function to send responses to the channel
// const sendResponsesToChannel = async ({ say }, responses) => {
//   const responseText = Object.entries(responses)
//     .map(([key, value]) => `${key}: ${value}`)
//     .join('\n');

//   await say(`Responses:\n${responseText}`);
// };

// // Command listener for /start_questionnaire
// app.command('/start_questionnaire', startQuestionnaire);

// const PORT = process.env.PORT || 3000;

// (async () => {
//   await app.start(PORT);
//   console.log(`App started on ${PORT}`);
// })();