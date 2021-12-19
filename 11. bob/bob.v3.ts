// Solution 3

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
