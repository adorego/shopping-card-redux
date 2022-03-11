import {useDispatch, useSelector} from "react-redux";

import classes from './CartButton.module.css';
import {uiActions} from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartAmount = useSelector(state => state.cart.totalAmount);

  const onClickCartButton = () =>{
    dispatch(uiActions.toogleCart());
  }
  return (
    <button onClick={onClickCartButton} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
