import { PFALogos } from "../../../../assets"

const PFAList = () => {
  return (
    <section className="w-screen min-w-[80vw] flex flex-wrap items-center py-5 justify-around sm:justify-start" id="pfas">
      {
        PFALogos.map((pfa) => {
          return (
            <div key={pfa} className="w-[30%] sm:w-[25%] md:w-[20%] flex justify-center items-center my-[20px]">
              <img src={pfa} alt="" className="w-[150px]" loading="lazy" />
            </div>
          )
        })
      }
    </section>
  )
}

export default PFAList