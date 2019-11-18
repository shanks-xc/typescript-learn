let name1: string | number = 1
name1 = 1

function say(person: string | number | object): object {
  let name = { name:22}
  person = name
  return person
}
