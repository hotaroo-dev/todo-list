export default function Progress() {
  const progress = [
    {
      date: `Day 1`,
      title: "Learn about Ethereum",
      description:
        "After learning about Ethereum's blockchain, smart contracts, and web3, I discovered that the cryptocurrency (ETH) is called Ether.",
    },
    {
      date: `Day 2`,
      title: "Project setup",
      description:
        "Using Next.js, tailwindcss, framer motion and Integrate smart contracts with ethers.js.",
    },
    {
      date: `Day 3 - 4`,
      title: "Build User Interface",
      description:
        "This is a challenging part for me when selecting which UI to use for the project. I spend a lot of time searching for the appropriate UI.",
    },
    {
      date: `Day 5 - 7`,
      title: "Integrate frontend with smart contracts",
      description:
        "I spend a significant amount of time integrating and testing smart contracts. Truffle and Ganache are excellent tools for this purpose.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-screen-md">
      <ol className="relative border-s border-gray-200">
        {progress.map((p) => (
          <li key={p.date} className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {p.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500">
              {p.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
