import Image from "next/image"
// import sampleImage_0 from '/dummy/aa7ce09cc4e2e086c0a441a2bc6c3a41.jpeg'

export default function PropertyGalleryItem() {
const img_0 = 'https://s3-alpha-sig.figma.com/img/47d6/8395/bebcd1e57e3c88ef2f4b4e2f2bfc47f1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpcDMeDTeoms9Zd-5CvdCZ87OInBGUuJqtApaXSfKAq8IR3ameWEKiiRR0dwOSFp1jLTO1AmASo7vg4mXtHJiQP9K~vQd08EKboHDjDxTh6CUWtGvuTpzoHpoGnefHZ-34z7FZQrf4Iox1Hv0y62VE0avgLdP1mbjSmJmUsWcRXAQPEnmMfE3QYC0BSNh1iPO5SFrpDhLh77phliMpSSOltuZFgl5vRiLGb9gt738x1cChehCjBF1SLWQeW7RB0MvZmHq5EFeFhUmLC4MbflMgsbfJ2LVkE4Pm9T6cqM5Ha6TuPVhVEhhOvqen8lOL-VNBVzJLFy8NXaoLXgvO6LPQ__'
const img_1 = 'https://s3-alpha-sig.figma.com/img/28de/5b2c/436c0b472b643abb58ba32973af9094b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nh4WSUEkQUQg3IS-UvXHdkKV64vAZ4XiEh6-VF467Q57wXsqymVjYBEq~I98tAIejr2X3IMXC-5r5BbqmVuQ6eC~zQlzLcSgd~DL4EItgPbCXEdjHMw5C2aFBrMSFXxIvW-LwvyK4JxLHRORLuFJGGk7x~K4p0Jv5HPao1lBKQ9Xla9fFLMJ0ZX6SYW1ESTgbmxwvffCOecHBSVkQRI4D0WU3ImsFWRrAfOBWwPgmwYz9LrLOmDD1enQStRshZNNB4QJbGbxfL39B0f6s4BOQuXpfWU6vebsqC8tYOnagRXBuaNn-8e6bJsEpmI97uVZDgV7y1XKOw~UdK-BdOr-Ug__'
const img_2 = 'https://s3-alpha-sig.figma.com/img/8bd1/cbca/ff4537db926dfeb0067a37eecda96e8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3r34r8s2FDQQoSYTXmo1DM5rZOoRIgQLCyw8EtAJ3ReIZCSdQVIHwbvSoHw~AzqvBb8yFPQ2vOURaKZgPtlYh1sk9TlYuGq3DCta7CdN7tNueqSYbySXhtIRoTm1s-UBRQnqCfBCVfOqfnH7TYnxwF2UiaPjdMOeJcuaPsWY49iIP8Qlzv-8V86sjnaIsulXoLLuHDQMdy1Ox9EMXjoJQry6v7o17u28U6o4dbttN0un1GY5g3un5o4QcAy5ynaJhG1iSpdqyfwCpUTwfI7X1CCAzbt93HDHJJoqFDHwUqd3HrS3oGTB1vAspKUpmvqRssLgDA1GPZmib9NsnAt9Q__'
const img_3 = 'https://s3-alpha-sig.figma.com/img/1e99/4fc1/edd4ba000bdfa85be11654df3de4ccf3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F0IMFytilkI3norIKnTuW13JwP5mEb2bjPkZIfRRvGzDN3bRKgrPHH~MLHZudKqI~LKoKpwAirN4nBlH8ymUj-ghPe6Ry2t1ggeY2NDKQG8CgNnkqrMprEtYl~SPwaTCOKimsxKSW7HD36wdmgWMLU9hhVIkIKHKRyxfV944fpEeTHIQahjorN5TNSjY5sJn0U9dIT6h1zXMc2rYmZj5QgbxHdXu7hA7INS1U3lr2KXdnc42SRruJWpD4Z7CRmCY0WWpjfVep66zBHnMF5XcyQfbtIjq3hFVVlQqPA7WdaFstAseWda4IUIX3OzvJFwkB5ThtZSNKJDIEHHh74bmbQ__'
const img_4 = 'https://s3-alpha-sig.figma.com/img/fa82/04ba/aa7ce09cc4e2e086c0a441a2bc6c3a41?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcws7pI5qGVJNbts84h1DQrPHduXqK93aBBPNkDPcoNwXV6W6Gw9dPdqmAzak8jU-2ATa4j~8rL7zWGKmaBnFpqrEvDtHA~3zOFqwbJKpmBqrp41nK8WpgS~8Woy1HIWX4-BcTeh8Wjgk2JApdTEiDeBd165Br81jFOjvGTpArtEJuT8Qlme0lq0JWxbQ24y792pxhta9bi7fV3ftdLLg9cwkaVb7pCc3m98uScurJsOxUoA0QLrB~XXx3O5EZZbplnDM4llrvab2BHrRLkayaUkFIgehWIA04lmUxV547CcI~LMT8b7w4cVVV5uS-9GrZvVh1G4kYs167bFIUO9Kg__'
const img_5 = 'https://s3-alpha-sig.figma.com/img/8c39/1934/dab98b8e77b48c65d7c3e2032f00af6c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVn5K0oUJbxNpzO~VAcpiZHA3aSRqxVWqLAgoyE55Sc3L9ADYdepp1ewBbc4LrUkmD7IQN2c-kkw8Kny8HC7sZRVu331ovEKnA5RhsPlzKEc6YtKT1YwQvH6bukmUVJ62gnTTPVWKDL0lNfGIA~ABS0qyPQlICEJF49t4pBo-b03f~dcLKaYBQ5fKBfBwOOvRw-oByy9cvQjL~JIKx3C-iQhyLGyrE2aEgMHcMPHjhjcVDfDTPaQdaMJTk-1WQ5zPlXE9im6bZ~oOrHuR-BHUex2PEpEqfVeqsj~yaEHCg2rdHZgqxj2P2dsBnQnOr8tuX8bOzmRE0SaecVHYQvFMA__'

return (
    <div className="min-w-290px max-w-395px ">
        <div className="flex transition-transform duration-500 ease-in-out overflow-x-auto rounded-lg">
          
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image src={img_0} fill className="object-cover"/>
          </div>
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image src={img_1} fill className="object-cover"/>
          </div>
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image src={img_2} fill className="object-cover"/>
          </div>
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image src={img_3} fill className="object-cover"/>
          </div>
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image src={img_4} fill className="object-cover"/>
          </div>
          <div className="relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image src={img_5} fill className="object-cover"/>
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
