import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a journey that redefines your experience with unbeatable deals. from premier selections to incredible savings. we offer unparalled value that set us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of posibilities designed to fufill your uniqu desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button 
            label='Learn More' 
            backgroundColor='bg-whtie'
            borderColor='border-slate-gray'
            text='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer