import Image from "next/image";
import React from "react";
import FigmaImg from "../../assets/sponsorsPage/FigmaImg.svg";

const sponsorPage=()=>{

    return(
        <div className="pb-16 w-full h-auto bg-[#212121] flex justify-center items-center flex-col" >
            <div className="flex justify-center items-center flex-col py-8">
                <h1 className="text-4xl text-center tracking-wide m-4 font-elevon">TITLE SPONSORS</h1>
                <Image src={FigmaImg} width={200} height={100} alt="image" className="py-4 m-4"/>
                <p className="font-inter max-w-3xl flex justify-center text-center items-center px-4">We are proud to announce [Sponsor Name] as the Title Sponsor for Cerebro 2024: Clash of Intellects - Human vs AI, the flagship annual tech fest of IIIT Vadodara. Their unwavering support and commitment to innovation and technology make them a perfect partner for this groundbreaking event. With their backing, we are set to explore the cutting edge of human ingenuity and artificial intelligence.</p>
            </div>
            <div className="flex justify-center items-center flex-col py-8">
                <h1 className="text-4xl text-center tracking-wide m-4 font-elevon">ASSOCIATE SPONSORS</h1>
                <Image src={FigmaImg} width={200} height={100} alt="image" className="py-4 m-4"/>
                <p className="font-inter max-w-3xl flex justify-center text-center items-center px-4">We are excited to have [Sponsor Name] as our Associate Sponsor for Cerebro 2024: Clash of Intellects - Human vs AI. Their dedication to fostering innovation and supporting educational initiatives aligns perfectly with our vision for this year’s tech fest. Together, we aim to create a platform where technology and intellect converge in new and exciting ways.</p>
            </div>
            <div className="flex justify-center items-center flex-col py-8">
                <h1 className="text-4xl text-center tracking-wide m-4 font-elevon">EVENT SPONSORS</h1>
                <Image src={FigmaImg} width={200} height={100} alt="image" className="py-4 m-4"/>
                <p className="font-inter max-w-3xl flex justify-center text-center items-center px-4">A huge thanks to [Sponsor Name] for being the Event Sponsor for Cerebro 2024. Their involvement ensures that each event within our fest reaches new heights of engagement and excellence. From competitive challenges to thought-provoking discussions, [Sponsor Name] helps make these experiences unforgettable for participants and attendees alike.</p>
            </div>
            <div className="flex justify-center items-center flex-col py-8">
                <h1 className="text-4xl text-center tracking-wide m-4 font-elevon">FOOD & BEVERAGES SPONSORS</h1>
                <Image src={FigmaImg} width={200} height={100} alt="image" className="py-4 m-4"/>
                <p className="font-inter max-w-3xl flex justify-center text-center items-center px-4">We are proud to announce [Sponsor Name] as the Title Sponsor for Cerebro 2024: Clash of Intellects - Human vs AI, the flagship annual tech fest of IIIT Vadodara. Their unwavering support and commitment to innovation and technology make them a perfect partner for this groundbreaking event. With their backing, we are set to explore the cutting edge of human ingenuity and artificial intelligence.</p>
            </div>
        </div>
    )
}

export default sponsorPage;