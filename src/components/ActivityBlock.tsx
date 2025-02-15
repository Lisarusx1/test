import React from "react";

const ActivityBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default ActivityBlock;
