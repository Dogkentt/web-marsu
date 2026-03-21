'use client'

import { useEffect, useMemo, useState } from "react";

export interface useScrollSpyProps {
    ids: string[];
    options?: IntersectionObserverInit;
}

export function useScrollSpy({ ids, options }: useScrollSpyProps) {
    const [activeId, setActiveId] = useState<string>('');

    const stableIds = useMemo(() => ids, [JSON.stringify(ids)]);

    useEffect(() => {
        const elements = stableIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (elements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '0% 0% -80% 0%',
            threshold: 0,
            ...options
        });

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [stableIds, options]);

    return activeId;
}