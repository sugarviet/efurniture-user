import BestSellersSlider from "./components/BestSellersSlider"
import CategorySlider from "./components/CategorySlider"
import RoomSlider from "./components/RoomSlider"

const details = [
  {
    title: 'CREATING EXTRAORDINARY SPACES',
    description: 'BoConcept exists to transform spaces into more extraordinary places, and we are here to help you create your dream home. We offer every customer a comprehensive Interior Design service either at home, virtually or in store, for the small update or the grand transformation. Our interior stylists work with you to incorporate decor ideas, home accessories and more to craft a unique style for your home.',
    img: 'https://p3.aprimocdn.net/boconcept/211cdf9f-3f24-4707-aeec-ae3f00790db9/1208394_WEB-ImageCollageSmall-T-372x470.jpg',
  },
  {
    title: 'TAILORED TO YOUR NEEDS',
    description: 'We want to inspire you to create a truly personal home . Our furniture can be customised exactly to your needs and taste and they are renowned for their modularity, functionality and uncompromising quality – all expressed with effortless style. Materiality is everything, which is why we offer more than 120 different fabrics and materials to choose from - such as aniline leather, felt, velvet, oak, walnut, chrome, steel and much more. Together with you we can combine these materials and surfaces to offer bespoke combinations tailored to your tastes and personality. In doubt? Try ordering a set of free material samples from our vast collection of fabrics and leathers.',
    img: 'https://p3.aprimocdn.net/boconcept/32d5f7f2-504f-4a25-923e-afe300c6cb09/AW23%20305_WEB-ImageCollageSmall-T-372x470.jpg',
  },
  {
    title: 'LETS MEET IN STORE, IN HOME OR VIRTUALLY',
    description: 'Be inspired by the latest Nordic design and style. Visit us in store to see our wide range of Danish designed sofas, chairs, tables, beds, storage solutions and accessories - and get professional advice about home design. Our experts can help you find the perfect style to match your personality and your home decor, whether you are looking for a living room upgrade, a dining set or adding a single piece of design furniture to your home. Just pop in to your local store, set up a virtual appointment or contact us to book a chat today.',
    img: 'https://p3.aprimocdn.net/boconcept/cfd55b19-e813-4395-99c1-ad4400f149af/630620__WEB-ImageCollageSmall-T-372x470.jpg',
  }
]

const Home = () => {
  return (
    <section className="min-h-screen">
      {/* header section */}
      <header className="grid grid-cols-[62.5%_37.5%] pr-[85px]">
        <div className="grid grid-flow-col auto-cols-[1fr] gap-[0.5rem]" >
          <img src="https://p3.aprimocdn.net/boconcept/8737bf78-e8a8-4c26-a2ab-afe300c6e4df/AW23%20355_WEB-Hero-M-T-930x1200.jpg" />
          <img src="https://p3.aprimocdn.net/boconcept/7c2e6455-5c49-44eb-bad3-ad440017dc64/1685888__WEB-Hero-M-T-930x1200_Close-up.jpg" />
        </div>
        <div className="ml-[3.5rem] flex flex-col items-start justify-end">
          <p className="font-HelveticaBold text-[40px] leading-[56px] tracking-[0.08em] pb-6">LIVE STYLE FOR LESS</p>
          <div className="furniture-button-black-hover w-full text-[0.6875rem] font-semibold  py-[1.025rem] tracking-[0.125rem]">
            EXPLORE SOFAS
          </div>
        </div>
      </header>
      {/* Category slider */}
      <section className="pl-[68px] mb-[5.5rem]">
        <div className="mt-[5.5rem] mb-4">
          <h2 className="text-[0.685rem] text-grey2 leading-[1.4] tracking-[0.08em] ">SHOP BY CATEGORY</h2>
        </div>
        <div>
          <CategorySlider />
        </div>
      </section>

      <video muted loop autoPlay className='w-full mb-[4.5rem]' src='https://p3.aprimocdn.net/boconcept/46a2a59c-77b2-4f93-9079-afc100938925/website%20animation_7-1%20_MP4%20High%20%281080px%20heigh%29.MP4'>
      </video>

      <section className="grid grid-cols-[1fr_1fr] mb-[4.5rem]">
        <div className="flex flex-col items-start justify-end px-[68px]">
          <p className="font-HelveticaBold text-[40px] leading-[1.23] tracking-[0.15em] pb-6 line-clamp-3">GIFT IDEAS FOR <br /> EVERYONE ON YOUR <br />  LIST</p>
          <p className="font-Baskerville text-[1.25rem] pb-6">Take the guesswork out of gift giving and discover our collection of foolproof gift ideas for every and any occasion.</p>
          <div className="furniture-button-black-hover min-w-[25rem] text-[0.6875rem] font-semibold  py-[1.025rem] tracking-[0.125rem]">
            DISCOVER GIFTING
          </div>
        </div>
        <figure className="grid grid-flow-col auto-cols-[1fr] gap-[0.5rem]" >
          <img src="https://p3.aprimocdn.net/boconcept/a3a30584-1777-4d81-b00f-afd900805965/AW23%20101_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg" />
        </figure>
      </section>
      {/* Best seller slider */}
      <section className="pl-[68px] mb-[5.5rem]">
        <div className="mt-[5.5rem] mb-4">
          <h2 className="text-[0.685rem] text-grey2 leading-[1.4] tracking-[0.08em] ">BESTSELLERS</h2>
        </div>
        <div>
          <BestSellersSlider />
        </div>
      </section>
      {/* Room slider */}
      <section className="pl-[68px] mb-[5.5rem]">
        <div className="mt-[5.5rem] mb-4">
          <h2 className="text-[0.685rem] text-grey2 leading-[1.4] tracking-[0.08em] ">SHOP BY ROOM</h2>
        </div>
        <div>
          <RoomSlider />
        </div>
      </section>
      {/* footer section */}
      {/* <footer className="grid grid-cols-[1fr_1fr] mb-[4.5rem] px-[68px]">
        <section className="flex flex-col items-start justify-end pr-[120px]">
          <h3 className="font-HelveticaBold text-[40px] leading-[1.2] tracking-[0.15em] pb-10 line-clamp-3">DANISH DESIGN FURNITURE BY BOCONCEPT</h3>
          <p className="font-Baskerville text-[1.25rem]">BoConcept was born in Herning in 1952 and has grown from a small firm to Denmark’s most
            global furniture brand, with over 300 stores in more than 60 countries – and counting. Through Danish creativity and craftsmanship, we elevate
            spaces with iconic design that brings joy and inspiration, collaborating with some of the most respected designers in Denmark and further afield
            to be timelessly on trend.
          </p>
        </section>
        <section>
          {details.map((detail, index) => (
            <div key={index} className={`grid grid-cols-[18.1818181818%_81.8181818182%]  ${index === details.length - 1 ? '' : 'mb-10'}`} >
              <figure className="">
                <img src={detail.img} />
              </figure>
              <article className="pl-[1.875rem]">
                <h3 className="font-HelveticaBold text-[24px] tracking-[0.08em] pb-[0.75rem] leading-[1.2083333333]">{detail.title}</h3>
                <p className="text-base tracking-[0.04em] leading-[21px]">
                  {detail.description}
                </p>
              </article>
            </div>
          ))}
        </section>
      </footer> */}
    </section>
  )
}

export default Home;
