import { useState, useEffect } from 'react';
import { mockDb } from '../services/mockDb';

export function useRealtimeData(key) {
    const [data, setData] = useState(() => mockDb.getData(key));

    useEffect(() => {
        // Subscribe to realtime changes from other tabs (Admin Dashboard)
        const unsubscribe = mockDb.subscribe(key, (newData) => {
            setData(newData);
        });

        return () => unsubscribe();
    }, [key]);

    const update = (newData) => {
        // Optimistic update locally
        setData(newData);
        // Persist and broadcast
        mockDb.updateData(key, newData);
    };

    return [data, update];
}
