import ProductAddToCart from '@components/ProductAddToCart'
import ProductCarousel from './components/ProductCarousel'
import ProductInfo from './components/ProductInfo'

function ProductDetail() {
  return (
    <section>
      <article className='furniture-promotion mt-7'>
        <div>SALE EKSTRAORDINÆR</div>
      </article>

      <section className='relative'>
        <div className='absolute top-[1.25rem] left-[2.5rem]'>
          <a className='text-[0.75rem] font-HelveticaBold flex flex-row gap-2 cursor-pointer'>
            <img src='data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nOCcgaGVpZ2h0PScxMycgdmlld0JveD0nMCAwIDggMTMnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nIzIyMic+IDxwYXRoIGQ9J003LjA5MyAxMS41NzlsLS43MDcuNzA3LTUuNzQtNS43NCA1LjktNS45LjcwNy43MDgtNS4xOTIgNS4xOTJ6Jy8+IDwvc3ZnPg==' />
            <span>DINING TABLES</span>
          </a>
        </div>
        <ProductCarousel />
        <section className='flex justify-between px-8 pt-16'>
          <div className='pl-24 max-w-[50rem] min-w-[50%] '>
            <article className='pb-12 text-left'>
              <p className='text-[1.5rem] font-HelveticaBold leading-[1.2] tracking-[0.08em]'>
                SANTIAGO DINING TABLE
              </p>
            </article>
            <ProductInfo/>
          </div>
          <div className='pr-24'>
            <ProductAddToCart />
          </div>
        </section>
      </section>
    </section>
  )
}

export default ProductDetail