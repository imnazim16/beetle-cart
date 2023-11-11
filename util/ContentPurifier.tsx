import React from 'react'
export interface props {
    content: string,
}
function createMarkup(st:string){
    return {__html: st}
}
const ContentPurifier = ({content}:props) => {
    let test = createMarkup(content)
    // console.log(content)
  return (
    <>
        <div dangerouslySetInnerHTML={test} />
    </>
  )
}

export default ContentPurifier