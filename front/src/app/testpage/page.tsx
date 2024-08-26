'use client'
import React, { useEffect } from 'react';
import Head from 'next/head';

const Testpage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://embed.voomly.com/embed/embed-build.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id='wholeContainer' className='m-6'>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="Test page for Voomly embed" />
      </Head>
      <h1>Arcane Season 2 Official Teaser Trailer</h1>
      <div
        className="voomly-embed"
        data-id="Bo3sXsozPj1gOi1gb1NZi4huAWxmImDDlB2JFWYSYNEmZgBer"
        data-ratio="1.777778"
        data-type="v"
        data-skin-color="#008EFF"
        data-shadow=""
        style={{
          width: '100%',
          aspectRatio: '1.77778 / 1',
          background: 'linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%)',
          borderRadius: '10px'
        }}
      ></div>
    </div>
  );
};

export default Testpage;
