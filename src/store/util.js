export function makeAction (type) {
  return ({commit}, ...args) => commit(type, ...args)
}
