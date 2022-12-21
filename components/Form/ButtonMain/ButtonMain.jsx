import css from "./ButtonMain.module.scss";
import PropTypes from "prop-types";

function Component({ styles, type, children, ...props }) {
  styles = styles ? styles : "primary"; // primary, secondary, secondary-outline, outline
  type = type ? type : "button";
  const isDisabled = props.disabled ? css["btn--disabled"] : "";
  const isRadio = type === "radio" ? css["btn--radio"] : "";

  return (
    <button
      type={type}
      className={`${css.btn} ${css[`btn--${styles}`]} ${isDisabled} ${isRadio}`}
      {...props}
    >
      {children}
    </button>
  );
}

Component.propTypes = {
  styles: PropTypes.string,
  type: PropTypes.string,
};

export default Component;
