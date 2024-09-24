import React from "react";

const ImportantDates: React.FC = () => {
  interface DateInfo {
    label: string;
    date: string;
  }

  const dates: DateInfo[] = [
    {
      label: "Last Date of Abstract Submission",
      date: "June 20, 2024",
    },
    {
      label: "Abstract Acceptance ",
      date: "June 22, 2024",
    },
    {
      label: "Full Length Paper ",
      date: "June 26, 2024",
    },
    {
      label: "Regular Registration",
      date: "June 26, 2024",
    },
    {
      label: "Late Registration",
      date: "June 29, 2024 ",
    },
  ];
  return (
    <div className="flex flex-col items-center p-4">
      <div className=" p-4 bg-gray-200 rounded-lg">
        <center>
          <p className="text-primary text-3xl font-bold">Important Dates</p>
        </center>
        <table className="w-full">
          <tbody>
            {dates.map((dateInfo, index) => (
              <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                <td className=" text-left p-2 pe-12">
                  <b className="text-black">{dateInfo.label}</b>
                </td>
                <td className="text-right p-2">
                  <strong className="text-black">{dateInfo.date}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
