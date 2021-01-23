import Link from 'next/link'
import fetch from 'isomorphic-fetch'

function ProjectsList({ json }) {
    console.log(json)
  return (
    <div>
      <p>Next.js has {json} ⭐️</p>
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = fetch('https://api.carboncertify.com/projects')
  const json = res.json()

  return {
    props: {
      data: json,
    },
  }
}

export default ProjectsList