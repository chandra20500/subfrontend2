import React, { useState } from "react";

const Scroler = ({ getcurr }) => {
  const [pages, setpages] = useState(5);
  const x = [1, 2, 3, 4, 5];
  return (
    <div className="pagination">
      <a href="#">&laquo;</a>
      {x.map((s) => (
        <a
          href="#"
          onClick={() => {
            getcurr(s);
          }}
        >
          {s}
        </a>
      ))}
      <a href="#">&raquo;</a>
    </div>
  );
};

export default Scroler;
