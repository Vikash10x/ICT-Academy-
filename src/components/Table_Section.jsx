import React from "react";

const data = [
  {
    position: 1,
    name: "Muthayammal Engineering College (Autonomous)",
    state: "Tamil Nadu",
  },
  { position: 2, name: "Dr. NGP Institute of Technology", state: "Tamil Nadu" },
  { position: 3, name: "Sri Sairam Engineering College", state: "Tamil Nadu" },
];

export const Table_Section = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="text-5xl text-[#05255f] font-bold mt-1">
            Past Winners
          </h1>
          <h4 className="text-3xl text-black my-3">
            National Level Top 3 Winners
          </h4>
          <table className="w-full bg-[#05255f] text-center">
            <thead className="text-white">
              <tr>
                <th className="border border-[#dee2e6]">Position</th>
                <th className="border border-[#dee2e6]">
                  Name of the Institution
                </th>
                <th className="border border-[#dee2e6]">State</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr>
                  <td className="border border-[#dee2e6] bg-[#fff]">
                    {item.position}
                  </td>
                  <td className="border border-[#dee2e6] bg-[#fff]">
                    {item.name}
                  </td>
                  <td className="border border-[#dee2e6] bg-[#fff]">
                    {item.state}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
