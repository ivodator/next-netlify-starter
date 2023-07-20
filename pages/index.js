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
          Building infrastructure that helps teams grow
        </p>
      </main>

      <Footer />
    </div>
  )
}
