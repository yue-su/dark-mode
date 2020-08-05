import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {

    const [value, setValue] = useLocalStorage('key', false)


    return [value, setValue]
}

