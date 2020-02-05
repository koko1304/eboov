videojs(
  "#video",
  {
    controls: true,
    plugins: {
      videoJsResolutionSwitcher: {
        default: "high",
        dynamicLabel: true
      }
    }
  },
  function() {
    var player = this;
    window.player = player;
    player.updateSrc([
      {
        src: "https://openload.co/stream/FNb-QEhykck~1522163635~42.115.0.0~g5-wzNnx?mime=true",
        type: "video/mp4",
        label: "720p"
      },
      {
        src: "https://openload.co/stream/kjZObfLLTIA~1522163668~42.115.0.0~DYWvkiG_?mime=true",
        type: "video/mp4",
        label: "480p"
      },
      {
        src: "https://openload.co/stream/vtDZ2X3xknQ~1522163703~42.115.0.0~4nlppFP6?mime=true",
        type: "video/mp4",
        label: "360p"
      }
    ]);

    player.on("resolutionchange", function() {
      console.info("Source changed to %s", player.src());
    });
  }
);
