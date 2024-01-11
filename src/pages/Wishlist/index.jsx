import WebServices from "@components/WebServices"

const Wishlist = () => {
  return (
    <main className="flex flex-col items-center">
        <section className="block p-28">
            <h1 className="uppercase text-5xl font-[900] text-center tracking-widest">FAVOURITES</h1>
        </section>

        {/* If wishlist has item then show this */}
        <section className="border-gray-400 border-t border-b w-3/4 py-6 mb-4 hidden">
            <p className="text-center">Do you want to share your favourites with someone else? <a className="underline" href="#">Login</a></p>
        </section>

        {/* Wishlist items */}
       

        <WebServices />
    </main>
  )
}

export default Wishlist