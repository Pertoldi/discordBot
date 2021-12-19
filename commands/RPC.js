import { Command } from "./command.js"

export class RockPaperCisors extends Command {

	static match(msg) {
		const cmd = msg.content.split(' ')[0]
		return (cmd === '!rock' || cmd === '!paper' || cmd === '!cisors')
	}

	static action(msg) {
		const response = Math.floor(Math.random() * 3)
		switch (response) {
			case 0:
				msg.reply('I play Rock !')
				break;
			case 1:
				msg.reply('I play Paper !')
				break;
			case 2:
				msg.reply('I play Cisors !')
				break;
		}

		let msgAtNumber = 0
		switch (msg.content) {
			case '!paper':
				msgAtNumber = 1
				break;
			case '!cisors':
				msgAtNumber = 2
				break;
		}

		console.log('msg is :', msg)
		console.log('msgAtNumber is :', msgAtNumber)
		console.log('response is :', response)


		if ((response - 1) % 3 === msgAtNumber) {
			msg.reply('You lose !')
		} else if (response === msgAtNumber) {
			msg.reply('No one won !')
		} else {
			msg.reply('You Won !')
		}
	}
} 