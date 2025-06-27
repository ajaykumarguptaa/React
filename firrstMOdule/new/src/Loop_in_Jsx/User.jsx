import React from "react";

export const User = ({ pass }) => {
  return (
    <div>
      <tbody>
        <tr key={pass.id}>
          <td>{pass.name}</td>
          <td>{pass.age}</td>
          <td>{pass.email}</td>
        </tr>
      </tbody>
    </div>
  );
};
