
      document.querySelectorAll(".navlinks>li").forEach(function (li) {
        if (!li.querySelector(".drop")) return;
        li.addEventListener("mouseenter", function () {
          li.classList.add("open");
        });
        li.addEventListener("mouseleave", function () {
          li.classList.remove("open");
        });
        li.querySelector("a").addEventListener("click", function (e) {
          if (window.matchMedia("(hover:none)").matches) {
            e.preventDefault();
            li.classList.toggle("open");
          }
        });
      });
    
    
      var si = 0,
        slides = document.querySelectorAll(".slide"),
        dots = document.querySelectorAll(".sdots span"),
        timer;
      function setSlide(i) {
        slides[si].classList.remove("on");
        dots[si].classList.remove("on");
        si = (i + slides.length) % slides.length;
        slides[si].classList.add("on");
        dots[si].classList.add("on");
        resetTimer();
      }
      function goSlide(d) {
        setSlide(si + d);
      }
      function resetTimer() {
        clearInterval(timer);
        timer = setInterval(function () {
          setSlide(si + 1);
        }, 5500);
      }
      resetTimer();
      document.querySelectorAll("section,.marq").forEach(function (el, i) {
        el.classList.add("reveal");
        el.style.animationPlayState = "paused";
        el.style.animationDelay = i * 0.03 + "s";
      });
      var io = new IntersectionObserver(
        function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.style.animationPlayState = "running";
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll(".reveal").forEach(function (el) {
        io.observe(el);
      });
      document.querySelectorAll(".simg").forEach(function (btn) {
        var inp = document.createElement("input");
        inp.type = "file";
        inp.accept = "image/*";
        inp.style.display = "none";
        btn.after(inp);
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          inp.click();
        });
        inp.addEventListener("change", function () {
          var f = inp.files[0];
          if (!f) return;
          var u = URL.createObjectURL(f);
          var bg = btn.parentElement.querySelector(".bgfx");
          bg.style.backgroundImage = "url('" + u + "')";
          bg.classList.add("imgset");
          btn.textContent = "🖼️ Change image";
        });
      });
      document.querySelectorAll(".icb").forEach(function (el) {
        var up = document.createElement("span");
        up.className = "up";
        up.textContent = "Add icon";
        el.appendChild(up);
        var inp = document.createElement("input");
        inp.type = "file";
        inp.accept = "image/*";
        inp.style.display = "none";
        el.appendChild(inp);
        el.addEventListener("click", function () {
          inp.click();
        });
        inp.addEventListener("change", function () {
          var f = inp.files[0];
          if (!f) return;
          var u = URL.createObjectURL(f);
          el.querySelector("img") && el.querySelector("img").remove();
          var em = el.firstChild;
          if (em && em.nodeType === 3) em.textContent = "";
          var img = document.createElement("img");
          img.src = u;
          el.insertBefore(img, el.firstChild);
          el.classList.add("has");
        });
      });
      document.querySelectorAll(".bgrid div").forEach(function (el) {
        var name = el.textContent;
        el.textContent = "";
        var sp = document.createElement("span");
        sp.textContent = name;
        el.appendChild(sp);
        var up = document.createElement("span");
        up.className = "up";
        up.textContent = "Add logo";
        el.appendChild(up);
        var inp = document.createElement("input");
        inp.type = "file";
        inp.accept = "image/*";
        inp.style.display = "none";
        el.appendChild(inp);
        el.addEventListener("click", function () {
          inp.click();
        });
        inp.addEventListener("change", function () {
          var f = inp.files[0];
          if (!f) return;
          var u = URL.createObjectURL(f);
          sp.style.display = "none";
          var img = document.createElement("img");
          img.src = u;
          el.insertBefore(img, sp);
          el.classList.add("has");
        });
      });
      var pick = document.createElement("input");
      pick.type = "file";
      var cur = null;
      document.querySelectorAll(".slot").forEach(function (s) {
        s.addEventListener("click", function () {
          cur = s;
          pick.accept = s.dataset.video ? "video/*" : "image/*";
          pick.value = "";
          pick.click();
        });
      });
      pick.addEventListener("change", function () {
        var f = pick.files[0];
        if (!f || !cur) return;
        var u = URL.createObjectURL(f);
        if (cur.dataset.video) {
          cur.innerHTML =
            '<video src="' + u + '" controls playsinline></video>';
        } else {
          cur.style.backgroundImage = "url(" + u + ")";
          cur.textContent = "";
          cur.classList.add("has");
        }
      });
      function sendEnq() {
        var n = document.getElementById("fn").value.trim(),
          p = document.getElementById("fp").value,
          m = document.getElementById("fm").value.trim();
        var t =
          "Hello, I am " +
          (n || "a customer") +
          ". I am looking for: " +
          p +
          "." +
          (m ? " Details: " + m : "");
        window.open(
          "https://wa.me/919024605007?text=" + encodeURIComponent(t),
          "_blank",
        );
      }


      // video add here

       const vid = document.getElementById("showVideo");
  const btn = document.getElementById("playBtn");

  btn.addEventListener("click", () => {
    vid.controls = true;
    vid.play();
    btn.style.display = "none";
  });

  vid.addEventListener("ended", () => {
    vid.controls = false;
    btn.style.display = "grid";
  });




      (function () {
        var v = document.getElementById("showVideo");
        var b = document.getElementById("playBtn");
        if (!v || !b) return;
        b.addEventListener("click", function (e) {
          e.stopPropagation();
          v.controls = true;
          
          v.play();
          b.style.display = "none";
        });
        v.addEventListener("ended", function () {
          v.controls = false;
          b.style.display = "grid";
        });
      })();
    
      (function () {
        var h = document.querySelector("header");
        var b = document.getElementById("menuBtn");
        if (!h || !b) return;
        b.addEventListener("click", function () {
          var open = h.classList.toggle("menu-open");
          b.setAttribute("aria-expanded", open);
        });
        document.querySelectorAll(".navlinks a").forEach(function (a) {
          a.addEventListener("click", function () {
            h.classList.remove("menu-open");
            b.setAttribute("aria-expanded", "false");
          });
        });
      })();





