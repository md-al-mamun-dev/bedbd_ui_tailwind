import Image from "next/image"
// import sampleImage_0 from '/dummy/aa7ce09cc4e2e086c0a441a2bc6c3a41.jpeg'

export default function PropertyGalleryItem() {
  return (
    <div className="min-w-290px max-w-395px ">
        <div className="flex transition-transform duration-500 ease-in-out overflow-hidden rounded-lg">
        <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
              <Image src={`/dummy/dab98b8e77b48c65d7c3e2032f00af6c.jpeg`} fill/>
          </div>
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
              <Image src={`/dummy/aa7ce09cc4e2e086c0a441a2bc6c3a41.jpeg`} fill/>
          </div>          
        </div>
        
        <div className="mt-2">
          <div className="inline-block float-left h-fit mt-auto | text-xl text-neutral-500 font-semibold ">Kuakata, Barishal</div>
          <div className="pl-auto text-end | text-2xl text-primary-400 font-semibold">$25</div>
          <div className="inline-block float-left text-neutral-400 text-base font-medium">Available on 25.12.2023</div>
          <div className="text-end flex float-right items-center content-center justify-center text-base font-medium"><Image className="" src='/icons/star_gray.svg' height={24} width={24}/><span className="mt-auto text-neutral-600 "> 4.8 </span><span className="mt-auto text-neutral-500">(20)</span></div>
        </div>
    </div>
  )
}
