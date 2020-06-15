import React from "react";
import { Link } from "gatsby";
import { duplicateVariableMessage } from "graphql/validation/rules/UniqueVariableNames";
// Components
// Hooks
import { useHeroQuery } from "hooks/useHeroQuery"
// Styles

const Hero = () => {
  const { 
    heroImage, 
    heroImageText, 
    heroImageBtnText, 
    heroImageBtnLink 
  } = useHeroQuery();
  console.log(heroImage);
  return (
    <div>
      <div>
        BG Image
      </div>
      <div>
        <h2>{heroImageText}</h2>
        <Link to={heroImageBtnLink}>
          <button>{heroImageBtnText}</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
