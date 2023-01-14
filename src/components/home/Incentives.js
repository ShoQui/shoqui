const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-pizarra ">
        <div className="mx-auto max-w-7xl  py-12 sm:px-2 sm:py-8 lg:px-4 ">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none  ">
            <div className="max-w-1xl ">
              <h2 className="text-4xl text-center font-bold tracking-tight text-purple-200-accent">
                Nuestro Negocio es Brindarte el Mejor Servicio
              </h2>
              <p className="mt-4 text-zinc-200">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
                about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
                clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <div className="mt-16 mb-8 grid grid-cols-1 gap-y-10 gap-x-16 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:flex">
                  <div className="sm:flex-shrink-0 py-2">
                    <img className="h-16 w-16 " src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-2 sm:mt-0 sm:ml-2 lg:mt-0 lg:ml-4">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-1 text-sm text-justify text-zinc-400">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }