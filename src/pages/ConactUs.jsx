import React from 'react'
import HomeNavbar from '../components/HomeNavbar'

const ContactUs = () => {
return (
<>
  <HomeNavbar />
  <section className='primary container mx-auto px-32 py-[114px]'>
    <div className='text-[30px]'>
      Contact us
    </div>
    <div className='max-w-[340px] text-md mt-3'>
      We are here to help you and answer any questions you may have. Here is how to reach us!
    </div>
  </section>
  <section className='container mx-auto px-14'>
    <div className='max-w-[40%] py-5 text-2xl text-primary flex justify-center border-b-2 border-primary'>
      <i className="bi bi-geo-alt-fill px-4"></i>
      <span>INDIA</span>
    </div>
    <div className='py-4 text-md'>
      Milaap Social Ventures India Pvt. Ltd. Nextcoworks JP Nagar - Coworking Space JP Nagar Alankar Plaza, Bk circle,
      Nayak Layout, 8th Phase, J. P. Nagar,
      Bangalore, Karnataka, India 560078
    </div>
    <div className='flex items-center gap-3 mb-3'>
      <i className="bi bi-envelope-fill"></i>
      <div className='text-sm'>feedback@giveumma.com</div>
    </div>
    <div className='flex items-center gap-3 mb-3'>
      <i className="bi bi-telephone-fill"></i>
      <div className='text-sm'>+91 915118442</div>
    </div>
    <div className='mt-7 mb-7'>
      <iframe className='w-full h-[400px]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2192923990374!2d81.08349367506021!3d26.896534660786333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f575bf51261%3A0xb1d57105bf4a2c8e!2sRadha%20Krishna%20Apartment%2C%20Faizabad%20Rd%2C%20Anora%20Kala%2C%20Uttar%20Pradesh%20226028!5e0!3m2!1sen!2sin!4v1705301986855!5m2!1sen!2sin"
        style={{"border":0}} allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</>
)
}

export default ContactUs