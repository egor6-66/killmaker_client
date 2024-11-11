import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components';
import { MapsInterfaces } from '@/interfaces';
import { MapsList } from '@/routes/components';

import styles from './styles.module.scss';

const LocalGame = () => {
    const navigate = useNavigate();
    const [selectedMap, setSelectedMap] = useState<MapsInterfaces.IMap | null>(null);

    const goToGame = () => {
        navigate(`/battlefield/local_game/${selectedMap.name}`);
    };

    return (
        <Box className={styles.wrapper} enableAnimation>
            <MapsList selectedMap={selectedMap} clickMap={setSelectedMap} />
            <Button onClick={goToGame} style={{ width: '90%' }} disabled={!selectedMap}>
                ИГРАТЬ
            </Button>
        </Box>
    );
};

export default LocalGame;
