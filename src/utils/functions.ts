export const generateRegex = (string: string): void => {

    const onlyNamesArr: string[] = string.split('\n').map((el: string) => {
        const arr: string[] = el.split('/')
        return arr[arr.length - 1]
    })

    const imageNamesArr: string[] = onlyNamesArr.map(el => {
        const arr: string[] = el.split('.')
        switch(arr[arr.length - 1]) {
            case 'jpg': //
            case 'png':
            case 'jpeg':
            case 'bmp':
            case 'webp':
            case 'avif':
            case 'gif':
                break
            default:
                arr.length = 0
        }
        return arr.join('.')
    })

    const filteredSymbolsArr: string[] = imageNamesArr.map(el => escapeSpecialChars(el)).filter(Boolean)

    const result = `(${filteredSymbolsArr.join('|')})`

    navigator.clipboard.writeText(result).then(() => console.log('DONE'))
    function escapeSpecialChars(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export const generateRedirect = (fromLink:string, toLink:string) => {
    const fromLinks:string[] = fromLink.split('\n')
    let redirects = '';

    fromLinks.forEach(fromUrl => {
        redirects += `RewriteRule ^${fromUrl.replace(/(http(s)?:\/\/)?(www\.)?[^/]+\/?/i, '')}$ ${toLink} [R=301,L]\n`;
    })

    navigator.clipboard.writeText(redirects).then(() => console.log('DONE'))

}

export const generateRedirectEveryPage = (toLink:string) => {
    navigator.clipboard.writeText(`RewriteRule ^(.*)$ ${toLink}$1 [L,R=301]`).then(() => console.log('DONE'))
}