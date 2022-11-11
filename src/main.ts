import * as dotenv from "dotenv";
import { DiscordClient } from "./discordclient/DiscordClient";

dotenv.config()

let discordClient = new DiscordClient();
if(process.env.DISCORD_TOKEN == null)
	throw new Error("Please set DISCORD_TOKEN environment variable.");
discordClient.Login(process.env.DISCORD_TOKEN);