
import Banner from '@/components/homepage/Banner'
import Divcover from '@/components/homepage/Divcover'
import NewArival from '@/components/homepage/NewArival'
import BestSeller from '@/components/homepage/BestSeller'
import OffersCart from '@/components/homepage/OffersCart'
import Testimonial from '@/components/homepage/Testimonial'

export default async function Home() {
  
  
  return (
    <main>
      <Banner />
      {/* Discover Sections */}
      <section className="bg-gradient-to-r from-indigo-50">
        <Divcover />
      </section>
      {/* New Arivals Sections */}
      <section className="new-arival-sec">
        <NewArival />
      </section>
      {/* New Arivals Sections */}
      <section className="bg-slate-50">
        <BestSeller />
      </section>
      {/* offer section */}
      <section className='offer-sec bg-gradient-to-tl from-amber-100'>
        <OffersCart />
      </section>
      <section className='testimonial border-t-2'>
        <Testimonial />
      </section>
    </main>
  )
}
