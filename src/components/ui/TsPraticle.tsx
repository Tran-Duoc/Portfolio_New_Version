import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { useCallback } from 'react';
import Particles from 'react-particles';

const TsPraticle = () => {
  const particlesInit = useCallback(async (engine: Engine | unknown) => {
    if (engine) {
      await loadFull(engine as Engine);
    }
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | unknown) => {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await container;
    },
    []
  );

  return (
    <Particles
      className='w-full h-full absolute bg-white dark:bg-[#0f172a]'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: 'white',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'connect',
              parallax: {
                enable: false,
                force: 50,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 10,
              duration: 2,
            },
            attract: {
              distance: 50,
              duration: 1,
              easing: 'ease-out-quad',
              factor: 1,
              maxSpeed: 50,
              speed: 10,
            },
          },
        },
        particles: {
          color: {
            value: 'random',
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 2,
                decay: 0,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 2,
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 2,
                decay: 0,
                sync: true,
              },
            },
          },

          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 100,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1.5, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TsPraticle;
