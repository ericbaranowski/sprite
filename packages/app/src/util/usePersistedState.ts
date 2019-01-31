import {useState, useEffect} from 'react'

const usePersistedState = <T extends string | number | boolean>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] => {
  let localStorageValue = initialValue
  if (key) {
    localStorageValue = localStorage[key] && JSON.parse(localStorage[key])
  }

  const [localState, setLocalState] = useState<T>(
    localStorageValue || initialValue
  )

  const syncLocalStorage = (event: StorageEvent) => {
    if (event.key === key) {
      setLocalState(event.newValue && JSON.parse(event.newValue))
    }
  }

  useEffect(() => {
    window.addEventListener('storage', syncLocalStorage)
    return () => {
      window.removeEventListener('storage', syncLocalStorage)
    }
  }, [])

  useEffect(
    () => {
      localStorage.setItem(key, JSON.stringify(localState))
    },
    [localState]
  )

  return [localState, setLocalState]
}

export default usePersistedState
