import React from "react"
import Face from "../images/face_black.svg"
import "../components/layout.css"

/*
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  return (
    <>
      <div class="face-image">
        <img src={Face} alt="face"></img>
      </div>
    </>
  )
}

export default Image
