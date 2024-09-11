import Image from "next/image";
import React from "react";
import SponsorCard from '../../components/SponsorCard';
const sponsorPage=()=>{

    return(
        <div className="py-8 w-full h-auto bg-[#212121] container mx-auto px-4" >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 place-content-center">
               <SponsorCard/> 
               <SponsorCard/> 
               <SponsorCard/> 
               <SponsorCard/> 
            </div>
        </div>
    )
}

export default sponsorPage;