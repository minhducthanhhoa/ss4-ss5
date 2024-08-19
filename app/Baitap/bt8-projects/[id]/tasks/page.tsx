import React from 'react'

export default function page(props:any) {
    const {params} = props;
  return (
    <div>
        <p>danh sách nhiệm vụ của dự án có Id: {params.id}</p>
    </div>
  )
}
