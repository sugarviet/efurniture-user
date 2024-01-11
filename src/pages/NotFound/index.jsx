const NotFound = () => {
  return (
    <main className="p-2 flex justify-center gap-2 translate-y-1/3 items-center">
      <div className="w-96 h-96">
        <img
          src="https://b2254205.smushcdn.com/2254205/wp-content/uploads/2022/07/otd-furniture-Micah-standing-lamp-600x600.png?lossy=1&strip=1&webp=1"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-8 text-gray-700 py-10">
        <p className="text-7xl font-black tracking-widest">404</p>
        <p className="text-6xl font-black tracking-wide">Page not found</p>
        <p className="text-gray-700">Oops! cant access to this page</p>
        <a href="/">
          <button className="bg-black text-white px-8 py-2 w-fit font-semibold">
            Back to homepage
          </button>
        </a>
      </div>
    </main>
  );
};

export default NotFound;
