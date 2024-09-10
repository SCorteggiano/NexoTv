"use client";
import { useSeries } from "@/helpers/hooks";
import { useEffect, useState } from "react";

const Serie = ({ params }: any) => {
  const { series } = useSeries();
  const [serie, setSerie] = useState<any>(null);
  const serieId = params.id;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.voomly.com/embed/embed-build.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (series && serieId) {
      const selectedSerie = series.find((serie: any) => serie.id === serieId);
      setSerie(selectedSerie);
    }
  }, [series, serieId]);

  if (!serie) return <p className="text-center text-8xl m-12">Loading...</p>;

  return (
    <div style={{ margin: "auto" }} className="h-auto w-10/12">
      {serie.contentUrl && serie.contentUrl.length > 0 && (
        <div dangerouslySetInnerHTML={{ __html: serie.contentUrl[0] }} />
      )}
    </div>
  );
};

export default Serie;
