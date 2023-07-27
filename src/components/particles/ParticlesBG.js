import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

export default function ParticlesBG() {
    const options = useMemo(() => {
        return {
            particles: {
                move: {
                    enable: true,
                }
            }
        };
    }, [])

    const particlesInit = useCallback((bg) => {
        loadSlim(bg);
    }, []);

    return (
        <Particles init={particlesInit} options={options}/>
   );
}