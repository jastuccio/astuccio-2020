import React from 'react'

const FeaturedProjectsListItem = ({ href, title, description, imgPath }) => {
  return (
    <>
      <a href={href}>
        <img src={imgPath} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </>
  )
}

export default FeaturedProjectsListItem
