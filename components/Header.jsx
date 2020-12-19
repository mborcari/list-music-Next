import Head from 'next/head'

export const siteTitle = 'Trabalha de Arquitetura de Front End'

export default function Header() {
    return (
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico"></link>
            <meta
                name="description"
                content="Aplicação NextJS para PucMinas"
            />
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
    )
}
