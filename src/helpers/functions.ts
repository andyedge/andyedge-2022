export const capitalizeFirstLetter = (text: string): string => {
    return text.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
}

export const getUniqueValuesFromCollection = (data: any[], key: string) => {
    const items = data.map((item) => item[key])
    return [...Array.from(new Set(items))]
}