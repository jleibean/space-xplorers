import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NavBar from "../components/nav";
import styles from "../components/tech.module.css";
import TechDetails from "../components/tech/techDetails";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  const tech = [
    {
      name: "Launch Vehicle",
      photo: "launch-vehicle-portrait",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      photo: "spaceport-portrait",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space Caspule",
      photo: "space-capsule-portrait",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [selectedTech, setTech] = React.useState(0);
  return (
    <Layout home>
      <Head>
        <title>Space Xplorers Destinations</title>
      </Head>
      <div className={styles.mainSection}>
        <NavBar></NavBar>
        <h5> 03 Space Launch 101</h5>
        <main className={styles.techOverview}>
          <div className={styles.techDetails}>
            <div className={styles.techSelection}>
              {tech.map((t, index) => (
                <div className={styles.techButton}>
                  <Button
                    bssize="large"
                    className={`${styles.roundedCircle} rounded-circle ${
                      selectedTech === index ? styles.active : ""
                    }`}
                    onClick={() => setTech(index)}
                  >
                    {index + 1}
                  </Button>
                </div>
              ))}
            </div>
            <TechDetails selected={tech[selectedTech]} />
          </div>
          <div className={styles.techImage}>
            <Image
              priority
              src={`/images/technology/image-${tech[selectedTech].photo}.jpg`}
              height={500}
              width={493}
              alt=""
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
