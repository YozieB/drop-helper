export const generateRegex = (string: String): void => {

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

    const result:string = `(${filteredSymbolsArr.join('|')})`

    navigator.clipboard.writeText(result).then(() => console.log('DONE'))
    function escapeSpecialChars(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}