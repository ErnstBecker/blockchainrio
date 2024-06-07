import LinkButton from "./LinkButton";

interface ButtonProps {
  text: string;
  type: string;
  style?: string;
}

const Button = (props: ButtonProps) => {
  const defaultButtonStyle = "border-4 rounded-full border-greenNew p-4 text-2xl text-center w-96 mx-auto"
  const propsStyle = `${defaultButtonStyle} ${props.style}`

  if (props.type === "full") {
    const buttonStyle = `${propsStyle} bg-greenNew text-blackNew font-semibold`
    return (
      <>
        <LinkButton to="/" text={props.text} className={buttonStyle}/>
      </>
    )
  }

  if (props.type === "clear") {
    const buttonStyle = `${propsStyle} text-greenNew`
    return (
      <>
        <LinkButton to="/" text={props.text} className={buttonStyle}/>
      </>
    )
  }
}

export default Button;
