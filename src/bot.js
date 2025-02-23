// @flow
import TelegramBot from 'node-telegram-bot-api';
import uuidV4 from 'uuid/v4';
import { sample } from 'lodash';
import getReplies from './replies';
import * as conf from './conf';
import * as constants from './constants';
import type { Chat, PMQuery, InlineQuery } from './types';

class SwearBot {
  bot: TelegramBot;
  lastMsg: Object;
  savedMsg: Object;
  
  constructor() {
    this.bot = new TelegramBot(conf.TELEGRAM_TOKEN, { polling: true });
  }

  updateLastMsg(msg) {
    this.lastMsg = msg;
    if (this.savedMsg == null) {this.savedMsg = msg; } else {
      //console.log(this);
      //console.log(this.lastMsg.date - this.savedMsg.date);
      //this.bot.sendMessage(msg.chat.id, "Chat : " + msg.chat.id + " Last Message: " + msg.message_id + ". Previous (saved) Message: " 
      //                     + this.savedMsg.message_id + ". Difference is " + (msg.message_id - this.savedMsg.message_id) + " messages.");
    }
  }

  checkSpeed(step: Number) {
    if (this.savedMsg) {
      var diffMessages = this.lastMsg.message_id - this.savedMsg.message_id;
      var speed = diffMessages / step;
      var answer = ""; 
      if (speed >= 5) 
                           {//too fast
                             answer = constants.SPEED_TOO_FAST;
                           } else if (speed <= 0.10)
                           {//too low
                             answer = constants.SPEED_TOO_LOW;
                           } else 
                           {//just ok
                             answer = constants.SPEED_TOO_OK;
                           };
      this.bot.sendMessage(this.lastMsg.chat.id, "Chat : " + this.lastMsg.chat.id + " Speed: " + speed + ". Answer: " + sample(answer) + ".");
      
      
      //if (speed > constants.MAX_MESSAGE_DIFF) {
      //console.log("Last #" + this.lastMsg.message_id + ". Saved #" + this.savedMsg.message_id
      //            + ". " + diffMessages + " msg sent in 5 seconds. The speed is " + speed + ".");
      this.savedMsg = this.lastMsg;
    } else {
      //console.log(this);
    }
  }
  
  sendPMReply({ chat, text }: PMQuery) {
    const reply = sample(getReplies(text));
    this.bot.sendMessage(chat.id, reply, {
      reply_to_message_id: this.lastMsg.message_id,
    });
  }

  sendInlineReply({ id, query }: InlineQuery) {
    const replies = getReplies(query);
    if (!replies) {
      return;
    }

    const results = replies.map((reply) => ({
      type: "article",
      id: uuidV4(),
      title: reply,
      input_message_content: { message_text: reply },
    }));

    this.bot.answerInlineQuery(id, results);
  }

  sendGreeting(chat: Chat) {
    this.bot.sendMessage(chat.id, constants.GREETING);
  }

  sendHelp(chat: Chat) {
    this.bot.sendMessage(chat.id, constants.HELP);
  }

  run() {
    this.bot.on("message", (msg) => this.updateLastMsg(msg));
    this.bot.on("inline_query", (query) => this.sendInlineReply(query));
    this.bot.onText(/^\/start$/i, ({ chat }) => this.sendGreeting(chat));
    this.bot.onText(/^\/help$/i, ({ chat }) => this.sendHelp(chat));
    this.bot.onText(/^[^\/](.*)/i, (query) => this.sendPMReply(query));
    
    setInterval(() => this.checkSpeed(10), 10000);
  }
}

export default SwearBot;
