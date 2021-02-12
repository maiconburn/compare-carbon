/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import styles from "../styles/components/NavBar.module.scss";

function ButtonActive(props) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };
  const style = {
    border:
      router.pathname === props.href ? "1px solid #333" : "1px solid #fafafa",
  };
  return (
    <Button
      href={props.href}
      className={
        props.buttonClass == "buttonCalculate"
          ? styles.buttonCalculate
          : styles.buttonActiveInternal
      }
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
