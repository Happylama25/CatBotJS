const fs = require('fs');

const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});


const activities_list = [
    "you in your sleep", 
    "the ELEVATED ONES",
    "#gaming", 
    "Happyllama25 melt",
	"you sleep",
	"over you",
	"your mom"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
	console.log('Ready!');
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 30000); // Runs this every 30 seconds.
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Oopsie woopsie! UwU we made a fucky wucky, the command did not work! ', ephemeral: true });
	}
});


client.login(token);


