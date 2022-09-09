export const capitalizeFirstLetter = (text: string): string => {
    return text.split(' ').map((word) => {
        return (word === 'UX') ? 'UX' : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
}

export const getUniqueValuesFromCollection = (data: any[], key: string) => {
    const items = data.map((item) => item[key])
    return [...Array.from(new Set(items))]
}

export const getUrlToShare = (sectionId: string) => {
    let urlToShare = window.location.href;
    let sectionIdStr = '#' + sectionId;

    if (urlToShare.includes('#')) {
        urlToShare = urlToShare.split('#')[0];
    }

    urlToShare += sectionIdStr;

    navigator.clipboard.writeText(urlToShare)
        .then(() => {
            alert('Text copied')
        })
        .catch(error => {
            alert(error)
        })
    return urlToShare;
}

export const getTypeformId = (typeformURL: string) => (typeformURL && typeformURL.length) ? typeformURL.split('to/')[1] : ''