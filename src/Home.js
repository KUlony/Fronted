import React from "react";
import NavBar from "./components/NavBar";
import "./Home.css";
import Think from "./think.png";
import search from "./search.png";

function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="home_search">
        <div className="home_search_lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          samjdnmlaskmdlksadl kaslk dmaslkdmlkasm
        </div>
        <img src={Think} alt="Girl in a jacket" className="think_img"></img>
        <div className="home_search_input">
          <form>
            {/* <label>maikan</label> */}
            <input type="text" required className="search_input" />
            <button className="search-button">
              <img src={search} width="10px" height="10px" />
            </button>
          </form>
        </div>
      </div>
      <div className="Home_post">koksok</div>
    </div>
  );
}

export default Home;
