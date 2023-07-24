import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NavBar from "../components/nav";
import styles from "../components/crew.module.css";
import React, { useState } from "react";
import Image from "next/image";
import CrewDetails from "../components/crew/crewDetails";
import { Button } from "react-bootstrap";

export default function Home() {
  const [selectedCrewMember, setSelectedCrew] = useState(0);
  const crewMembers = [
    {
      title: "Commander",
      name: "Douglas Hurley",
      photo: "douglas-hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      photo: "anousheh-ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
    {
      title: "Pilot",
      name: "Victor Glover",
      photo: "victor-glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      title: "Mission Specialist",
      name: "Mark Shuttleworth",
      photo: "mark-shuttleworth",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>Space Xplorers Destinations</title>
      </Head>
      <div className={styles.mainSection}>
        <NavBar></NavBar>
        <main className={styles.crewOverview}>
          <div className={styles.crewMemberDetails}>
            <h5> 02 Meet Your Crew</h5>
            <CrewDetails selected={crewMembers[selectedCrewMember]} />
            <div className={styles.crewSelection}>
              {crewMembers.map((crew, index) => (
                <Button
                  bssize="large"
                  className={`${styles.roundedCircle} rounded-circle ${
                    selectedCrewMember === index ? styles.active : ""
                  }`}
                  onClick={() => setSelectedCrew(index)}
                ></Button>
              ))}
            </div>
          </div>
          <div className={styles.crewImage}>
            <Image
              priority
              src={`/images/crew/image-${crewMembers[selectedCrewMember].photo}.png`}
              height={500}
              width={350}
              alt=""
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
