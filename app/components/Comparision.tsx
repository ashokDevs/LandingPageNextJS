function Comparision() {
  const tickIconSrc =
    "/check.png";

  const competitorTickIconSrc = "/x.png"; // Replace with the actual URL

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-center mb-8">
        Which one would you pick?
      </h1>
      <div className="mt-10 flex flex-col lg:flex-row w-full items-center lg:justify-center">
        <div className="">
          <h2 className="bg-white  text-black text-2xl grid m-auto md:mr-7 border-solid border-2 border-black shadow-2xl shadow-black self-end card bg-base-300 rounded-box place-items-center p-4 w-fit">
            <p className="font-bold text-3xl">My Tool</p> <br /> <br />
            <ul className="list-none p-0 m-0">
              <li className="flex items-center">
                <img
                  src={tickIconSrc}
                  alt="Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>Generate Blogs that convert</p>
              </li>{" "}
              <br />
              <li className="flex items-center">
                <img
                  src={tickIconSrc}
                  alt="Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>update Blogs</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={tickIconSrc}
                  alt="Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>Plagiarism free</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={tickIconSrc}
                  alt="Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>increase SERP</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={tickIconSrc}
                  alt="Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>increase your MRR</p>
              </li>
              <br />
            </ul>
          </h2>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="">
          <h2 className="grid text-2xl m-auto md:ml-7 card bg-base-300 rounded-box place-items-center p-4 w-fit lg:items-stretch">
          <p className="font-bold text-3xl">Other Tools</p><br />
            <br />
            <ul className="list-none p-0 m-0">
              <li className="flex items-center">
                <img
                  src={competitorTickIconSrc}
                  alt="Competitor Checkmark"
                  
                  height="10px"
                  width="10px"
                  className="mr-2 "
                />
                <p>Generate Blogs that convert</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={competitorTickIconSrc}
                  alt="Competitor Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>update Blogs</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={competitorTickIconSrc}
                  alt="Competitor Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>Plagiarism free</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={competitorTickIconSrc}
                  alt="Competitor Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>increase SERP</p>
              </li>
              <br />
              <li className="flex items-center">
                <img
                  src={competitorTickIconSrc}
                  alt="Competitor Checkmark"
                  height="10px"
                  width="10px"
                  className="mr-2"
                />
                <p>increase your MRR</p>
              </li>
              <br />
            </ul>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Comparision;
