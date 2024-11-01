'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Cryptocurrency Data</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
