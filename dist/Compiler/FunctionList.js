"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionList = void 0;
/**
 * A List of Available Functions
 *
 * Functions that are displayed are available to be used for Compiler
 */
var FunctionList;
(function (FunctionList) {
    FunctionList["$addButton"] = "Adds a Button Interaction to Message Id;$addButton[newRow (yes/no); interactionId or URL; label; style (primary); disabled (yes/no); messageId (optional); channelId (optional)]";
    FunctionList["$addCmdReactions"] = "Add Reactions to Author Message;$addCmdReactions[...emoji]";
    FunctionList["$addField"] = "Adds a Field to an Embed;$addField[title; field value; inline (yes/no); embedIndex]";
    FunctionList["$addReactions"] = "Add Reactions to Message Id;$addReactions[messageId; channelId; ...emoji]";
    FunctionList["$addSelectMenuOption"] = "Adds an Option for Select Menu;$addSelectMenuOption[interactionId; label; return value; description; default (yes/no); emoji; messageId (optional); channelId (optional)]";
    FunctionList["$addTimestamp"] = "Adds a Timestamp to an Embed;$addTimestamp of $addTimestamp[ms; embedIndex]";
    FunctionList["$allMembersCount"] = "Returns the number of Members from Guilds";
    FunctionList["$author"] = "Sets an Author to an Embed; $author[text; imageURL (optional); embedIndex]";
    FunctionList["$authorAvatar"] = "Returns the Avatar of Author";
    FunctionList["$authorIcon"] = "Sets an Author Icon of an Embed;$authorIcon[imageURL]";
    FunctionList["$authorID"] = "Returns the User ID of Author";
    FunctionList["$botPing"] = "Returns the ping of Latency based from Message and Interaction";
    FunctionList["$channelID"] = "Returns the Channel ID of Channel";
    FunctionList["$channelTopic"] = "Returns the Topic of Channel Id;$channelTopic or $channelTopic[channelId]";
    FunctionList["$channelType"] = "Returns the Channel Type of Channel ID;$channelType or $channelType[channelId]";
    FunctionList["$checkCondition"] = "Returns a boolean if conditions are met;$checkCondition[value1==/!=/>/</>=/<=value2]";
    FunctionList["$color"] = "Sets the color of an Embed;$color[Color/Hex; embedIndex]";
    FunctionList["$description"] = "Sets the description of an Embed;$description[text]";
    FunctionList["$discriminator"] = "Returns the discriminator (#1234) of User Id;$discriminator or $discriminator[userId]";
    FunctionList["$divide"] = "Returns the division of supplied numbers;$divide[...numbers]";
    FunctionList["$embeddedURL"] = "Sets the Author URL of an Embed;$embeddedURL[url; embedIndex]";
    FunctionList["$ephemeral"] = "Identifies wether Interaction reply type is ephemeral";
    FunctionList["$footer"] = "Sets the footer of an Embed;$footer[text; iconURL (optional); embedIndex]";
    FunctionList["$footerIcon"] = "Sets the footer icon of an Embed;$footerIcon[iconURL; embedIndex]";
    FunctionList["$getInteractionValues"] = "Returns the values from Selected Options for Select Menu";
    FunctionList["$guildAvailable"] = "Whether the guild is available to access. If it is not available, it indicates a server outage";
    FunctionList["$guildID"] = "Returns the Guild Id of Guild";
    FunctionList["$httpAddHeader"] = "Sets / Adds a Header key to HeaderConfig;$httpAddHeader[headerName;value]";
    FunctionList["$httpDelete"] = "Request a DELETE method to URL;$httpDelete[url]";
    FunctionList["$httpGet"] = "Request a GET method to URL;$httpGet[url]";
    FunctionList["$httpPatch"] = "Request a PATCH method to URL;$httpPatch[url; data]";
    FunctionList["$httpPost"] = "Request a POST method to URL;$httpPost[url; data]";
    FunctionList["$httpRemoveHeader"] = "Removes a Header key from HeaderConfig;$httpRemoveHeader[headerName]";
    FunctionList["$httpResult"] = "Returns a result from HTTP methods;$httpResult or $httpResult[...keys]";
    FunctionList["$image"] = "Sets the Image of an Embed;$image[imageURL]";
    FunctionList["$interactionID"] = "Returns the Id of created interaction";
    FunctionList["$isInteractionType"] = "Returns the Type of Interaction";
    FunctionList["$isNaN"] = "Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number);$isNaN[number]";
    FunctionList["$isNSFW"] = "Returns a Boolean value that indicates whether is channel a NSFW;$isNSFW or $isNSFW[channelId]";
    FunctionList["$isNumber"] = "Returns a Boolean value that indicates whether a value is a number;$isNumber[number]";
    FunctionList["$isText"] = "Returns a Boolean value that indicates whether is channel a Text;$isText or $isText[channelId]";
    FunctionList["$membersCount"] = "Returns the amount of Members in Guild;$membersCount or $membersCount[guildId; presenceStatus; countBots]";
    FunctionList["$mentioned"] = "Returns the mentioned User Id of mention number;$mentioned[number]";
    FunctionList["$mentionedRoles"] = "Returns the mentioned Role Id of mention number;$mentionedRoles[number]";
    FunctionList["$mentionedChannels"] = "Returns the mentioned Channel Id of mention number;$mentionedChannels[number]";
    FunctionList["$message"] = "The message which calls the Command / is a part of Event;$message, $message[arg number] or $message[</>argNumber(-argNumber)</>]";
    FunctionList["$multi"] = "Returns the multiplications of supplied numbers;$multi[...numbers]";
    FunctionList["$newSelectMenu"] = "Creates a Select Menu for Components;$newSelectMenu[interactionId; minimum select of values (0-25); maximum select of values (1-25); placeholder; disabled (yes/no); messageId (optional); channelId (optional)]";
    FunctionList["$nickname"] = "Returns the Nickname of Member Id, can also set their Nickname if field 2 is non-empty;$nickname[memberId; newNickname (optional)]";
    FunctionList["$nomention"] = "Restricts any kind of mention in Response";
    FunctionList["$onlyIf"] = "Breaks Loop execution if supplied conditions are not met;$onlyIf[value1==/!=/>/</>=/<=value2;error message]";
    FunctionList["$ping"] = "Returns a numeric of Client Websocket Ping";
    FunctionList["$replaceText"] = "Replaces sample in a text;$replaceText[text; sample; new; howMany (-1)]";
    FunctionList["$repliedUser"] = "Returns the Replied User Id in Message";
    FunctionList["$round"] = "Returns a supplied numeric expression rounded to the nearest integer;$round[number]";
    FunctionList["$serverBanner"] = "Returns the Banner URL of Guild Id;$serverBanner or $serverBanner[guildId]";
    FunctionList["$serverIcon"] = "Returns the Icon URL of Guild Id;$serverIcon or $serverIcon[guildId]";
    FunctionList["$serverName"] = "Returns the Name of Guild Id;$serverName or $serverName[guildId]";
    FunctionList["$splitText"] = "Retrieves a substring from supplied index;$splitText[number]";
    FunctionList["$sub"] = "Returns the subtractions of supplied numbers;$sub[...numbers]";
    FunctionList["$sum"] = "Returns the sumarized of supplied numbers;$sum[...numbers]";
    FunctionList["$textSplit"] = "Split a text into substrings using the specified separator;$textSplit[text; separator]";
    FunctionList["$thumbnail"] = "Sets the Thumbnail of an Embed;$thumbnail[imageURL; embedIndex]";
    FunctionList["$title"] = "Sets the Title of an Embed;$title[text; embedIndex]";
    FunctionList["$truncate"] = "Returns the integral part of the a numeric expression, x, removing any fractional digits;$truncate[number]";
    FunctionList["$userAvatar"] = "Returns the User Avatar of User Id;$userAvatar or $userAvatar[userId]";
    FunctionList["$username"] = "Returns the Username of User Id;$username or $username[userId]";
    FunctionList["$userTag"] = "Returns the Tag of User Id;$userTag or $userTag[userId]";
})(FunctionList = exports.FunctionList || (exports.FunctionList = {}));
//# sourceMappingURL=FunctionList.js.map