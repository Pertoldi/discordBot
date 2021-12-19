export class Command {
	static parse(message) {
		if (this.match(message)) {
			this.action(message)
			return true
		} return false
	}

}