import Image from 'next/image'
import Link from 'next/link';
import mainBackGround from '../public/images/gorbe.png';

export default function Home() {
 
   
  return (
<>
 <Image src={mainBackGround} layout='fill'  objectFit='cover'/>
  
   <div className='mainmenu h-screen flex m-0  '> 
   
   
   <div className='relative m-auto'>
  
   <Link href='#' ><p className='font-[lacquer] text-white text-[3rem] cursor-pointer mt-8 ml-3 hover:text-[3.5rem] hover:py-[10px] sm:text-[2.5rem] ease-out duration-300 hover:font-bold hover:text-[#ef60bb] hover:tracking-[3px] sm:tracking-wider sm:hover:text-[2.7rem]'>Gorbe</p></Link>
   <Link href='#' ><p className='font-[lacquer] text-white text-[3rem] cursor-pointer sm:text-[2.5rem] hover:py-[10px] ease-out duration-300 hover:font-bold hover:text-[#ff6d49] sm:hover:text-[2.7rem] hover:tracking-[1px] sm:tracking-wider '>illustration</p></Link>
   <Link href='#' ><p className='font-[lacquer] text-white text-[3rem] cursor-pointer sm:text-[2.5rem] hover:text-[3.5rem] hover:py-[10px] ml-[1.5rem] ease-out duration-300 hover:font-bold hover:text-[#3bdf35] hover:tracking-[2px] sm:hover:text-[2.7rem] sm:tracking-wider '>Graffiti</p></Link>
   <Link href='#' ><p className='font-[lacquer] text-white text-[3rem] cursor-pointer sm:text-[2.5rem] hover:text-[3.5rem] hover:py-[10px] ml-3 ease-out duration-300 hover:font-bold hover:text-[#13efff] hover:tracking-[3px] sm:hover:text-[2.7rem] sm:tracking-wider '>Store</p></Link>
   <Link href='#' ><p className='font-[lacquer] text-white text-[3rem] cursor-pointer sm:text-[2.5rem] hover:text-[3.5rem] hover:py-[10px] ml-2 ease-out duration-300 hover:font-bold hover:text-[#a449ff] hover:tracking-[3px] sm:hover:text-[2.7rem] sm:tracking-wider '>Contact</p></Link>
   
   </div>


   </div>
   </>
 
  )
}
