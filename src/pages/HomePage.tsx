import { useEffect } from "react";
import { BrowserRouter as Route, useNavigate, useLocation } from "react-router-dom"

// Components
import EventCard from "../components/EventCard"
import Button from "../components/Button"
import NavLinks from "../components/NavLinks"

import Logo from "../assets/blockchainlogo.png"

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          navigate(`#${id}`, { replace: true });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id, navigate]);

  return (
    <div id={id} style={{ height: "100vh" }}>
      {children}
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Section id="">
        <main className="flex h-auto relative bg-blackNew">
          <div className="sticky">
            <div className="bg-greenNew text-greenNew w-64 h-72 fixed top-0 left-28 -z-50">.</div>
            <div className="bg-greenNew text-greenNew w-[120px] h-40 fixed top-72 left-0 -z-50">.</div>
            <div className="bg-purpleNew text-purpleNew w-96 h-40 fixed top-[610px] left-[227px] -z-50">.</div>
            <div className="bg-purpleNew text-purpleNew w-32 h-16 fixed top-[766px] left-[610px] -z-50">.</div>

            <div className="bg-white text-white w-8 h-8 fixed top-[128px] left-[164px] -z-50">.</div>
            <div className="bg-white text-white w-[164px] h-16 fixed top-[96px] left-[0px] -z-50">.</div>

            <div className="bg-white text-white w-8 h-8 fixed top-[580px] left-[68px] -z-40">.</div>
            <div className="bg-white text-white w-16 h-16 fixed top-[518px] left-[36px] -z-40">.</div>
            <div className="bg-white text-white w-16 h-32 fixed top-[390px] left-[100px] -z-40">.</div>

            <div className="bg-white text-white w-16 h-64 fixed top-[194px] left-[674px] -z-50">.</div>
            <div className="bg-white text-white w-16 h-32 fixed top-[450px] left-[610px] -z-50">.</div>
            <div className="bg-white text-white w-8 h-16 fixed top-[194px] left-[610px] -z-50">.</div>
            <div className="bg-white text-white w-8 h-8 fixed top-[258px] left-[642px] -z-50">.</div>

            <div className="bg-white text-white w-16 h-16 fixed top-[610px] left-[674px] -z-50">.</div>

            <img src={Logo} className="h-[450px] mt-40  mr-[272px] z-50" alt="logo" />

          </div>
          <div className="relative flex-grow mt-10 ml-40">
            <nav className="flex mb-10 ml-1 gap-14 uppercase">
              <NavLinks url="/" text="SOBRE"></NavLinks>
              <NavLinks url="/" text="INSCREVA-SE"></NavLinks>
              <NavLinks url="/" text="EVENTO PRINCIPAL"></NavLinks>
              <NavLinks url="/" text="HACKATHON"></NavLinks>
            </nav>
            <aside className="ml-10">
              <div className="flex pb-3 gap-5">
                <EventCard title={"BLOCKCHAIN LEADERS"} day={23} month={"Julho"} type="top" />
                <EventCard title={"EVENTO PRINCIPAL"} day={24} month={"Julho"} type="top" />
                <EventCard title={"EVENTO PRINCIPAL"} day={25} month={"Julho"} type="top" />
              </div>
              <div className="flex pt-3 gap-6">
                <EventCard title={"BOOTCAMP"} day={23} month={"Julho"} type="bot" />
                <EventCard title={"PARTY"} day={25} month={"Julho"} type="bot" />
              </div>
              <div className="mt-8 flex flex-col gap-5 justify-center">
                <Button text="INGRESSOS DISPONÍVEIS" type="full" />
                <Button text="SEJA PATROCINADOR" type="clear" />
              </div>
            </aside>
          </div>
        </main>
      </Section>
      {/* <Section id="sobre">
        <h2 className="">Sobre</h2>
      </Section> */}
    </>
  )
}

export default HomePage;


{/* <Section id="">
<main className="relative left-3/4 top-2/4 mt-14">
<img src={Image} className="h-40" alt="logo" />
  <nav className="flex mb-10 gap-14 uppercase">
    <NavLinks url="/" text="Sobre"></NavLinks>
    <NavLinks url="/" text="Inscreva-se"></NavLinks>
    <NavLinks url="/" text="Evento principal"></NavLinks>
    <NavLinks url="/" text="Hackathon"></NavLinks>
    </nav>
  <aside className="top-3/4 uppercase">
  <div className="flex pb-3 gap-5">
  <EventCard title={"BLOCKCHAIN LEADERS"} day={23} month={"Julho"} type="top" />
  <EventCard title={"EVENTO PRINCIPAL"} day={24} month={"Julho"} type="top" />
  <EventCard title={"EVENTO PRINCIPAL"} day={25} month={"Julho"} type="top" />
  </div>
  <div className="flex pt-3 gap-6">
      <EventCard title={"BOOTCAMP"} day={23} month={"Julho"} type="bot" />
      <EventCard title={"PARTY"} day={25} month={"Julho"} type="bot" />
      </div>
      <div className="mt-8 flex flex-col gap-5 justify-center">
      <Button text="INGRESSOS DISPONÍVEIS" type="full"/>
      <Button text="SEJA PATROCINADOR" type="clear"/>
      </div>
      </aside>
      </main>
    </Section> */}
