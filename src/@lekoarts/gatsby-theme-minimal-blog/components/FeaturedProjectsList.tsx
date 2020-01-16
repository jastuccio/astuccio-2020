import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import FeaturedProject from './FeaturedProject'

export default () => {

  const FeaturedProjectsList = () => {
    return (
      <>
        test
        {/* <FeaturedProject
          href="https://jva-eatery.netlify.com/"
          title="Eatery"
          description="A restaurant website"
        />
        <Image fluid={data.file.childCloudinaryAsset.fluid} alt="eatery" />;
      </> */}
      </>
    )
  }

  const data = useStaticQuery(graphql`
    query {
          file(name: {eq: "eatery" }) {
          childCloudinaryAsset {
          fluid {
          ...CloudinaryAssetFluid
        }
        }
      }
    }
  `);
};

// export default FeaturedProjectsList
