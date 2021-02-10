/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

function ButtonActive(props) {
  const router = useRouter();
  const style = {
    border: router.pathname === props.href ? "1px solid #FFF" : "none",
    color: router.pathname === props.href ? "#FFF" : "#333",
    height: "35px",
    margin: "7px 5px",
    borderRadius: "5px",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <Button
      href={props.href}
      className={props.className}
      target={props.target}
      color={props.color}
      onClick={handleClick}
      style={style}
    >
      {props.children}
    </Button>
  );
}

export default ButtonActive;
