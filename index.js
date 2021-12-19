import { Client } from 'discord.js'
import dotenv from 'dotenv'
import { Google } from './commands/google.js'
import { RockPaperCisors } from './commands/RPC.js'

// Init dotenv
try {
	dotenv.config()
} catch (error) {
	throw new Error('Error with dotenv:', error)
}

const bot = new Client()

bot.on("ready", () => {
	console.log("testBot is ready!");
})


bot.on('message', (msg) => {
	if (msg.content === 'ping') {	//First test
		msg.reply('pong')				//rely to thez pinger
		msg.channel.send('pong')	//in general
	}
	// Google.parse(msg)					//Second test with a command organisation

	//To optimise schmilblick because otherwise at each message it will parse every command. now it stop at the first true
	let commands = Google.parse(msg)	||  RockPaperCisors.parse(msg)
})

bot.on('messageDelete', (msg) => {
	if (msg.content === '!delete') {
		msg.reply(`Message successfully deleted !`)
		console.log('TEST DELETE !');
	}
})

bot.on('guildMemberAdd', (member) => {
	channel.send(`Welcom on the channel ${member.displayName} !
		If you want you can play "rock paper cisors" with me.
		just type: !rock , !paper or !cisors in the chat.
	`)

})

bot.login(process.env.BOT_TOKEN);

// Pierre-papier-ciseaux
//  feuille