function BankBriefInfo({ info }) {
  const { logo, name } = info;
  return (
    <section className="flex hover:cursor-pointer items-center py-6">
      <img className="h-6" src={logo} />
      <span className="ml-4">{name}</span>
    </section>
  );
}

export default BankBriefInfo;
