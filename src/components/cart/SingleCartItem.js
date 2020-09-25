import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCartItem = (props) => {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [syncLoading, setSyncLoading] = useState(false);

  const { id: orderItemId } = props.item;
  const handleClickQtyButton = (btn) => {
    if (btn === 'minus') {
      if (quantity === 1) return false;
      setQuantity(quantity - 1);
    } else {
      if (quantity === 3) return false;
      setQuantity(quantity + 1);
    }
  }

  const handleQuantitySync = () => {
    setSyncLoading(true);
    props.changeCartQuantity(orderItemId, quantity);
  }

  const { item } = props;

  const handleRemoveFromCart = () => {
    props.removeFromCart(item.id)
  }


  const renderSyncBtn = syncLoading ? (
    <i className="fas fa-sync-alt mr-1 cursor-progress fa-spin text-info"
      title="Update"
    >
    </i>
  ) : (
      <i className="fas fa-sync-alt mr-1 cursor-pointer"
        onClick={handleQuantitySync}
        title="Update"
      >
      </i>
    );

  return (
    <tr>
      <td className="product-remove">
        <span className="cursor-pointer" onClick={handleRemoveFromCart}><i className=" ti-close "></i></span>
      </td>
      <td className="product-img">
        <Link to={`/products/${item.slug}`}><img src={item.image} alt="" style={{ width: 100 }} /></Link>
      </td>
      <td className="product-name"><Link to={`/product/${item.slug}`}>{item.product_name}</Link></td>
      <td className="product-price"><span className="amount">${item.price - item.discount}</span></td>
      <td className="cart-quality">
        <div className="product-details-quality quality-width-cart">
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={() => handleClickQtyButton('minus')}>-</div>
            <input className="cart-plus-minus-box" type="text" name="qtybutton" value={quantity} readOnly />
            <div className="inc qtybutton" onClick={() => handleClickQtyButton('plus')}>+</div>
          </div>
        </div>
      </td>

      <td className="cart-sync">
        {renderSyncBtn}
      </td>
      <td className="product-total"><span>${item.total_price}</span></td>
    </tr>
  );
}

export default SingleCartItem;
