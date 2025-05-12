import React, { useEffect } from 'react'
import chracterOne from './assets/img/DINNAOne.png'
import bgimg from './assets/img/bg.jpg'
import charimgtwo from './assets/img/DINNATwo.png'

function Home() {
  useEffect(()=>{

    var popImageFile=document.getElementById('popImageFile');
    var popImageText=document.getElementById('popImageText');

    function popImage(popImageFile){
      //for image animation
      var funPopImageFile=popImageFile;
      funPopImageFile.classList.add('poptop');
      setTimeout(()=>{
        popImgText(popImageText);
        popImageText.style.top='50%';
      },1000);
    };

    popImage(popImageFile);

    function popImgText(popImageText){
      //for image animation
      var funPopImageText=popImageText;
      funPopImageText.classList.add('popdown');
      
    };

  },[]);
  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="w-full h-screen relative overflow-hidden bggradient">
        <img src={chracterOne} alt="" className='absolute  left-1/2 transform -translate-x-1/2 z-40' id='popImageFile' />
        <h1 className='komikatitlefont absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-8xl font-bold select-none' id='popImageText'>Subscribe :)</h1>
        <img src={bgimg} alt="" className=' w-full h-screen opacity-1 z-20 ' id=''/>
      </div>
      {/* <div className="w-full h-screen  grid grid-row-10 relative">
        <div className="w-full p-9 row-span-5 ">
          <h1 className='komikatitlefont  text-3xl'>Welcome</h1>
          <p className='BetmBlack mt-11'>
           MR DINNA brings you tech tips, web development tutorials and digital creativity discover videos and coding content from Sri Lanka's rising tech YouTuber ! <br />
           Whether you're a beginner or a budding developer, you'll find helpful guides, web development tricks, and real-world projects that fuel your passion for tech. Join the community and level up your skills, one video at a time!
          </p>
        </div>
        <div className="w-full p-9 row-span-5 relative">
          <img src={charimgtwo} alt="" className='absolute w-full md:w-1/4 lg:w-1/3 left-9 bottom-0 z-40'/>
          <button className='text-white komikatitlefont bg-red-700 p-2 text-3xl absolute left-1/3 bottom-5 lg:bottom-28 sm:bottom-10 lg:p-4 sm:p-2'>
             <a href="https://www.youtube.com/@MR_DINNA" target='_blank'>Subscribe</a>
          </button>
        </div>  
      </div> */}
    </div>
    
  )
}

export default Home
