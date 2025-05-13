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
      <div className="section-home-1">
        
        <div className="p-9">
          <h1 className='komikatitlefont  text-3xl'>Welcome</h1>
          <p className='BetmBlack mt-11 text-justify '>
           MR DINNA brings you tech tips, web development tutorials and digital creativity discover videos and coding content from Sri Lanka's rising tech YouTuber ! <br />
           Whether you're a beginner or a budding developer, you'll find helpful guides, web development tricks, and real-world projects that fuel your passion for tech. Join the community and level up your skills, one video at a time!
          </p>
        </div>
        <div className="relative ">
            <div className="w-auto absolute left-9 bottom-0">
              <div className="w-full flex  items-start">
                <img src={charimgtwo} alt="" className=' w-2/3 md:w-1/3 lg:w-1/3 z-40 ' />
                <button className='text-white komikatitlefont bg-red-700 p-1 text-2xl subdiv lg:p-4 sm:p-1 w-40 h-10 md:h-20 lg:h-20 mt-10 md:mt-20 lg:mt-20 rounded-3xl md:rounded-full lg:rounded-full'>
                  <a href="https://www.youtube.com/channel/UCvaLtvDhDegWO6lGrou6sNQ?sub_confirmation=1" target='_blank'>Subscribe</a>
                </button>
              </div>
            </div>
          </div>  
        </div>
      </div>
    
  )
}

export default Home
