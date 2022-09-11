import Image from 'next/image';
const HomeFrame = () => {
    return (
        <div className="w-full h-full">
              {/* <div className='absolute left-0 top-0 bottom-0 h-full w-full'>
                  <Image className='z-20' src='/frames/homeLeft.png' layout='fill' objectFit='cover'/>
                </div>
                <div className='absolute right-0 top-0 bottom-0 h-full w-full'>
                    <Image className='z-20' src='/frames/homeLeft.png' layout='fill' objectFit='cover'/>
                </div> */}
                <div className='absolute right-0 top-0 bottom-0 left-0 h-full w-full z-50'>
                    <Image className='z-20' src='/frames/shadows.svg' layout='fill' objectFit='cover'/>
                </div>
        </div>
    )
}

export default HomeFrame;