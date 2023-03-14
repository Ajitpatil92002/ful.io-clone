import { Background_Upper } from "./components/Background";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { SearcEle } from "./components/Serach";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [DomainDetails, setDomainDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      let reqOptions = {
        url: `${import.meta.env.VITE_API_URL}${searchQuery}`,
        method: "GET",
      };

      let { data } = await axios.request(reqOptions);
      if (data === "Website Not Found") {
        alert("websiteNot Found");
        setLoading(false);
        setErr(true);
        return;
      }
      setErr(false);
      console.log(data);
      setDomainDetails(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert("error");
    }
  }

  return (
    <>
      <Navbar />
      <Background_Upper />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="flex flex-col items-center w-full max-w-4xl pt-48 text-center lg:w-[80%] lg:pt-20 xl:pt-30 lg:text-center mb-5">
            <span className="title-font text-sm mb-4 font-bold text-gray-900">
              Please Note That is not official Page (It is temporary site it
              will down with in 24HRS). Please Visit 
              <a className="underline px-2" href="https://ful.io/">
                https://ful.io/
              </a>
            </span>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              What Is The Web Built On?
            </h1>
            <p className="pr-0 mb-8 text-base sm:text-md xl:text-md">
              Uncover the technology stack behind any website.
              <br />
              Use our tools for lead generation, market analysis and competitor
              research.
            </p>
            <div className="flex justify-center w-full">
              <SearcEle
                loading={loading}
                setSearchQuery={setSearchQuery}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
      {DomainDetails && (loading ? " " : <Card data={DomainDetails} />)}
    </>
  );
}

export default App;
