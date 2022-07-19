import Image from 'next/image'
import Link from 'next/link';
import mainBackGround from '../public/images/gorbe.png';

export default function Home() {
 
  const menus = [
   'Gorbe',
   'illustration',
   'Graffiti',
   'Store',
   'Contract'
  ]
   
  return (
  <>
    <Image src={mainBackGround} layout='fill'  objectFit='cover'/>
      <div className='mainmenu h-screen flex m-0 z-30 w-full min-h-full flex justify-center items-center'> 
        <div className='relative flex flex-col text-center pt-6 '>
          {menus.map(e => (
            <Link href='#' ><a className='hover:scale-125 transition-all duration-300 font-[lacquer] text-white text-[3rem] cursor-pointer'>{e}</a></Link>
          ))}
        </div>
      </div>
   </>
 
  )
}
