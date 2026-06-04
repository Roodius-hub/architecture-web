import { useState } from "react";

export function Spinner() {
  const [loading, setLoading] = useState(false);
const [done, setDone] = useState(false);

const handleClick = async () => {
  setLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 1500));

  setLoading(false);
  setDone(true);
};

    return (
        <>
        <button
  onClick={handleClick}
  disabled={loading || done}
  className={`px-4 py-2 rounded text-white ${
    done ? "bg-green-500" : "bg-blue-500"
  } ${loading || done ? "cursor-not-allowed opacity-70" : ""}`}
>
  {loading ? (
    <span className="flex items-center gap-2">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Loading...
    </span>
  ) : done ? (
    "Completed ✓"
  ) : (
    "Submit"
  )}
</button>
        </>
    )

}