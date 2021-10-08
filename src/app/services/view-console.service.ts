import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ViewConsoleService {

	public messages: { type: "info"|"warn"|"err", timestamp: Number | String, message: String }[] = [];

	constructor() { }

	log(message) {
		this.messages.unshift({ type: "info", timestamp: Date.now(), message });
	}

	warning(message) {
		this.messages.unshift({ type: "warn", timestamp: Date.now(), message });
	}

	error(message) {
		this.messages.unshift({ type: "err", timestamp: Date.now(), message });
	}
}
