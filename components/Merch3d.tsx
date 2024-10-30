'use client'
import Spline from '@splinetool/react-spline';

export default function Merch3d() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/5T1BBQHKiJD4wYwZ/scene.splinecode" 
        style={{height: "500px"}}
        onLoad={(spline) => {
          const tshirt = spline.findObjectByName("male_tshirt");
          if (tshirt) {tshirt.position.x += 25;}
        }}
      />
    </main>
  );
}
