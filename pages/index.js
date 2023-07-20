import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ideafridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ideafridge" />
        <p className="description">
          Building infrastructure that helps Enterprise B2B teams grow
      </ br>
          Data cleaning and enrichment
      </ br>
          Reporting and analytics
      </ br>
          Tool building and implementation
        </p>
      </main>

      <Footer />
    </div>
  )
}
