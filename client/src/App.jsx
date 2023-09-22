import toast from "react-hot-toast";
import app_api from "./config";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    app_api
      .get("/")
      .then((res) => setData(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return <h1 className="text-3xl font-bold underline">{data}</h1>;
}
