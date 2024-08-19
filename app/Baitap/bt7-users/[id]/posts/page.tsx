import React from 'react'

export default function page(props:any) {
    const {params} = props;
  return (
    <div>
        <p>Danh sách bài viết của User Id: {params.id}</p>
    </div>
  )
}
