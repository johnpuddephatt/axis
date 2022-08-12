{{-- Template Name: Home
--}}
@extends('layouts.app', ['strikethrough' => "strikethrough-white"])
@section('content')
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
              let sectionArrayPosition = activeSections.indexOf(
                entry.target
              );
              if (sectionArrayPosition > -1) {
                activeSections.splice(sectionArrayPosition, 1);
              }
            }

            if (
              entry.intersectionRatio > 0.3 &&
              entry.intersectionRatio >
              prevRatios[entry.target.dataset.bg]
            ) {
              // document.body.classList.remove(...bgColorClasses);
              // document.body.classList.add(entry.target.dataset.bg);
              document.getElementById('app').classList.remove(...bgColorClasses);
              document.getElementById('app').classList.add(entry.target.dataset.bg);
            }

            prevRatios[entry.target.dataset.bg] =
              entry.intersectionRatio;
          });
        }
        let observer = new IntersectionObserver(handleIntersect, {
          root: null,
          rootMargin: "0px",
          threshold: [0, 0.3],
        });

        let sections = document.querySelectorAll("[data-bg]");
        let activeSections = [sections[0]]; // first section
        translateSection(sections[0], 0);

        let firstSectionCarouselImages = sections[0].querySelectorAll('img');

        firstSectionCarouselImages.forEach((img, key) => {
          img.classList.add('transition','duration-1000');
          img.classList.add('delay-' + key * 100);
          img.classList.remove('opacity-0');
        });

        sections.forEach((section) => {
          bgColorClasses.push(section.dataset.bg);
          observer.observe(section);
        });

        window.addEventListener("scroll", function(e) {
          let lastKnownScrollPosition = window.scrollY;
          if (!ticking) {
            window.requestAnimationFrame(function() {

              activeSections.forEach((section) => {
                translateSection(section, lastKnownScrollPosition);
              });
              ticking = false;
            });

            ticking = true;
          }
        });

      function translateSection(section, lastKnownScrollPosition) {
        let swing =
          ((section.offsetTop - lastKnownScrollPosition) /
            section.clientHeight) *
          100 *
          (Array.prototype.indexOf.call(
              sections,
              section
            ) %
            2 ==
            0 ?
            -1 :
            1);

        let scrollContainer =
          section.querySelector(".grid");
        if (scrollContainer) {
          scrollContainer.style.transform = `translateX(${swing}px)`;
        }
      }

      },
      false
    );

   
  </script>

  <div class="preserve-3d flex flex-row " data-bg="bg-axis-yellow">
    <div class="flex h-screen flex-col items-start justify-center gap-12 p-6 xl:w-2/5 lg:p-12 xl:pr-24">
      <h1 class="max-w-2xl text-5xl font-bold uppercase italic md:text-6xl 2xl:text-7xl -mt-48">
        We support artists & elevate artists’ voices
      </h1>
      <a class="hover:bg-white transition border-2 border-black px-6 py-2 font-mono font-bold lowercase 2xl:text-xl" href="https://www.axisweb.org/discover/">Discover Art and Artists
