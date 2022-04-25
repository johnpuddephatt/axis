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

<div class="flex flex-row preserve-3d" data-bg="bg-axis-yellow">
  <div
    class="flex flex-col items-start justify-center flex-shrink-0 h-screen gap-12 p-12 pr-24 lg:w-2/5"
  >
    <h1 class="text-6xl italic font-bold uppercase 2xl:text-8xl">
      We support artists & elevate artists’ voices
    </h1>
  </div>
  <div class="items-center flex-1 hidden bg-white lg:flex lg:w-3/5">
    <div
      class="relative w-full py-16 overflow-x-scroll overflow-y-hidden no-scrollbar perspective 2xl:py-32"
    >
      <div
        class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]"
      >
        <a
          class="block w-full col-span-2 col-start-1 row-span-3 row-start-1 transition duration-500 ease-out hover:scale-105"
          href="#"
          ><img src="@asset('images/sample-images/image-27.jpg')" alt="" />
        </a>
        <a
          class="block w-full col-span-2 col-start-5 row-span-3 row-start-2 transition duration-500 ease-out transform layer-3 hover:scale-105"
          href="#"
        >
          <img src="@asset('images/sample-images/image-5.jpg')" alt=""
        /></a>
        <a
          class="block w-full col-span-2 col-start-7 row-span-3 row-start-1 transition duration-500 ease-out transform layer-2 hover:scale-105"
          href="#"
        >
          <img src="@asset('images/sample-images/image-8.jpg')" alt=""
        /></a>
        <a
          class="w-full col-span-3 col-start-9 row-span-3 row-start-3 transition duration-500 ease-out transform hover:scale-105"
          href="#"
        >
          <img src="@asset('images/sample-images/image-25.jpg')" alt="" />
        </a>
        <a
          class="w-full col-span-3 col-start-2 row-span-2 row-start-4 transition duration-500 ease-out transform layer-2 hover:scale-105"
          href="#"
        >
          <img src="@asset('images/sample-images/image-29.jpg')" alt=""
        /></a>

        <a
          class="w-full col-span-3 col-start-12 row-span-2 row-start-2 transition duration-500 ease-out transform layer-2 hover:scale-105"
          href="#"
        >
          <img src="@asset('images/sample-images/image-2.jpg')" alt=""
        /></a>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-row section-two preserve-3d" data-bg="bg-axis-purple">
  <div
    class="flex flex-col items-start justify-center h-screen gap-12 p-12 pr-24 lg:w-2/5"
  >
    <h1 class="text-6xl italic font-bold uppercase 2xl:text-8xl">
      We deliver projects that connect &amp; support artists
    </h1>
    <a
      class="px-6 py-2 font-mono font-bold lowercase border-2 border-black 2xl:text-lg"
      href="#"
      >See all of our projects</a
    >
  </div>
  <div class="items-center flex-1 hidden bg-white lg:flex lg:w-3/5">
    <div
      class="relative w-full py-16 overflow-x-scroll overflow-y-hidden no-scrollbar perspective 2xl:py-32"
    >
      <div
        class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]"
      >
        <div
          class="flex flex-row items-center col-span-6 col-start-1 row-span-3 row-start-1 gap-8 transition duration-500 ease-out transform hover:scale-105"
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
          class="flex flex-row items-center col-span-6 col-start-3 row-span-3 row-start-4 gap-8 transition duration-500 ease-out transform layer-3-no-scale hover:scale-105"
        >
          <img
            class="w-1/2 h-auto"
            src="@asset('images/sample-images/image-31.jpg')"
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

        <div
          class="flex flex-row items-center col-span-6 col-start-8 row-span-3 row-start-2 gap-8 transition duration-500 ease-out transform hover:scale-105"
        >
          <img
            class="w-1/2 h-auto"
            src="@asset('images/sample-images/image-10.jpg')"
            alt=""
          />
          <div class="w-1/2">
            <h3 class="mb-6 text-3xl">Vacant Space</h3>
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
  <div
    class="flex flex-col items-start justify-center h-screen gap-8 p-12 pr-24 lg:w-2/5"
  >
    <h1 class="text-6xl italic font-bold uppercase 2xl:text-8xl">
      We provide space where artists connect
    </h1>
    <a
      class="px-6 py-2 font-mono font-bold lowercase border-2 border-black 2xl:text-lg"
      href="#"
      >Become a member</a
    >
  </div>
  <div class="items-center flex-1 hidden bg-white lg:flex lg:w-3/5">
    <div
      class="relative w-full py-16 overflow-x-scroll overflow-y-hidden no-scrollbar perspective 2xl:py-32"
    >
      <div
        class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]"
      >
        <img
          class="block col-span-4 col-start-1 row-start-2 transform layer-2"
          src="@asset('images/sample-images/image-16.jpg')"
          alt=""
        />
        <img
          class="block col-span-2 col-start-8 row-start-1 transform layer-3"
          src="@asset('images/sample-images/image-7.jpg')"
          alt=""
        />
        <img
          class="col-span-3 col-start-9 row-start-4 transform layer-2"
          src="@asset('images/sample-images/image-6.jpg')"
          alt=""
        />
        <img
          class="col-span-3 col-start-4 row-start-5 transform layer-2"
          src="@asset('images/sample-images/image-9.jpg')"
          alt=""
        />
        <img
          class="col-span-2 col-start-6 row-start-2"
          src="@asset('images/sample-images/image-28.jpg')"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

