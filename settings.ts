import CodecksPlugin from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export interface MyPluginSettings {
	mySetting: string;
	codecksAPIKey: string;
	codecksFolderPath: string;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default',
	codecksAPIKey: '',
	codecksFolderPath: '',
}

export class CodecksSettingTab extends PluginSettingTab {
	plugin: CodecksPlugin;

	constructor(app: App, plugin: CodecksPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', { text: 'Codecks' });

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
		
		new Setting(containerEl)
		.setName('Codecks API Key')
		.setDesc('Find this on Codecks api website')
		.addText(text => text
			.setPlaceholder('Enter your API Key')
			.setValue(this.plugin.settings.codecksAPIKey)
			.onChange(async (value) => {
				this.plugin.settings.codecksAPIKey = value;
				await this.plugin.saveSettings();
			}));
			
		
		new Setting(containerEl)
		.setName('Codecks Folder Path')
		.setDesc('Choose local folder to put Codecks cards info')
		.addText(text => text
			.setPlaceholder('Choose a Folder')
			.setValue(this.plugin.settings.codecksFolderPath)
			.onChange(async (value) => {
				this.plugin.settings.codecksFolderPath = value;
				await this.plugin.saveSettings();
			}));
			
			
	}
}
