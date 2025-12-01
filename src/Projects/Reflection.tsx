import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface ReflectionParams {
    navFunc: (link: string) => void
}

type Entry = {
  [key: string]: string | number;
};

const Reflection = ({navFunc} : ReflectionParams) => {

  const [data, setData] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace with your published TSV URL from Google Sheets
        // File > Share > Publish to web > Tab-separated values (.tsv)
        const tsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJNnK7Uzr1ilUNczn4gvIwl8TjtFVOPXwLzD_wm7h3ZRQr-8Du1dVBYIWQmWBvMpFcff0IhnHx5YQu/pub?gid=966651041&single=true&output=tsv";

        const res = await fetch(tsvUrl);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const tsvText = await res.text();

        // Parse TSV to JSON
        const lines = tsvText.split('\n');
        const headers = lines[0].split('\t').map(h => h.trim());

        const parsed = lines.slice(1)
          .filter(line => line.trim()) // Remove empty lines
          .map(line => {
            const values = line.split('\t');
            const obj: Entry = {};
            headers.forEach((header, i) => {
              obj[header] = values[i]?.trim() || '';
            });
            return obj;
          });

        setData(parsed);
      } catch (err: any) {
        console.error("Failed to fetch survey data", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>No entries yet.</div>;

  const headers = Object.keys(data[0]);
  console.log("DATA: ", data)

    return <>
        <div className={styles.menu}>
            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/intertidal">Intertidal</Link></li>
                    <li><Link to="https://docs.google.com/document/d/1SKFlFGR8Am_kIG0-sL_NDgGAwZA2eXAljyl3XXZKHag/edit?usp=sharing" target="_blank">CV</Link></li>
                </ul>
            </nav>
        </div>

        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.content}>
                    <h2>Reflection</h2>
                    <p>
                        Add your reflection content here.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Reflection;
