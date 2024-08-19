import React from 'react'

export default function bai4(props:any) {
    const {params} = props;
  return (
    <div>
        <p>Company name: {params.namecompany}</p>
    </div>
  )
}
