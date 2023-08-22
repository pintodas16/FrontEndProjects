import axios from "axios";
import { useEffect, useState } from "react";
import customBackgroundColor from "../utils/customColor";

function Quote() {
  const [bgColor, setBgColor] = useState(customBackgroundColor());
  const [quote, setQuote] = useState({});

  const fetchQuote = async () => {
    const fetch = await axios.get("https://api.quotable.io/random");
    setQuote(fetch.data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleClick = () => {
    setBgColor(customBackgroundColor());
    setQuote(fetchQuote());
  };
  //   const color = "#ff0022";

  return (
    <section
      style={{
        backgroundColor: `${bgColor}`,
        transition: `background-color .6s all `,
      }}
      className="max-w-screen h-screen flex items-center justify-center"
    >
      <div
        id="quote-box"
        className="w-[40rem] bg-white border  px-10 py-8 rounded-xl"
      >
        <p
          id="text"
          className="text-3xl"
          style={{
            color: `${bgColor}`,
            transition: `color .6s all `,
          }}
        >
          <i className="fa-solid fa-quote-left ml-2"></i> {quote.content}
        </p>

        <h5
          id="author"
          className="opacity-70 flex justify-end text-lg mt-6"
          style={{
            color: `${bgColor}`,
          }}
        >
          - {quote.author}
        </h5>

        <div className="flex mt-6 justify-between">
          <div className="space-x-3  text-white ">
            <a
              id="tweet-quote"
              target="_top"
              title="quotes "
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= "${quote.content}" `}
              style={{
                backgroundColor: `${bgColor}`,
                transition: `background-color .6s all `,
              }}
              className="inline-block border p-3 bg-green-500 rounded-lg"
            >
              <i className="fa-brands fa-twitter "></i>
            </a>
            <a
              href=""
              style={{
                backgroundColor: `${bgColor}`,
                transition: `background-color .6s all `,
              }}
              className="inline-block border p-3 bg-green-500 rounded-lg"
            >
              <i className="fa-brands fa-tumblr"></i>
            </a>
          </div>
          <button
            id="new-quote"
            onClick={handleClick}
            className="py-2 px-6 border rounded-lg"
            style={{
              backgroundColor: `${bgColor}`,
              transition: `background-color .6s all `,
            }}
          >
            New quote
          </button>
        </div>
      </div>
    </section>
  );
}
export default Quote;
