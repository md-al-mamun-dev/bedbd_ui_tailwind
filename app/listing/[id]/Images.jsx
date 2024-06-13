import Image from "next/image"

export default function Images({data}) {
  console.log(data)
  return (
    <div className=" w-full grid md:grid-cols-2 gap-4 ">
      {
        data.slice(0,4)
            .map(img => ( <div className="relative w-full h-auto aspect-[31/22] w-342 h-242 rounded-lg overflow-hidden  object-cover "> 
                            <Image src={img['url']} fill/>
                          </div>))
      }
    </div>
  )
}
