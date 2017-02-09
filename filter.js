function getShortMessages(messages) {
  return messages.filter(msg => msg.message.length < 50).map(m => m.message);
}

module.exports = getShortMessages