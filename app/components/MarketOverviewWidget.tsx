"use client";

import { useEffect, useRef, memo } from "react";

function MarketOverviewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && container.current.innerHTML === "") {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: true,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "100%",
        height: "500",
        tabs: [
          {
            title: "Índices",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
              { s: "FOREXCOM:NSXUSD", d: "US 100" },
              { s: "FOREXCOM:DJI", d: "Dow 30" },
              { s: "INDEX:NKY", d: "Nikkei 225" },
            ],
            originalTitle: "Indices"
          },
          {
            title: "Cripto",
            symbols: [
              { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
              { s: "BINANCE:ETHUSDT", d: "Ethereum" },
              { s: "BINANCE:SOLUSDT", d: "Solana" },
            ]
          }
        ]
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={container} className="w-full" style={{ height: "500px" }} />
  );
}

export default memo(MarketOverviewWidget);
