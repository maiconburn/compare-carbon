/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

function ButtonActive(props) {
  const router = useRouter();
  const style = {
    background:
      router.pathname === props.href
        ? "linear-gradient( 75.7deg,  rgba(34,126,34,1) 3.8%, rgba(99,162,17,1) 87.1% )"
        : "none",
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
