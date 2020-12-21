import Head from "next/head"

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="p-8 m-16 rounded shadow">Hello</div>
    </main>
  </div>
)

export default Home
