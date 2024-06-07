import { Link } from "react-router-dom"

interface LinkButtonProps {
  to: string;
  text: string;
  className?: string;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <>
      <Link to={props.to} className={props.className}>
        <button>
          {props.text}
        </button>
      </Link>
    </>
  )
}

export default LinkButton;
