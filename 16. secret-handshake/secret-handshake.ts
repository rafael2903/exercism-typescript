// Solution 2

type Event = 'wink' | 'double blink' | 'close your eyes' | 'jump'
type Code = 0b1 | 0b10 | 0b100 | 0b1000

const handshakeEventsDictionary: Map<Code, Event> = new Map<Code, Event>([
  [0b1, 'wink'],
  [0b10, 'double blink'],
  [0b100, 'close your eyes'],
  [0b1000, 'jump'],
])

export function commands(sequence: number) {
  const handshakeEvents: Event[] = []

  handshakeEventsDictionary.forEach((event, code) => {
    if (code & sequence) handshakeEvents.push(event)
  })

  if (sequence & 0b10000) handshakeEvents.reverse()

  return handshakeEvents
}
