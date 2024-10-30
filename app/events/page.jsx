"use client";

import { useState } from "react";
import Card from "../../components/Card";
import mathematics from "../../assets/Events/equinox.png";
import ideathon from "../../assets/Events/ideathon.png";
import gearup from "../../assets/Events/gearup.png";
import roborumble from "../../assets/Events/roborumble.png";
import "./page.css";
 
function Events() {
  const [activeEvent, setActiveEvent] = useState("Signature");

  const eventHandler = (eventName) => {
    setActiveEvent(eventName);
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      <h1 className="text-center text-5xl font-bold mb-12 text-white">
        EVENTS
      </h1>
      <div className="flex flex-wrap justify-center md:w-[80%] space-x-10">
        {[
          "Signature",
          "Technical",
          "Mathematics",
          "Robotics",
          "Gaming",
          "Finance",
          "Design",
          "Funevent",
          
        ].map((event) => (
          <button
            key={event}
            className={`text-white md:text-2xl text-lg mx-2 my-2 ${
              activeEvent === event ? "underline underline-offset-4 button-active" : ""
            }`}
            onClick={() => eventHandler(event)}
          >
            {event === "Funevent" ? "Fun Event" : event}
          </button>
        ))}
      </div>

      {/* Conditional rendering based on the active event */}
      {/* Signature */}
      <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-12">
        {activeEvent === "Signature" && (
          <Card
            title="Ideathon"
            image={ideathon}
            prize="Worth 10k+ Prizes"
            description="It will be a team event where the goal of each team will be to identify a real world problem and propose a solution that is technically feasible along with statistics and facts."
            link="https://unstop.com/hackathons/ideathon-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1154145?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
          />
        )}

        {/* Technical */}
        {activeEvent === "Technical" && (
          <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-12">
            <Card
              title="Cook-a-Code"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Where Teams Compete and Code Collides. Engage in intense coding battles against rival teams. Outthink, outcode, and claim victory in the ultimate coding contest!"
              link=" https://unstop.com/hackathons/cook-a-code-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1188829?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />

            <Card
              title="Debug-athon"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Where Teams Compete and Code Collides. Engage in intense coding battles against rival teams. Outthink, outcode, and claim victory in the ultimate coding contest!"
              link="https://unstop.com/hackathons/debugathon-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1188974?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"            
            />

            <Card
              title="Trio Code Jam"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Trio Code Jam: Team Up, Code Hard, Conquer Challenges - Where Three Minds Unite to Master Competitive Programming!"
              link="https://unstop.com/hackathons/trio-codejam-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1188872?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />

            <Card
              title="Tech Hunt"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Encourage creative and innovative thinking with diverse technical challenges. Through collaborative problem-solving and brainstorming sessions, participants will experience a culture of innovation, driving out-of-the-box solutions and fresh ideas"
              link=" https://unstop.com/hackathons/techhunt-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1198678?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
          </div>
        )}

        {/* Mathematics */}
        {activeEvent === "Mathematics" && (
          <Card
            title="EQUINOX"
            image={mathematics}
            prize="Worth 10k+ Prizes"
            description="A Battle of Mathematical Minds. Unite your team to tackle challenging problems. Shine bright and prove your mastery in the ultimate math contest!"
            link=" https://unstop.com/quiz/equinox24-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1201272?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
          />
        )}

        {/* Robotics */}
        {activeEvent === "Robotics" && (
          <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-12">
            <Card
              title="Gear Up"
              image={gearup}
              prize="Worth 10k+ Prizes"
              description="Where Speed Meets Innovation. Compete in a thrilling team event as your robots race to victory. Showcase your engineering skills and creativity in the ultimate robotic showdown!"
              link="https://unstop.com/competitions/gear-up-robot-racing-showdown-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1201160?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"            
            />

            <Card
              title="RoboQuest"
              image={roborumble}
              prize="Worth 10k+ Prizes"
              description="Unleash Your Innovation! Build robots using any tech stack and hardware in this ultimate robotics showdown. Push the limits of creativity and engineering to craft cutting-edge machines that defy expectations!"
              link=" https://unstop.com/competitions/gear-up-robot-racing-showdown-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1201160?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
          </div>
        )}

        {/* Gaming */}
        {activeEvent === "Gaming" && (
          <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-12">
            <Card
              title="VALORANT"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Multiplayer first-person shooter. Two opposing teams, the Attackers and the Defenders, of 5 players each, compete in different game modes to complete objectives such as securing a location to plant or defuse a spike in a 25 rounds game."
              link="https://unstop.com/events/valorant-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1199092?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
            <Card
              title="CALL OF DUTY (MOBILE)"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Call of Duty: Mobile is an online multiplayer battle royale game which can be played in solo, duo or squad in either TPP or FPP mode."
              link="https://unstop.com/events/codm-cerebro-24-25-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1200758?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
            <Card
              title="BATTLEGROUND MOBILE INDIA (BGMI)"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="BGMI (Battlegrounds Mobile India) is an online multiplayer battle royale game where you can compete solo, in duos, or in squads. Choose between TPP (Third-Person Perspective) or FPP (First-Person Perspective) modes for your ultimate survival experience."
              link="https://unstop.com/events/bgmi-cerebro-24-25-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1200685?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
            <Card
              title="ROCKET LEAGUE"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Rocket League is an exhilarating online multiplayer game that blends soccer with rocket-powered vehicles. Play solo, in duos, or as a team, and showcase your aerial acrobatics and precision driving to score goals and claim victory in this high-octane sports experience."
              link="https://unstop.com/events/rocket-league-cerebro-24-25-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1200765?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
          </div>
        )}

        {/* Finance */}
        {activeEvent === "Finance" && (
          <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-12">
            <Card
              title="Prudentia"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Prudentia: Dive into the Thrill of Mock Stock Market Competition! Manage 10 lakhs of virtual money, strategize investments, and navigate market fluctuations. Showcase your financial acumen and compete to build the most successful portfolio in this high-stakes simulation."
              link="https://unstop.com/competitions/prudentia24-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1202373?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
            <Card
              title="Paper Trading"
              image={mathematics}
              prize="Worth 10k+ Prizes"
              description="Test Your Trading Skills Offline! Simulate stock market transactions with paper trading, using mock funds to practice strategies and make decisions without financial risk. Sharpen your trading tactics and prepare for real-world challenges in this hands-on, offline experience."
              link="https://unstop.com/competitions/retro-market-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1200684?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
            />
          </div>
        )}

        {/* Design */}
        {activeEvent === "Design" && (
          <Card
            title="Design TO Develop"
            image={mathematics}
            prize="Worth 10k+ Prizes"
            description="Design to Develop: A Comprehensive Platform for Showcasing Skills in the Entire Design and Development Lifecycle. In this event, 3-member teams will be challenged to conceptualize, design, and develop a fully-functional front-end prototype. It is an opportunity to encourage creativity, innovation, and practical application of design principles while fostering collaboration, enhancing presentation skills, and recognizing excellence in both design and development."
            link="https://unstop.com/hackathons/design-to-develop-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1198481?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
          />
        )}

        {/* Fun Event */}
        {activeEvent === "Funevent" && (
          <Card
            title="Rubik's Rumble"
            image={mathematics}
            prize="Worth 10k+ Prizes"
            description="A Battle of Mathematical Minds. Unite your team to tackle challenging problems. Shine bright and prove your mastery in the ultimate math contest!"
            link="https://unstop.com/events/rubiks-rumble-cerebro-2024-25-indian-institute-of-information-technology-vadodara-1184699?lb=FKjhO56&utm_medium=Share&utm_source=shortUrl"
          />
        )}

      </div>
    </div>
  );
}

export default Events;
