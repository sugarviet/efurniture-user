import WebServices from '@components/WebServices';
import FooterTop from './components/FooterTop';
import FooterMid from './components/FooterMid';
import FooterBottom from './components/FooterBottom';

function Footer() {

  return (
    <footer className='font-HelveticaRoman pt-[6.25rem] mb-2 sm:mb-5'>
      <WebServices />
      <div className='px-6 sm:px-10 pt-10'>
        <FooterTop />
        <FooterMid />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer;