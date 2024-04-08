export default function Progress() {
  const progress = [
    {
      date: `Day 1`,
      title: "Learn about Ethereum",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: `Day 2`,
      title: "Learn about Ethereum",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: `Day 3 - 4`,
      title: "Learn about Ethereum",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      date: `Day 5 - 7`,
      title: "Learn about Ethereum",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
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
