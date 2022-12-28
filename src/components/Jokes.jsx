import React, { useState, useEffect } from "react";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJoke = () => {
    setLoading(true);
    axios
      .get("https://v2.jokeapi.dev/joke/Any", {
        params: {
          blacklistFlags: "nsfw,religious,political,racist,sexist,explicit",
          type: "single",
        },
      })
      .then((response) => {
        setJoke(response.data.joke);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  if (loading) {
    return (
      <BounceLoader
        color="#36d7b7"
        className="flex flex-col justify-center items-center"
      />
    );
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div className="bg-yellow-500 flex justify-center place-items-center h-screen ">
      <div className="w-full max-w-xl p-6 bg-gray-600 border rounded-xl shadow-2xl  flex flex-col justify-center items-center space-y-10">
        <span className=" text-9xl">&#128514;</span>
        <p className="flex-wrap: wrap text-lg text-white font-medium word text-center">
          {joke}
        </p>
        <button
          onClick={getJoke}
          className=" inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Random Jokes
        </button>
      </div>
    </div>
  );
};

export default Jokes;
