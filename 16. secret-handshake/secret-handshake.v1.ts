// Solution 1

type Event = 'wink' | 'double blink' | 'close your eyes' | 'jump'
type Code = 1 | 10 | 100 | 1000

const handshake: Record<Code, Event> = {
  1: 'wink',
  10: 'double blink',
  100: 'close your eyes',
  1000: 'jump',
}

export function commands(input: number) {
  const binaryInput = input.toString(2).split('').reverse()
  const handshakeEvents: Event[] = []

  if (binaryInput[0] === '1') handshakeEvents.push(handshake['1'])
  if (binaryInput[1] === '1') handshakeEvents.push(handshake['10'])
  if (binaryInput[2] === '1') handshakeEvents.push(handshake['100'])
  if (binaryInput[3] === '1') handshakeEvents.push(handshake['1000'])
  if (binaryInput[4] === '1') handshakeEvents.reverse()

  return handshakeEvents
}
