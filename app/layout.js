import './globals.css'
import styles from './layout.module.css'
import Cursor from '../components/Cursor'

import { Inter } from '@next/font/google'
const inter = Inter({subsets: ['latin']})

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children })
{
    return (
        <html lang='en' className={inter.className}>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>cost.</title>
            </head>
            <body>
                <Cursor />
                <Header />
                <main className={styles.container}>{children}</main>
                <Footer />
            </body>
        </html>
    )
}