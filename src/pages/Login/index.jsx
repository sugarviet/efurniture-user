import LoginInputForm from "./components/LoginInputForm"

const benefitList = [
  {
    name: "News and exclusive offers!"
  },
  {
    name: "Order History"
  },
  {
    name: "Faster Checkout"
  }
]

const Login = () => {
  return (
    <main className="mx-[14.5rem] font-HelveticaBold">
      <section className="py-20">
        <h1 className="px-[2.5rem] text-center ">My account</h1>
      </section>
      <section className="flex flex-row">

        <div className="basis-1/2 pr-[144px]">
          <article className="mb-[2.8125rem]">
            <h2>RETURNING CUSTOMERS</h2>
          </article>
          <div className="font-HelveticaRoman">
            <LoginInputForm />
          </div>
        </div>

        <div className="basis-1/2 pl-[144px] h-full border-l-[0.0625rem] border-border">
          <article className="mb-[2.8125rem]">
            <h2>REGISTER</h2>
          </article>
          <div className="font-HelveticaRoman">
            <h3 className="font-light mb-[0.7em]">BENEFITS OF CREATING AN ACCOUNT</h3>
            <ul className="list-none font-HelveticaBold pl-[0.9375rem]">
              {benefitList.map((benefit) => (
                <li
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzMiI+PHBhdGggZD0iTTMwLjI1NS4wMDZsLTE3LjQ4IDIyLjQtOC43NTEtOC4yLTQuMDIgNC4xMDZMMTMuNDE5IDMxLjUgMzQuOTU2IDMuNjIzeiIvPjwvc3ZnPg==")` }}
                  className="bg-no-repeat bg-[length:1rem] bg-[left_3px] pl-[1.5625rem] mb-[0.625rem]"
                >{benefit.name}</li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Login