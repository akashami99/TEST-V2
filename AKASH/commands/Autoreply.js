module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body, attachments } = event;

  // Messenger নীল লাইক (sticker)
  if (attachments && attachments[0]?.type === "sticker") {
    const likeStickers = ["369239263222821","369239343222803","369239343222804"];
    if (likeStickers.includes(attachments[0].stickerID.toString())) {
      return api.sendMessage("আবা*ল নাকি লাইক কেন ব্যা 😾🔪", threadID, messageID);
    }
  }

  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "help": "Prefix de sala",
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস Akash রে হাঙ্গা করো😶👻😘",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "😦": "হায়রে! 😦",
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};
