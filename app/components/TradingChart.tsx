"use client";
import { useEffect, useRef } from 'react';
import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';

export default function TradingChart() {
    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        // Configuración del gráfico
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: 'transparent' },
                textColor: '#333',
            },
            width: chartContainerRef.current.clientWidth,
            height: 400,
            grid: {
                vertLines: { color: '#f0f0f0' },
                horzLines: { color: '#f0f0f0' },
            },
        });

        // En la versión 5 se usa addSeries(CandlestickSeries, ...)
        const candlestickSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#22c55e',
            downColor: '#ef4444',
            borderVisible: false,
            wickUpColor: '#22c55e',
            wickDownColor: '#ef4444',
        });

        // Datos de ejemplo (Fecha y Valor: Open, High, Low, Close)
        candlestickSeries.setData([
            { time: '2024-05-01', open: 32.51, high: 33.00, low: 31.00, close: 32.00 },
            { time: '2024-05-02', open: 32.00, high: 32.50, low: 31.00, close: 31.50 },
            { time: '2024-05-03', open: 31.50, high: 32.00, low: 27.00, close: 27.50 },
            { time: '2024-05-04', open: 27.50, high: 28.50, low: 27.00, close: 27.80 },
            { time: '2024-05-05', open: 27.80, high: 28.00, low: 25.00, close: 25.80 },
            { time: '2024-05-06', open: 25.80, high: 29.00, low: 25.50, close: 28.75 },
            { time: '2024-05-07', open: 28.75, high: 30.50, low: 28.50, close: 30.25 },
            { time: '2024-05-08', open: 30.25, high: 32.50, low: 30.00, close: 32.25 },
            { time: '2024-05-09', open: 32.25, high: 35.50, low: 32.00, close: 34.75 },
            { time: '2024-05-10', open: 34.75, high: 35.00, low: 33.50, close: 34.25 },
            { time: '2024-05-11', open: 34.25, high: 34.50, low: 32.50, close: 33.75 },
        ]);

        // Ajustar el gráfico al tamaño del contenedor
        chart.timeScale().fitContent();

        // Manejar el redimensionado de la ventana
        const handleResize = () => {
            if (chartContainerRef.current) {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        window.addEventListener('resize', handleResize);

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, []);

    return (
        <div className="w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Evolución de Finanzas</h3>
            <div ref={chartContainerRef} className="w-full" />
        </div>
    );
}
