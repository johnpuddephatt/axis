@extends('layouts.app') @section('content')

<script>
  window.addEventListener(
    "load",
    (event) => {
      let ticking = false;
      let prevRatios = {};
      let bgColorClasses = [];
      let lastKnownScrollPosition = 0;
      function handleIntersect(entries, observer) {
        entries.forEach((entry, key) => {
          prevRatios[entry.target.dataset.bg] = 0;

          if (entry.intersectionRatio > 0) {
            activeSections.push(entry.target);
            activeSections = [...new Set(activeSections)];
          }

          if (entry.intersectionRatio == 0) {
            let sectionArrayPosition = activeSections.indexOf(entry.target);
            if (sectionArrayPosition > -1) {
              activeSections.splice(sectionArrayPosition, 1);
            }
          }

          if (
            entry.intersectionRatio > 0.3 &&
            entry.intersectionRatio > prevRatios[entry.target.dataset.bg]
          ) {
            document.body.classList.remove(...bgColorClasses);
            document.body.classList.add(entry.target.dataset.bg);
          }

          prevRatios[entry.target.dataset.bg] = entry.intersectionRatio;
        });
      }
      let observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.3],
      });

      let sections = document.querySelectorAll("[data-bg]");
      let activeSections = [sections[0]]; // first section

      sections.forEach((section) => {
        bgColorClasses.push(section.dataset.bg);
        observer.observe(section);
      });

      window.addEventListener("scroll", function (e) {
        let lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function () {
            activeSections.forEach((section) => {
              let swing =
                ((section.offsetTop - lastKnownScrollPosition) /
                  section.clientHeight) *
                100 *
                (Array.prototype.indexOf.call(sections, section) % 2 == 0
                  ? -1
                  : 1);

              let scrollContainer = section.querySelector(".grid");
              if (scrollContainer) {
                scrollContainer.style.transform = `translateX(${swing}px)`;
              }
            });
            ticking = false;
          });

          ticking = true;
        }
      });
    },
    false
  );
</script>

<!-- <div class=""> -->
<div class="flex flex-row preserve-3d" data-bg="bg-axis-yellow">
  <div class="flex flex-col justify-center w-2/5 h-screen p-12">
    <h1 class="text-6xl italic font-bold uppercase 2xl:text-8xl">
      We support artists & elevate artists’ voices
    </h1>
  </div>
  <div class="flex items-center flex-1 h-screen bg-white">
    <div
      class="no-scrollbar perspective h-full max-h-[50vw] w-full items-center overflow-y-hidden overflow-x-scroll py-32"
    >
      <div
        class="preserve-3d relative grid h-full w-[150%] max-w-[88vw] grid-cols-12 grid-rows-6 px-12"
      >
        <img
          class="block w-full col-span-2 col-start-1 row-start-1 transition duration-500 ease-out hover:scale-105"
          src="@asset('images/sample-images/image-27.jpg')"
          alt=""
        />
        <img
          class="block w-full col-span-2 col-start-4 row-start-2 transition duration-500 ease-out transform layer-3 hover:scale-105"
          src="@asset('images/sample-images/image-5.jpg')"
          alt=""
        />
        <img
          class="block w-full col-span-2 col-start-6 row-start-1 transition duration-500 ease-out transform layer-2 hover:scale-105"
          src="@asset('images/sample-images/image-8.jpg')"
          alt=""
        />

        <img
          class="w-full col-span-3 col-start-7 row-start-4 transition duration-500 ease-out transform hover:scale-105"
          src="@asset('images/sample-images/image-25.jpg')"
          alt=""
        />
        <img
          class="w-full col-span-3 col-start-2 row-start-4 transition duration-500 ease-out transform layer-2 hover:scale-105"
          src="@asset('images/sample-images/image-29.jpg')"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

