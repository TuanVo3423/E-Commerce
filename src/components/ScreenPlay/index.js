import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
export function ScreenPlay() {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, delay: 2.5 }}
        >
            <Player
                autoplay
                loop
                background="#8ac559"
                src="https://assets5.lottiefiles.com/packages/lf20_wl8eak9m.json"
                style={{ height: '100vh', width: '100vw' }}
            ></Player>
        </motion.div>
    );
}
export function SwitchPage() {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, delay: 3 }}
        >
            <Player
                autoplay
                loop
                speed={1.5}
                background="#8ac559"
                src="https://assets1.lottiefiles.com/packages/lf20_wn5uk5o4.json"
                style={{ height: '100vh', width: '100vw' }}
            ></Player>
        </motion.div>
    );
}
