import React from "react";
import { Link } from "gatsby";
import { duplicateVariableMessage } from "graphql/validation/rules/UniqueVariableNames";
// Components
// Hooks
// Styles

const Hero = () => {

  return (
    <div>
      <div>
        BG Image
      </div>
      <div>
        <h2>title</h2>
        <Link to ="/">
          <button>Click Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
