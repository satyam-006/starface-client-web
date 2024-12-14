import react, { Suspense } from 'react'
import { LayoutCollection } from './Layout-collection'
import { Predesigned } from './Predesigned'
import Apps from './Home-hero'
import Introduction from './Introduction'



function Home() {
  
  return (
    <>
    <Suspense fallback={'Loading...'}>
       <Apps />
       <Introduction />
       <LayoutCollection />
       <Predesigned />
    </Suspense>
    </>
  )
}

export default Home
