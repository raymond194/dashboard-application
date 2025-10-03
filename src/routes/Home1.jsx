import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Home1 = () => {
  return (
    <div className="pl-4">
      <div className="flex gap-4 mb-6 pt-5 flex-wrap">
        {overviews.map((overview) => (
          <div key={overview.key} className={overview.classDiv}>
            <h2 className={overview.h2.class}>{overview.h2.value}</h2>
            <p className={overview.p.class}>{overview.p.value}</p>
          </div>
        ))}
      </div>

      {/* {Charts} */}

      <div className="bg-white shadow p-4 rounded h-80 [&_.recharts-surface]:outline-none [&_.recharts-surface]:border-none">
        <h2 className="text-gray-700 font-bold mb-4">User Growth</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

 const data = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 210 },
    { month: "Mar", users: 150 },
    { month: "Apr", users: 300 },
    { month: "May", users: 200 },
  ];


const overviews = [
  {
    key: 1,
    classDiv: "p-4 rounded bg-slate-300 shadow w-64",
    h2: { class: "text-gray-500 text-sm", value: "Total Users" },
    p: { class: "text-2xl font-bold", value: 1234 },
  },
  {
    key: 2,
    classDiv: "p-4 rounded bg-slate-300 shadow w-64",
    h2: { class: "text-gray-500 text-sm", value: "Active Users" },
    p: { class: "text-2xl font-bold", value: 567 },
  },
  {
    key: 3,
    classDiv: "p-4 rounded bg-slate-300 shadow w-64",
    h2: { class: "text-gray-500 text-sm", value: "New Signups" },
    p: { class: "text-2xl font-bold", value: 45 },
  },
   {
    key: 4,
    classDiv: "p-4 rounded bg-slate-300 shadow w-64",
    h2: { class: "text-gray-500 text-sm", value: " Old Signups" },
    p: { class: "text-2xl font-bold", value: 50 },
  },
];
export default Home1;
