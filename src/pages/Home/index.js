import React from "react";

import Jumbo from "../../components/Jumbo";
import Books from "../../container/Books";

const Home = () => {
  return (
    <main>
      <div id="headers" className="row border mt-3">
        <Jumbo title="What Books Should I Read?" />
        <Jumbo title="Books On My List" />
      </div>
      <Books />
    </main>
  );
};

export default Home;
