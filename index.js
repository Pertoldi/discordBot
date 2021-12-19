import { Client } from 'discord.js'
import dotenv from 'dotenv'

// Init dotenv
try {
	dotenv.config()
} catch (error) {
	throw new Error('Error with dotenv:', error)
}

const bot = new Client()

bot.on("ready", () => {
	console.log("I'm ready!");
})

bot.login(process.env.BOT_TOKEN);
