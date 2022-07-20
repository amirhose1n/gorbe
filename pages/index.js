import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
 
  const menus = [
    {image : 'Gorbe.png' , link : '/gorbe'},
    {image : 'Illustration.png' , link : '/illustration'},
    {image : 'Graffiti.png' , link : '/graffiti'},
    {image : 'Store.png' , link : 'https://everythingbygorbe.com/'},
    {image : 'Contact.png' , link : '/contact'},
  ]
   
  return (
  <>
    <Image src={'/images/gorbe.png'} layout='fill'  objectFit='cover'/>
      <div className='mainmenu h-screen flex m-0 z-50 w-full min-h-full flex justify-center items-center'> 
        <div className='relative flex flex-col text-center pt-20 items-center gap-y-6'>
          {menus.map(({image, link}) => (
            <div key={image} className='hover:scale-125 transition-all duration-200'>
              <Link href={link} >
                <a>
                  <img
                    src={`/images/texts/${image}`} 
                    alt={image}
                    layout="fill" 
                    className="!object-contain !w-auto !relative "
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
   </>
 
  )
}
