import React from 'react'

export default function bai3(props:any) {
    const {params} = props;
  return (
    <div>
        <p>Product Id: {params.idproduct}</p>
    </div>
  )
}
