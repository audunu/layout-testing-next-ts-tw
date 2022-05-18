import Link from 'next/link'
import Grid from '../components/FlexContainer'
import MobilePhotos from '../components/MobilePhotos'
import Circle from '../components/Circle'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Button from '../components/Button'


const IndexPage = () => (
  <>
    <Hero />
    
    
    <Heading />
    
    <div className='md:flex self-center'>
    <MobilePhotos />
    <Circle />
    </div>

    <Button />
    
    
  </>
)

export default IndexPage
