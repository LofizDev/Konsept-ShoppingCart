import React from 'react';

export default function Item({item}) {
  return (
          <div className="show-shipping-item">
            <h5>{item.name} × {item.qty}</h5>
            <h6 className="sp-price">${item.price}</h6>
          </div>
  );
}