(function () {
  var slider = document.querySelector('.review-slider');
  if (!slider) return;
  var track = slider.querySelector('.review-track');
  var slides = slider.querySelectorAll('.review-slide');
  var prev = slider.querySelector('.rv-prev');
  var next = slider.querySelector('.rv-next');
  var dotsBox = document.querySelector('.rv-dots');
  var index = 0, perView = 3, timer;

  function getPerView() {
    var w = window.innerWidth;
    return w >= 1024 ? 3 : (w >= 640 ? 2 : 1);
  }
  function maxIndex() { return Math.max(0, slides.length - perView); }

  function buildDots() {
    dotsBox.innerHTML = '';
    for (var i = 0; i <= maxIndex(); i++) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      (function (n) { b.addEventListener('click', function () { go(n); restart(); }); })(i);
      dotsBox.appendChild(b);
    }
  }

  function go(i) {
    index = Math.min(Math.max(i, 0), maxIndex());
    track.style.transform = 'translateX(-' + (index * (100 / perView)) + '%)';
    var dots = dotsBox.children;
    for (var d = 0; d < dots.length; d++) dots[d].classList.toggle('active', d === index);
    prev.disabled = index === 0;
    next.disabled = index === maxIndex();
  }

  function auto() { go(index >= maxIndex() ? 0 : index + 1); }
  function start() { timer = setInterval(auto, 4500); }
  function restart() { clearInterval(timer); start(); }

  prev.addEventListener('click', function () { go(index - 1); restart(); });
  next.addEventListener('click', function () { go(index + 1); restart(); });

  // Swipe (mobile/tablet)
  var startX = 0, dx = 0;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; dx = 0; }, { passive: true });
  track.addEventListener('touchmove', function (e) { dx = e.touches[0].clientX - startX; }, { passive: true });
  track.addEventListener('touchend', function () {
    if (Math.abs(dx) > 50) { go(dx < 0 ? index + 1 : index - 1); restart(); }
  });

  // Hover pe autoplay ruk jaye
  slider.addEventListener('mouseenter', function () { clearInterval(timer); });
  slider.addEventListener('mouseleave', start);

  window.addEventListener('resize', function () {
    var p = getPerView();
    if (p !== perView) { perView = p; buildDots(); go(index); }
  });

  perView = getPerView();
  buildDots();
  go(0);
  start();
})();




      



      