</a>
    </div>
    <div class="hidden flex-1 items-center bg-white xl:flex lg:w-3/5">
      <div class="no-scrollbar perspective relative w-full overflow-y-hidden overflow-x-scroll py-16 2xl:py-32">
        <div
          class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]">
          <a class="col-span-2 col-start-1 row-span-3 row-start-1 block w-full transition duration-500 ease-out hover:scale-105"
            href="#"><img class="opacity-0" src="@asset('images/sample-images/image-27.jpg')" alt="" />
          </a>
          <a class="layer-3 col-span-2 col-start-5 row-span-3 row-start-2 block w-full transform transition duration-500 ease-out hover:scale-105"
            href="#">
            <img class="opacity-0" src="@asset('images/sample-images/image-5.jpg')" alt="" /></a>
          <a class="layer-2 col-span-2 col-start-7 row-span-3 row-start-1 block w-full transform transition duration-500 ease-out hover:scale-105"
            href="#">
            <img class="opacity-0" src="@asset('images/sample-images/image-8.jpg')" alt="" /></a>
          <a class="col-span-3 col-start-9 row-span-3 row-start-3 w-full transform transition duration-500 ease-out hover:scale-105"
            href="#">
            <img class="opacity-0" src="@asset('images/sample-images/image-25.jpg')" alt="" />
          </a>
          <a class="layer-2 col-span-3 col-start-2 row-span-2 row-start-4 w-full transform transition duration-500 ease-out hover:scale-105"
            href="#">
            <img class="opacity-0" src="@asset('images/sample-images/image-29.jpg')" alt="" /></a>

          <a class="layer-2 col-span-3 col-start-12 row-span-2 row-start-2 w-full transform transition duration-500 ease-out hover:scale-105"
            href="#">
            <img class="opacity-0" src="@asset('images/sample-images/image-2.jpg')" alt="" /></a>
        </div>
      </div>
    </div>
  </div>

  <div class="section-two preserve-3d flex flex-row" data-bg="bg-axis-purple">
    <div class="flex h-screen flex-col items-start justify-center gap-12 p-6 xl:w-2/5 lg:p-12 xl:pr-24">
      <h2 class="max-w-2xl text-5xl font-bold uppercase italic md:text-6xl 2xl:text-7xl">
        We deliver projects that connect &amp; support artists
      </h2>
      <a class="hover:bg-white transition border-2 border-black px-6 py-2 font-mono font-bold lowercase 2xl:text-xl" href="/projects/">See all of our
        projects</a>
    </div>
    <div class="hidden flex-1 items-center bg-white xl:flex xl:w-3/5">
      <div class="no-scrollbar perspective relative w-full overflow-y-hidden overflow-x-scroll py-16 2xl:py-32">
        <div
          class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]">
 
          @php
          $project_styles = ['col-span-6 col-start-1 row-span-3 row-start-1',
          'layer-3-no-scale col-span-6 col-start-3 row-span-3 row-start-4',
          'col-span-6 col-start-8 row-span-3 row-start-2'];
          @endphp

          @foreach($projects as $project)
          <a href="{{ get_permalink($project->ID) }}" 
            class="group flex transform flex-row items-center gap-8 transition duration-500 ease-out hover:scale-105 {{ $project_styles[$loop->index] }}">
            <div class="w-1/2">
              @if(has_post_thumbnail($project->ID))
                {!! get_the_post_thumbnail($project->ID, ($loop->index %2 ? 'square' : '4by3'), []) !!}
              @else
                <div class="rounded w-full pt-[75%] bg-gray-50"></div>
              @endif
  </div>
            <div class="w-1/2">
              <h3 class="mb-4 text-3xl 2xl:text-4xl font-semibold font-mono">{{ $project->post_title }}</h3>
              <p class="font-medium text-xl 2xl:text-2xl text-neutral-500 leading-tight">
                {{ $project->post_excerpt }}
              </p>
              <span class="antialiased font-semibold transform transition duration-500 ease-out  group-hover:translate-y-2 mt-6 -ml-16 inline-block rounded-r-full bg-axis-yellow px-16 py-4">Read more</span>
            </div>
  </a>
          @endforeach
        </div>
      </div>
    </div>
  </div>
  <div class="section-two preserve-3d flex flex-row" data-bg="bg-axis-cream">
    <div class="flex h-screen flex-col items-start justify-center gap-8 p-6 xl:w-2/5 lg:p-12 xl:pr-24">
      <h2 class="max-w-2xl text-5xl font-bold uppercase italic md:text-6xl 2xl:text-7xl">
        We provide space where artists connect
      </h2>
      <a class="hover:bg-white transition border-2 border-black px-6 py-2 font-mono font-bold lowercase 2xl:text-xl" href="#">Become a member</a>
    </div>
    <div class="hidden flex-1 items-center bg-white xl:flex xl:w-3/5">
      <div class="no-scrollbar perspective relative w-full overflow-y-hidden overflow-x-scroll py-16 2xl:py-32">
        <div
          class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]">
          <a href="#"
            class="layer-2 col-span-4 col-start-1 row-start-2 block transform transition duration-500 ease-out hover:scale-105">
            <img src="@asset('images/sample-images/image-16.jpg')" alt="" />
          </a>
          <a href="#"
            class="layer-3 col-span-2 col-start-8 row-start-1 block transform transition duration-500 ease-out hover:scale-105">
            <img src="@asset('images/sample-images/image-7.jpg')" alt="" />
          </a>
          <a href="#"
            class="layer-2 col-span-3 col-start-9 row-start-4 transform transition duration-500 ease-out hover:scale-105">
            <img src="@asset('images/sample-images/image-6.jpg')" alt="" /></a>
          <a href="#"
            class="layer-2 col-span-3 col-start-4 row-start-5 transform transition duration-500 ease-out hover:scale-105">
            <img src="@asset('images/sample-images/image-9.jpg')" alt="" />
          </a>
          <a href="#"
            class="col-span-2 col-start-6 row-start-2 transform transition duration-500 ease-out hover:scale-105">
            <img src="@asset('images/sample-images/image-28.jpg')" alt="" /></a>
        </div>
      </div>
    </div>
  </div>

  <div class="section-two preserve-3d flex flex-row" data-bg="bg-axis-blue">
    <div class="flex h-screen flex-col items-start justify-center gap-8 p-6 xl:w-2/5 lg:p-12 xl:pr-24">
      <h2 class="max-w-2xl text-5xl font-bold uppercase italic md:text-6xl 2xl:text-7xl">
        We bring you the latest news &amp; opinion in art
      </h2>
      <a class="hover:bg-white transition border-2 border-black px-6 py-2 font-mono font-bold lowercase 2xl:text-xl" href="{{ get_post_type_archive_link( 'post' )
 }}">Read articles</a>
    </div>
    <div class="hidden flex-1 items-center bg-white xl:flex xl:w-3/5">
      <div class="no-scrollbar perspective relative w-full overflow-y-hidden overflow-x-scroll py-16 2xl:py-32">
        <div
          class="preserve-3d relative grid h-[80vh] w-[213vh] grid-cols-[repeat(16,_minmax(0,_1fr))] grid-rows-6 2xl:h-[60vh] 2xl:w-[160vh]">

          @php
            $post_styles = [
              'col-span-3 col-start-2 row-span-3 row-start-2 ',
              'layer-3-no-scale col-span-3 col-start-6 row-span-3 row-start-3 ',
              'col-span-3 col-start-10 row-span-3 row-start-1
            '];
          @endphp

          @foreach($posts as $post)

          <a href="{{ get_permalink($post->ID) }}"
            class="group transform transition duration-500 ease-out hover:scale-105 {{ $post_styles[$loop->index] }}">
              
              @if(has_post_thumbnail($post->ID))
                {!! get_the_post_thumbnail($post->ID, ($loop->index %2 ? 'square' : '4by3'), ['class' => 'w-full h-auto']) !!}
              @else
              <div class="rounded w-full pt-[75%] bg-gray-50"></div>
              @endif
            
            <div class="-mt-16">
              <span class="antialiased font-semibold transform transition duration-500 ease-out  group-hover:translate-y-2 mb-8 -ml-16 inline-block rounded-r-full bg-axis-yellow px-16 py-4">Read more</span>
              <h3 class="mb-2 text-3xl 2xl:text-4xl font-bold">{{ $post->post_title }}</h3>
              <p class="text-lg 2xl:text-xl font-mono text-neutral-500">
              {{ get_the_date('', $post->ID) }}</p>
            </div>
            </a>
          @endforeach

        </div>
      </div>
    </div>
  </div>
@endsection
