
import AboutUs from "./components/aboutus";
import Client from "./components/client";
import MeetOurChef from "./components/meetourchef";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    <Client/>
    <Menu/>
    <MeetOurChef/>
    <Testimonial/>
    </>
  );
}