import React from 'react'

export default function page(props:any) {
    console.log("giá trị props",props);
    const {params} = props;
    
  return (
    <div>Trang chi tiết sản phẩm
        id sản phẩm là: {params.idproduct}
    </div>
  )
}
