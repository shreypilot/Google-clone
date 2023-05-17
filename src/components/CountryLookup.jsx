"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => { console.log(data)
        // Use the geolocation data in your application
        setCountry(data.country_name)
        // console.log(data.country_name);
        // console.log(data.city);
        // console.log(data.latitude);
        // console.log(data.longitude);
      });
  }, []);
  return <div>{country}</div>;
}

// &ip=${process.env.NEXT_PUBLIC_IP_ADDRESS}