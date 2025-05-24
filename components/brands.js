export default function Brands() {
  const brands = ["Amazon", "Microsoft", "Google", "Facebook", "Atlassian", "Shopify"]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-10">Trusted by 25,000+ businesses including</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <p className="text-xl font-bold text-gray-400">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
