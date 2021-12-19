enum Actions {
  QUESTION = 'Sure.',
  YELL = 'Whoa, chill out!',
  YELL_QUESTION = "Calm down, I know what I'm doing!",
  NOTHING = 'Fine. Be that way!',
  ANYTHING_ELSE = 'Whatever.',
}

export function hey(message: string): string {
  const cleanedMessage = message.trim()

  const isEmpty = !cleanedMessage
  const isAllUppercase =
    /^[^a-z]*$/.test(cleanedMessage) && /[a-z]/i.test(cleanedMessage)
  const isAQuestion = cleanedMessage.slice(-1) === '?'

  if (isAllUppercase && isAQuestion) return Actions.YELL_QUESTION
  if (isAQuestion) return Actions.QUESTION
  if (isAllUppercase) return Actions.YELL
  if (isEmpty) return Actions.NOTHING
  return Actions.ANYTHING_ELSE
}

/* Solution 3

enum Actions {
  QUESTION = 'Sure.',
  YELL = 'Whoa, chill out!',
  YELL_QUESTION = "Calm down, I know what I'm doing!",
  NOTHING = 'Fine. Be that way!',
  ANYTHING_ELSE = 'Whatever.',
}

export function hey(message: string): string {
  const cleanedMessage = message.trim()

  const isEmpty = !cleanedMessage
  const isAllUppercase =
    /^[^a-z]*$/.test(cleanedMessage) && /[a-z]/i.test(cleanedMessage)
  const isAQuestion = cleanedMessage.endsWith('?')

  if (isAllUppercase && isAQuestion) return Actions.YELL_QUESTION
  if (isAQuestion) return Actions.QUESTION
  if (isAllUppercase) return Actions.YELL
  if (isEmpty) return Actions.NOTHING
  return Actions.ANYTHING_ELSE
}

*/

/* Solution 2

enum Actions {
  QUESTION = 'Sure.',
  YELL = 'Whoa, chill out!',
  YELL_QUESTION = "Calm down, I know what I'm doing!",
  NOTHING = 'Fine. Be that way!',
  ANYTHING_ELSE = 'Whatever.',
}

function isEmpty(message: string): boolean {
  return !message.trim().length
}

function isAllUppercase(message: string): boolean {
  return /^[^a-z]*$/.test(message) && /[a-zA-Z]/.test(message)
}

function isAQuestion(message: string): boolean {
  const cleanedMessage = message.trim()
  return /\?$/.test(cleanedMessage)
}

export function hey(message: string): string {
  const isMessageEmpty = isEmpty(message)
  const isMessageAllUppercase = isAllUppercase(message)
  const isMessageAQuestion = isAQuestion(message)

  if (isMessageAllUppercase && isMessageAQuestion) return Actions.YELL_QUESTION
  if (isMessageAQuestion) return Actions.QUESTION
  if (isMessageAllUppercase) return Actions.YELL
  if (isMessageEmpty) return Actions.NOTHING
  return Actions.ANYTHING_ELSE
}

*/

/* Solution 1

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

*/
