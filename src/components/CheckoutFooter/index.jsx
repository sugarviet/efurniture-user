import MenuSection from "./MenuSection";
import { useState } from "react";

const footerService = [
  {
    id: 1,
    title: 'Flexible delivery and assembly',
    icon: './images/delivery_ft.svg'
  },
  {
    id: 2,
    title: 'Secure checkout',
    icon: './images/shield.svg'
  },
  {
    id: 3,
    title: 'Return made easy',
    icon: './images/package.svg'
  },
]

const footerContent = [
  {
    title: "What about returns?",
    content: (
      <p>
        If you have ordered a non-bespoke item, you are entitled to return your purchase within a certain number of days as long as it is unused and undamaged. We ask you to return the product in its orginal packaging. <br /><br /> If you’re ordering a bespoke item or an item on sale it cannot be returned
      </p>
    )
  },
  {
    title: "How about delivery?",
    content: (
      <p>
        At Efurniture we do not have all our products in stock, as most of our furniture is made just for you and your home. Our normal delivery time is 3-4 weeks for board furniture (tables, storage, etc.) and 6-7 weeks for upholstery furniture (sofas, armchairs, etc.). <br /><br /> For quick and easy delivery and assembly, our professional service team can help you. You can also decide to pick up the item yourself. <br /><br /> Delivery options and costs are calculated in the 'delivery' step.
      </p>
    )
  },
  {
    title: "How does it look and feel?",
    content: (
      <p>
        Efurniture has gone to great lengths to illustrate our products. We offer customised furniture and the ability to create it on line. The images of the furniture are created dynamically, allowing you to see all the possible furniture solutions offered by us. Whether building a customised Product or not each image should be viewed in conjunction with the descriptive text and will be limited by the screen settings of your own computer screen. If an exact colour match is vital, we recommend you order a free sample swatch or contact your local Efurniture Brand Store.
      </p>
    )
  },
];

function CheckoutFooter() {

  const [openMenu, setOpenMenu] = useState([]);

  const toggleMenu = (index) => {
    if (openMenu.includes(index)) {
      setOpenMenu(openMenu.filter((item) => item !== index));
    } else {
      setOpenMenu([...openMenu, index]);
    }
  };

  return (
    <footer className='lg:py-16 bg-[#f6f6f6] px-[25px] pt-[50px] pb-[20px] md:px-[45px] md:py-[64px] lg:px-[37px]'>
      <section className='mx-auto grid gap-[3.125rem] max-w-[59.375rem]'>
        <div className='flex flex-col md:flex-row justify-between gap-[2em] text-[0.875rem] leading-[1.714] tracking-[0.05em] pb-[1.875rem] mx-0'>
          {footerService.map((service) => (
            <figure key={service.id} className='flex gap-[1em] items-center underline md:mx-[2em]'>
              <img className='w-[1.7em] h-[1.7em]' src={service.icon}></img>
              <span>{service.title}</span>
            </figure>
          ))}
        </div>
        <div className='relative grid grid-cols-[1fr_1fre] gap-[2.5rem] text-[0.875rem] leading-[1.714] tracking-[0.05em] border-y border-blackPrimary py-[2.5rem] text-left'>
          <h2 className='absolute top-[-20px] md:top-[-44px] left-1/2 right-1/2 -translate-x-1/2 text-[0.875rem] leading-[1.714] tracking-[0.2143em] font-HelveticaBold bg-[#f6f6f6] py-[0.5em] px-[1em] text-center uppercase w-[52vw] md:w-fit'>
            Do you have any questions?
          </h2>
          <ul>
            {footerContent.map((content, index) => (
              <MenuSection
                key={index}
                title={content.title}
                content={content.content}
                index={index + 1}
                openMenu={openMenu}
                toggleMenu={toggleMenu}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center text-[0.8125rem] leading-[1.769] tracking-[0.0385]">
          <nav className="flex flex-row justify-between max-w-[15.875rem] w-full pb-[3.125rem] mx-auto">
            <a href=''>
              <img className='w-[1.3rem]' src='/images/facebook.svg'></img>
            </a>
            <a href=''>
              <img className='w-[1.3rem]' src='/images/instagram.svg'></img>
            </a>
            <a href=''>
              <img className='w-[1.3rem]' src='/images/pinterest.svg'></img>
            </a>
            <a href=''>
              <img className='w-[1.3rem]' src='/images/youtube.svg'></img>
            </a>
          </nav>
          <div className="">
            <p className="text-center text-[11px] md:text-[0.875rem] leading-[1.286] tracking-[0.04em] pb-[3.125rem]">
              <span>Cookie information&nbsp;&nbsp;</span>
              <span>Legal & privacy&nbsp;&nbsp;</span>
              <span>Terms & conditions&nbsp;&nbsp;</span>
            </p>
            <br/>
            <p className="text-center text-[11px] md:text-[0.875rem] leading-[1.286] tracking-[0.04em] pb-[3.125rem]">
              All prices are recommended retail prices in Vietnamese DONG (₫) and include VAT.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default CheckoutFooter