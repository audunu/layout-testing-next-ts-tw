import Link from 'next/link'
import Layout from '../components/Layout'
import Grid from '../components/Grid'

const AboutPage = () => (
  
  <Grid>
  <div className='row-start-2'>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
  </Grid>
)

export default AboutPage
