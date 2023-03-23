import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="w-screen h-3/4 text-red-100 bg-cream-60 font-comfortaa grid place-items-center">
      <h2 className="text-4xl leading-relaxed">
        By the Mayo-Lover,<br></br> For the Mayo-Lover, <br></br>Of the
        Mayo-Lover.
      </h2>
      <div className="w-screen grid text-center text-xl leading-loose">
        <p>
          You might go along with a little bit of mayonnaise on toast,<br></br>{" "}
          but are you ready for mayonnaise on your rice,<br></br> your steamed
          vegetables, your potato chips?
        </p>
        <p>
          To expand the potential of mayonnaise,<br></br> MOTD will select your
          mayonnaise of the day – out of 100 variations!
        </p>

        <p>
          But be careful – you can only get one mayonnaise per day<br></br> to
          prevent your mayo-addiction.
        </p>
      </div>
      <p className="text-sm text-red-100 hover:text-red-60">
        creator: <a href="https://github.com/sigristarisa">Arisa Sigrist</a>
      </p>
    </div>
  );
};

export default AboutPage;
