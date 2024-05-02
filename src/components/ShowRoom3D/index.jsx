function ShowRoom3D({ className, model3D }) {
  const id = model3D || "cf9t9tqvd2i2qpxo920no6etkp0am45";
  return (
    <section className="my-20 flex flex-row">
      <div className="w-full relative">
        <iframe
          src={`https://www.roomle.com/app/3d/${id}`}
          className="w-full h-[40rem]"
          frameBorder="0"
        />
        <div className="w-28 absolute bg-white top-0 bottom-0 right-0 items-center justify-center flex"></div>
        <div className="w-28 absolute bg-white top-0 bottom-0 left-0 items-center justify-center flex"></div>
      </div>
    </section>
  );
}

export default ShowRoom3D;
