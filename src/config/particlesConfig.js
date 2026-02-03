export const getParticlesConfig = (isMobile = false) => ({
  fullScreen: false,
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: !isMobile,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.8,
        },
      },
      push: {
        quantity: 2,
      },
    },
  },
  particles: {
    color: {
      value: "#0dca0d",
    },
    links: {
      color: "#0dca0d",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: isMobile ? 0.5 : 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: isMobile ? 20 : 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
});
