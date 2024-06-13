interface IRegexList {
    copyText: string;
    title: string;
}
export const regexList: IRegexList[] = [
    {
        copyText: "\\/web[^_]*_\\/",
        title: "WebArchive удаление тегов (возможное)"
    },
    {
        copyText: "(?<=<!-- Yandex\\.Metrika informer -->)([\\s\\S]*?)(?=<!-- \\/Yandex\\.Metrika informer -->)\n",
        title: "Yandex.Metrica informer",
    },
    {
        copyText: "(?<=<!-- Yandex\\.Metrika counter -->)([\\s\\S]*?)(?=<!-- \\/Yandex\\.Metrika counter -->)\n",
        title: "Yandex.Metrica counter"
    },
    {
        copyText: "(?<=<!-- Google Tag Manager -->)([\\s\\S]*?)(?=<!-- End Google Tag Manager -->)\n",
        title: "Google Tag Manager"
    },
    {
        copyText: "(?<=<!-- Google Tag Manager (noscript) -->)([\\s\\S]*?)(?=<!-- End Google Tag Manager (noscript) -->)\n",
        title: "Google Tag Manager (noscript)"
    },
    {
        copyText: "(?<=<!--LiveInternet counter-->)([\\s\\S]*?)(?=<!--/LiveInternet-->)\n",
        title: "LiveInternet counter"
    },
    {
        copyText: "(?<=<!-- Rating@Mail.ru counter -->)([\\s\\S]*?)(?=<!-- //Rating@Mail.ru counter -->)\n",
        title: "Rating@Mail.ru counter"
    }
]