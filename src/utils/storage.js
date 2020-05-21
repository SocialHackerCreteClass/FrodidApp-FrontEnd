export const loadFromStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveToStorage = (key, objectToSave) => {
  try {
    const serializedState = JSON.stringify(objectToSave)
    localStorage.setItem(key, serializedState)
  } catch (e) {} //eslint-disable-line
}
