function getShortMessages(messages) {
    const messageObjs = messages.filter(object => object.message.length < 50);
    return messageObjs.map(object => object.message);
  }

  module.exports = getShortMessages