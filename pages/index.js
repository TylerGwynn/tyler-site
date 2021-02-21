import Head from 'next/head'
import Layout, {siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your introooo]</p>
        <p>
          (words hehe)
        </p>
      </section>
      <Link href="/posts/first-post">
        <a>my first poost ^_^</a>
      </Link>
    </Layout>
  )
}