<div class="flex flex-row section-two preserve-3d" data-bg="bg-axis-blue">
  <div
    class="flex flex-col items-start justify-center h-screen gap-8 p-12 pr-24 lg:w-2/5"
  >
    <h1 class="text-6xl italic font-bold uppercase 2xl:text-8xl">
      We bring you the latest news &amp; opinion in art.
    </h1>
    <a
      class="px-6 py-2 font-mono font-bold lowercase border-2 border-black 2xl:text-lg"
      href="#"
      >Read articles</a
    >
  </div>
  <div class="items-center flex-1 hidden bg-white lg:flex lg:w-3/5">
    <div
      class="relative w-full py-16 overflow-x-scroll overflow-y-hidden no-scrollbar perspective 2xl:py-32"
    >
      <div
        class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]"
      >
        <div
          class="col-span-3 col-start-2 row-span-3 row-start-2 transition duration-500 ease-out transform hover:scale-105"
        >
          <img
            class="h-auto"
            src="@asset('images/sample-images/image-14.jpg')"
            alt=""
          />
          <div class="-mt-16">
            <a
              class="inline-block px-16 py-4 mb-8 -ml-16 rounded-r-full bg-axis-yellow"
              href="#"
              >Read more</a
            >
            <h3 class="mb-3 text-3xl">Article title</h3>
            <p>
              Lorem ipsum, dolor sit amet consec tetur adipisi cing elit. Volupt
              atibus tempora eligendi praes entium.
            </p>
          </div>
        </div>

        <div
          class="col-span-3 col-start-6 row-span-3 row-start-3 transition duration-500 ease-out transform layer-3-no-scale hover:scale-105"
        >
          <img
            class="h-auto"
            src="@asset('images/sample-images/image-1.jpg')"
            alt=""
          />
          <div class="-mt-16">
            <a
              class="inline-block px-16 py-4 mb-8 -ml-16 rounded-r-full bg-axis-yellow"
              href="#"
              >Read more</a
            >
            <h3 class="mb-6 text-3xl">Article title</h3>
            <p>
              Lorem ipsum, dolor sit amet cons ectetur adipi sicing elit.
              Volupta tibus tempora eligendi prae sentium.
            </p>
          </div>
        </div>

        <div
          class="col-span-3 col-start-10 row-span-3 row-start-1 transition duration-500 ease-out transform hover:scale-105"
        >
          <img
            class="h-auto"
            src="@asset('images/sample-images/image-15.jpg')"
            alt=""
          />
          <div class="-mt-16">
            <a
              class="inline-block px-16 py-4 mb-8 -ml-16 rounded-r-full bg-axis-yellow"
              href="#"
              >Read more</a
            >
            <h3 class="mb-6 text-3xl">Article title</h3>
            <p>
              Lorem ipsum, dolor sit amet cons ectetur adipi sicing elit.
              Volupta tibus tempora eligendi prae sentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

@endsection