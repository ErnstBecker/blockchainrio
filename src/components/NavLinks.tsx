import LinkButton from "./LinkButton";

interface NavLinksProps {
  text: string;
  url: string;
}

const NavLinks = (props: NavLinksProps) => {
  return (
    <>
      <LinkButton to={props.url} text={props.text} className="text-whiteNew font-bold text-xl hover:text-greenNew"/>
    </>
  )
}

export default NavLinks