<div class="flex flex-row section-two preserve-3d" data-bg="bg-axis-purple">
  <div class="flex flex-col justify-center w-2/5 h-screen p-12">
    <h1 class="text-6xl italic font-bold uppercase">
      We deliver projects that connect &amp; support artists
    </h1>
  </div>
  <div class="flex items-center flex-1 h-screen bg-white">
    <div
      class="no-scrollbar perspective h-full max-h-[50vw] w-full items-center overflow-y-hidden overflow-x-scroll py-32"
    >
      <div
        class="preserve-3d relative grid h-full w-[150%] max-w-[88vw] grid-cols-12 grid-rows-6 px-12"
      >
        <div
          class="flex flex-row items-center col-span-6 col-start-1 row-start-1 gap-8 transition duration-500 ease-out transform hover:scale-105"
        >
          <img
            class="w-1/2 h-auto"
            src="@asset('images/sample-images/image-18.jpg')"
            alt=""
          />
          <div class="w-1/2">
            <h3 class="mb-6 text-3xl">Summer school</h3>
            <p>
              Lorem ipsum, dolor sit amet consec tetur adipisi cing elit. Volupt
              atibus tempora eligendi praes entium.
            </p>
            <a
              class="inline-block px-16 py-4 mt-4 -ml-16 rounded-r-full bg-axis-yellow"
              href="#"
              >Read more</a
            >
          </div>
        </div>

        <div
          class="flex flex-row items-center col-span-6 col-start-3 row-start-4 gap-8 transition duration-500 ease-out transform layer-3-no-scale hover:scale-105"
        >
          <img
            class="w-1/2 h-auto"
            src="@asset('images/sample-images/image-10.jpg')"
            alt=""
          />
          <div class="w-1/2">
            <h3 class="mb-6 text-3xl">Praxis</h3>
            <p>
              Lorem ipsum, dolor sit amet cons ectetur adipi sicing elit.
              Volupta tibus tempora eligendi prae sentium.
            </p>
            <a
              class="inline-block px-16 py-4 mt-4 -ml-16 rounded-r-full bg-axis-yellow"
              href="#"
              >Read more</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-row section-two preserve-3d" data-bg="bg-axis-cream">
  <div class="flex flex-col justify-center w-2/5 h-screen p-12">
    <h1 class="text-6xl italic font-bold uppercase">
      We provide space where artists connect
    </h1>
  </div>
  <div class="flex items-center flex-1 h-screen bg-white">
    <div
      class="no-scrollbar perspective h-full max-h-[50vw] w-full items-center overflow-y-hidden overflow-x-scroll py-32"
    >
      <div
        class="preserve-3d relative grid h-full w-[150%] max-w-[88vw] grid-cols-12 grid-rows-6 px-12"
      >
        <img
          class="block col-span-3 col-start-1 row-start-1"
          src="@asset('images/sample-images/image-13.jpg')"
          alt=""
        />
        <img
          class="block col-span-4 col-start-4 row-start-4 layer-2"
          src="@asset('images/sample-images/image-16.jpg')"
          alt=""
        />
        <img
          class="block col-span-2 col-start-6 row-start-1"
          src="@asset('images/sample-images/image-7.jpg')"
          alt=""
        />
        <img
          class="col-span-3 col-start-10 row-start-2 layer-3"
          src="@asset('images/sample-images/image-6.jpg')"
          alt=""
        />
        <img
          class="col-span-3 col-start-8 row-start-5"
          src="@asset('images/sample-images/image-9.jpg')"
          alt=""
        />
        <img
          class="col-span-2 col-start-3 row-start-5"
          src="@asset('images/sample-images/image-28.jpg')"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

<div class="flex flex-row" data-bg="bg-axis-blue">
  <div class="flex flex-col justify-center w-2/5 h-screen p-12">
    <h1 class="text-6xl italic font-bold uppercase">
      We bring you the latest news &amp; opinion in art.
    </h1>
  </div>
  <div class="flex-1 bg-white">Right</div>
</div>
<!-- </div> -->

@endsection