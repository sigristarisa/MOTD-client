import React, { useState, useEffect } from "react";

const Randomizer: React.FC = () => {
  const [mayoId, setMayoId] = useState<number>(0);

  const getRandomMayoId = (): void => {
    const maxMayoId = 100;
    const minMayoId = 1;
    const randomMayoId: number = Math.floor(
      Math.random() * (maxMayoId - minMayoId) + minMayoId
    );
    setMayoId(randomMayoId);
  };

  useEffect(() => {
    const randomizeMayoId: ReturnType<typeof setInterval> = setInterval(
      getRandomMayoId,
      100
    );
    setTimeout(() => clearInterval(randomizeMayoId), 3000);
  }, []);

  return (
    <div>
      <p>{mayoId}</p>
    </div>
  );
};

export default Randomizer;
