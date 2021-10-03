import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";


interface Metric {
    id: string;
    date: string;
    bpm: number;
    pamin: number;
    pamax: number;
    accountId: string;
    createdAt: Date;
    updatedAt: Date;
}

interface MetricsRequestData {
    account_id: string;
    metrics: MetricsInput[]
}

type MetricsInput = Omit<Metric, 'id' | 'createdAt' | 'updatedAt' | 'accountId'>

interface MetricsContextData {
    metrics: Metric[];
    createMetrics: (metrics: MetricsRequestData) => Promise<void>
}

interface MetricsProviderProps {
    children: ReactNode;
}

const MetricsContext = createContext<MetricsContextData>({} as MetricsContextData)

export function MetricsProvider({ children }: MetricsProviderProps) {
    const [metrics, setMetrics] = useState<Metric[]>([]);

    async function createMetrics(metricsInput: MetricsRequestData) {
        const response: any = await api.post('/metrics', metricsInput)

        const storageMetrics = response.data as Metric[];

        setMetrics(storageMetrics)
    }

    return (
        <MetricsContext.Provider value={{ metrics, createMetrics }}>
            {children}
        </MetricsContext.Provider>
    )
}

export function useMetrics() {
    const context = useContext(MetricsContext);

    return context;
}