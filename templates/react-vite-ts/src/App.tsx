import { useEffect, useState } from "react";

export default function App() {
  const [q, setQ] = useState("");
  const debounced = useDebounce(q, 300);

  useEffect(() => {
    if (!debounced) return;
    console.log("search:", debounced);
  }, [debounced]);

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>React Kata: Debounced Search</h1>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="type..." />
      <p>value: {q}</p>
    </main>
  );
}

function useDebounce<T>(value: T, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return v;
}
