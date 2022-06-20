import { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}></input>;
};

export default CheckBox;
