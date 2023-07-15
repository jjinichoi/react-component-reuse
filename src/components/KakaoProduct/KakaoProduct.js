import React from "react";

const PRODUCT_LIST = [
  {
    id: 1,
    img: "https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa",
    itemName: "구름폭신필로우_라이언",
    price: "39,000원",
  },
  {
    id: 2,
    img: "https://t1.daumcdn.net/friends/prod/product/20201020152804391_8809721505915_AW_00.jpg?type=thumb&opt=R103x103@2xa",
    itemName: "구름폭신필로우_어피치",
    price: "39,000원",
  },
  {
    id: 3,
    img: "https://t1.daumcdn.net/friends/prod/product/20201020152905998_8809721505922_AW_00.jpg?type=thumb&opt=R103x103@2xa",
    itemName: "구름폭신필로우_무지",
    price: "39,000원",
  },
];

const KakaoProduct = ({ tag }) => {
  return (
    <>
      {tag !== "NEW" && (
        <ul>
          {PRODUCT_LIST.map((product) => (
            <li
              className={`item ${tag === "Good" ? "list" : "card"}`}
              key={product.id}
            >
              <img alt="item" src={product.img} />
              <div>
                <div>
                  <p>{product.itemName}</p>
                  <p className="price">{product.price}</p>
                </div>
                <button className="button" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default KakaoProduct;
