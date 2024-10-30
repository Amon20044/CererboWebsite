import Image from "next/image";
import React from "react";
import SponsorCard from '../../components/SponsorCard';
import Cubelelo from '../../assets/sponsorsPage/Cubelelo_Logo_HR4.png';
import Evelelo_Light from '../../assets/sponsorsPage/Evepaper_Light.png';
import JDoodle from '../../assets/sponsorsPage/JDoodle_Logo_JPEG.jpg';
import Noticebard from '../../assets/sponsorsPage/noticebard.png';
import SF from '../../assets/sponsorsPage/SF_Logo_White.png';
import InterviewBuddy from '../../assets/sponsorsPage/InterviewBuddy_Logo_updated_White_BG.png'
const sponsorPage=()=>{

    return(
        <div className="py-8 w-full h-auto bg-[#212121] container mx-auto px-4" >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 place-content-center">
               <SponsorCard title="Cubelelo" Img={Cubelelo}/> 
               <SponsorCard title="EVEPAPER" Img={Evelelo_Light}/> 
               <SponsorCard title="JDoodle" Img={JDoodle} width={400}/> 
               <SponsorCard title="Noticebard" Img={Noticebard} width={400}/> 
               <SponsorCard title="Stubborn Factory" Img={SF}/> 
               <SponsorCard title="Interview Buddy" Img={InterviewBuddy} width={400}/>  
            </div>
        </div>
    )
}

export default sponsorPage;