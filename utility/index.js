export const jaraUtilits = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  pageLoad() {
    var speed = 500;
    setTimeout(function () {
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      )
        ? true
        : false;

      var preloader = document.getElementById("preloader");
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);

        setTimeout(function () {
          if (preloader && preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 2000);
      } else {
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }
    }, speed);
    setTimeout(function () {
      var allWrap = document.querySelector(".jara_tm_all_wrap");
      if (allWrap) {
        allWrap.classList.add("ready");
      }
    }, speed + 2000);
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  animation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  processImage() {
    if (document.querySelectorAll(".jara_tm_process").length > 0) {
      var imagebox = document.querySelector(".jara_tm_process .imagebox");
      var list = document.querySelector(".jara_tm_process .list");
      var processInner = document.querySelector(
        ".jara_tm_process .process_inner"
      );
      var itemLi = document.querySelector(
        ".jara_tm_process .list li"
      ).offsetWidth;
      var itemW = document.querySelector(
        ".jara_tm_process .list .list_inner"
      ).offsetWidth;

      if (imagebox && list && processInner) {
        var processInnerW = processInner.getBoundingClientRect().left;
        imagebox.style.width = processInnerW + itemW + "px";
        list.style.paddingRight = itemLi + "px";
      }

      let { jarallax } = require("jarallax");
      // Manually add the "data-jarallax" attribute to each .jarallax element
      var jarallaxElements = document.querySelectorAll(".jarallax");
      for (var i = 0; i < jarallaxElements.length; i++) {
        var dataOptions = jarallaxElements[i].getAttribute("data-jarallax");
        if (dataOptions) {
          // Parse the data options as JSON
          var options = JSON.parse(dataOptions);
          // Initialize jarallax manually
          new jarallax(jarallaxElements[i], options);
        }
      }
    }
  },
  jarallax() {
    var jarallaxElements = document.querySelectorAll(".jarallax");
    jarallaxElements.forEach(function (element) {
      var customSpeed = element.getAttribute("data-speed");
      if (customSpeed !== null && customSpeed !== "") {
        customSpeed = parseFloat(customSpeed);
      } else {
        customSpeed = 0.5;
      }

      let { jarallax } = require("jarallax");
      new jarallax(element, {
        speed: customSpeed,
        automaticResize: true,
        videoVolume: 0,
      });
    });
  },
  gradientText() {
    var details = document.querySelectorAll(".text_gradient");
    details.forEach(function (element) {
      var offset = 0;
      window.addEventListener("scroll", function () {
        offset = window.scrollY;
        var windowHeight = window.screen.height;
        var elementRect = element.getBoundingClientRect();
        var i = elementRect.top - offset - windowHeight;
        i *= -1;
        var y = (i * 70) / windowHeight;
        element.style.backgroundSize = y + "% 100%";
      });
    });
  },
  waypoints() {
    var divElements = document.querySelectorAll(".waypoint_effect");
    divElements.forEach(function (element) {
      var waypointHandler = function () {
        element.classList.add("load");
      };
      if (typeof window !== "undefined") {
        require("waypoints/lib/noframework.waypoints.min.js");
        new Waypoint({
          element: element,
          handler: waypointHandler,
          offset: "85%",
        });
      }
    });
  },
  scrollSection() {
    const sections = document.querySelectorAll(".jara_tm_section");
    const navLi = document.querySelectorAll(".anchor_nav li");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      if (current !== null) {
        li.classList.remove("current");
      }
      if (
        li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
      ) {
        li.classList.add("current");
      }
    });
  },
};
