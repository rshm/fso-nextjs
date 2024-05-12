import Image from "next/image";

const services = [
  {
    title: "Renew fire safety certificate",
    description:
      "Issue fire safety certificate renewal upon compliance of all the mandatory requirements.",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Provide declaration post inspection",
    description:
      "Give bi-annual declaration that fire prevention, life safety and fire protection\n" +
        " measures provided in the building or premises are operational, in place and in\n" +
        " efficient working condition. ",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Guided Drills",
    description:
      "Carry out bi-annual emergency mock drills and maintain record of the same.\n" +
        "During the mock drill, provide basic information to occupiers and other\n" +
        " security/maintenance staff with respect to basic fire prevention, fire-fighting and\n" +
        " related aspects.",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What we do?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          We provide inspection services from small sized buildings to high rise buildings and audit fire safety guidelines ,
          procedures according to NFPA 101 Life Safety code, National Building code 2016 Part IV.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
