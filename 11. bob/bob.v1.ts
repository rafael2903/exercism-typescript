// Solution 1

enum Actions {
  QUESTION = 'Sure.',
  YELL = 'Whoa, chill out!',
  YELL_QUESTION = "Calm down, I know what I'm doing!",
  NOTHING = 'Fine. Be that way!',
  ANYTHING_ELSE = 'Whatever.',
}

export function hey(message: string): string {
  const isMessageEmpty = isEmpty(message)
  const isMessageAllUppercase = isAllUppercase(message)
  const isMessageAQuestion = isAQuestion(message)

  if (isMessageEmpty) return Actions.NOTHING
  if (isMessageAllUppercase && isMessageAQuestion) return Actions.YELL_QUESTION
  if (isMessageAQuestion) return Actions.QUESTION
  if (isMessageAllUppercase) return Actions.YELL
  return Actions.ANYTHING_ELSE
}

function isEmpty(message: string): boolean {
  return !message.trim().length
}

function isAllUppercase(message: string): boolean {
  return /^[^a-z]*$/.test(message) && /[a-zA-Z]/.test(message)
}

function isAQuestion(message: string): boolean {
  const cleanedMessage = message.trim()
  return cleanedMessage[cleanedMessage.length - 1] === '?'
}
