function ShowRoom3D({ className }) {
  return (
    <section className="my-20 flex flex-row">
      <div className="w-full relative">
        <iframe
          src="https://www.roomle.com/app/3d/a5a35m3xebtrdcvv3f28wh8e8r13pon"
          className="w-full h-[40rem]"
          frameborder="0"
        />
        <div className="w-28 absolute bg-white top-0 bottom-0 right-0 items-center justify-center flex"></div>
      </div>
    </section>
  );
}

export default ShowRoom3D;
