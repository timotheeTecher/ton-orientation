//Libraries
import classes from "./Button.module.scss";

const Button = props => {
  //Variables
  let cssClasses = [classes.Button];
  
  //Logic
  if (props.variant && props.variant === "outlined") {
    cssClasses.push(classes.outlined);
  }

  return (
    <button
      className={cssClasses.join(' ')}
      onClick={props.onClick}
      type={props.type}
    >
      {props.startIcon ? 
        <span className={classes.Button__startIcon}>{props.startIcon}</span> 
        :
        null
      }
      
      <span className={classes.Button__label}>{props.children}</span>
      
      {props.endIcon ?
        <span className={classes.Button__endIcon}>{props.endIcon}</span> 
        :
        null
      }
    </button>
  );
}

export default Button;