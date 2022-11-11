import { EventHandler } from "./events/EventHandler";
import { Client, GatewayIntentBits } from "discord.js";

export class DiscordClient {

    public static GetSingleton(): DiscordClient {
        return DiscordClient.singleton;
    }

    private static singleton: DiscordClient;
    private eventHandler: EventHandler;
    private client: Client | undefined;

    constructor() {
        DiscordClient.singleton = this;
        this.eventHandler = new EventHandler();
    }

    public GetClient() : Client | undefined{
        return this.client;
    }

    public GetEventHandler(): EventHandler{
        return this.eventHandler;
    }

    public Login(token: string): void {
        this.client = new Client({intents : [GatewayIntentBits.Guilds]});
        this.client.login(token).then(() => {
            console.log("Launched successfuly")
        }).catch((err) => {
            console.log(err);
        });
    }
}