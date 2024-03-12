const services = [
  {
    id: 1,
    icon: "/images/location.svg",
    alt: "location",
    title: "300+ stores globally – we look forward to welcoming you.",
  },
  {
    id: 2,
    icon: "/images/material.svg",
    alt: "material",
    title:
      "Order free fabric samples and discover how our materials would look in your home.",
  },
  {
    id: 3,
    icon: "/images/design.svg",
    alt: "design",
    title:
      "Interior Design Service: From a small update to a complete makeover.",
  },
  {
    id: 4,
    icon: "/images/delivery.svg",
    alt: "delivery",
    title: "Let us help you with delivery and assembly.",
  },
];

const WebServices = () => {
  return (
    <section className="bg-gray-200 w-full px-2 py-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-2">
      {services.map((service) => (
        <div className="p-2 flex flex-col items-center border-t-2 gap-6 sm:border-none" key={service.id}>
          <img src={service.icon} alt={service.alt} className="w-10 lg:w-16" />
          <p className="text-center block text-sm lg:text-base lg:w-80 md:w-64">
            {service.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default WebServices;
