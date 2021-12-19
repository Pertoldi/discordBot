import { Command } from "./command.js"

export class Google extends Command {
	
	static match(msg) {
		const cmd = msg.content.split(' ')[0]
		return (cmd === '!google')
	}

	static action(msg) {
		const args = msg.content.split(' ')
		args.shift()
		msg.delete()
		msg.reply(`https://www.google.fr/search?q=${args.join('+')}`)
	}
} 