import { useState, type FC, useCallback, useEffect } from "react";

import { FIBER_BASE_URL } from "../../constants/servers";

type Props = {
  value: string;
};

const HelloReact: FC<Props> = ({ value }) => {
  const [data, setData] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsError(false);

    try {
      const res = await fetch(FIBER_BASE_URL);
      const data = await res.text();

      setData(data);
    } catch {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      className={
        "flex items-center gap-4 rounded-xl border-2 border-blue-500 p-4"
      }
    >
      <iconify-icon
        class={"text-6xl font-bold text-blue-500"}
        icon={"simple-icons:react"}
      />
      <div>
        <h1 className={"text-2xl font-bold text-blue-500"}>Hello, React!</h1>
        <p>
          <span className={"font-bold"}>Hono value:</span> {value}
        </p>
        <p>
          <span className={"font-bold"}>Fiber value:</span>{" "}
          {isError ? "Error" : !data ? "Loading..." : data}
        </p>
      </div>
    </div>
  );
};

export default HelloReact;
