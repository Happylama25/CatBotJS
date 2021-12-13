const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('Starts the Minecraft Creative server!'),
	async execute(interaction) {
		await interaction.reply('The server is always turned on! The IP is: 73.49.109.86');
	},
};

// THE BASE START COMMAND TO USE FOR OTHER START COMMANDS
// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('start')
// 		.setDescription('Starts the Minecraft Creative server!'),
// 	async execute(interaction) {
// 		child('D:\\server-dont-delete-ffs\\creative_server\\start.bat', {shell: true, cwd: 'D:\\server-dont-delete-ffs\\creative_server'});
// 		child.unref
// 		await interaction.reply('Starting!');
// 	},
// };