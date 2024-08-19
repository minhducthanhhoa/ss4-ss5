import React from 'react'

export default function page(props:any) {
    const {params} = props;
  return (
    <div>
        <p>Trang chi tiết dự án có Id: {params.id}</p>
    </div>
  )
}
