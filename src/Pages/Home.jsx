import react, { Suspense } from 'react'
import { LayoutCollection } from './Layout-collection'
import { Predesigned } from './Predesigned'
import Apps from './Home-hero'
import Introduction from './Introduction'
import Entertainment from './Entertainment'
import Services from './Services'



function Home() {
  
  return (
    <>
    <Suspense fallback={'Loading...'}>
       <Apps />
       <Introduction />
       <Services />
       {/* <LayoutCollection /> */}
       <Predesigned />
    </Suspense>
    </>
  )
}

export default Home
