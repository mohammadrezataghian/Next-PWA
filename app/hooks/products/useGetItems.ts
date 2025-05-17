import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:7979/pub/info");
        setItems(response?.data);
      } catch (err: any) {
        console.error("Failed to fetch items", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  return { items, loading, error };
}
// const response = await axios.post("http://localhost:7979/pub/info",{name:"reza"});