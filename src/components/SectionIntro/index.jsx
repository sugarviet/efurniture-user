function SectionIntro({ img_url, title, description }) {
  return (
    <section className="grid grid-cols-2 mb-16">
      <img
        className="col-span-1 object-cover object-center w-full h-full"
        alt="section-intro-image"
        src={img_url}
      />
      <div className="col-span-1 flex justify-end flex-col px-14 pb-14">
        <span className="text-6xl font-bold mb-8 uppercase">{title}</span>
        <span className="text-xl">{description}</span>
      </div>
    </section>
  );
}

export default SectionIntro;
