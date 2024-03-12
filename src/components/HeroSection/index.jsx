function HeroSection({ img_url, title, description }) {
  return (
    <section className="grid grid-cols-2 h-80 2xl:h-full mb-2">
      <img
        className="col-span-1 object-cover object-center w-full h-full"
        alt="section-intro-image"
        src={img_url}
      />
      <div className="col-span-1 flex justify-end flex-col px-12 pb-12">
        <span className="text-xl sm:text-3xl tracking-widest lg:text-5xl font-bold mb-8 uppercase">
          {title}
        </span>
        <span className="text-sm lg:text-md">{description}</span>
      </div>
    </section>
  );
}

export default HeroSection;
