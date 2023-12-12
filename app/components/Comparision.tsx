function Comparision() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-center mb-8">
        Which one would you pick?
      </h1>
      <div className="flex flex-col lg:flex-row w-full">
        <h2 className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          My Tool
        </h2>
        <div className="divider lg:divider-horizontal">OR</div>
        <h2 className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          My Competitors
          <br />
          cSDjxz
        </h2>
      </div>
    </div>
  );
}

export default Comparision;
