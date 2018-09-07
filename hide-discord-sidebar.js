function discordHack() {

  // When Discord chat is loaded
  if (document.querySelector('.divider-2PMBlV').parentNode.childNodes.length == 7 || document.querySelector('.divider-2PMBlV').parentNode.childNodes.length == 4) {
    clearInterval(hider);

    /* CHANNELS */
    var channelPlaceholder = "3.5vmin";
    var channelWidth = "40vmin";
    var channels = document.getElementsByClassName('channels-Ie2l6A')[0];

    channels.style.width = 0;
    channels.style.paddingLeft = channelPlaceholder;

    channels.addEventListener("mouseover", function () {
      channels.style.width = channelWidth;
      channels.style.paddingLeft = 0;
    })

    channels.addEventListener("mouseout", function () {
      channels.style.width = 0;
      channels.style.paddingLeft = channelPlaceholder;
    })

    /* SERVERS */
    var guildsWrapper = document.getElementsByClassName('guildsWrapper-5TJh6A')[0];

    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Hide Servers");
    btn.appendChild(t);
    btn.id = "hideNshow";

    btn.onclick = function () {
      if (
        guildsWrapper.style.display === 'none') {
        showServers();
      } else {
        hideServers();
      }
    }
    document.body.appendChild(btn)
    


    if (window.innerWidth < 700) {
      hideServers();
    }

    window.onresize = function () {
      if (window.innerWidth < 700) {
        hideServers();
      } else {
        showServers();
      }
    }

    function hideServers() {
      guildsWrapper.style.display = 'none';
      btn.innerHTML = "Show Servers"
    }

    function showServers() {
      guildsWrapper.style.display = 'flex';
      btn.innerHTML = "Hide Servers"
    }

    console.log("Discord Sidebar Hack Complete!");
  }
}

var hider = setInterval(discordHack, 2000);