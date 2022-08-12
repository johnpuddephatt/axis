@if (get_field('artist_name', $thumbnail_id))
  <a aria-label="Find out more about this artist" href="{{ get_field('artist_link', $thumbnail_id) }}"
    class="{{ ($position ?? 'right') == 'left' ? 'left-0' : 'left-[calc(100%-3rem)]' }} pointer-events-none absolute top-0 flex flex-row items-center group no-underline">

    <div class="pointer-events-auto peer relative">
      <span
        class="block absolute z-40 text-black group-focus:text-axis-yellow  group-hover:text-axis-yellow font-mono left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">i</span>
      <svg class="text-axis-yellow h-12 w-12 opacity-0 transition group-hover:opacity-100 group-focus:opacity-100"
        xmlns="http://www.w3.org/2000/svg" width="143.23" height="143.23" viewBox="0 0 143.23 143.23">
        <path fill="currentColor"
          d="M57.64,190.26V333.5H200.88V190.26Zm71.62,119.3a47.68,47.68,0,1,1,47.68-47.68A47.68,47.68,0,0,1,129.26,309.56Z"
          transform="translate(-57.64 -190.26)" />
      </svg>
      <svg
        class="text-axis-yellow  absolute transition group-focus:opacity-0 group-hover:opacity-0 left-0 top-0 h-12 w-12"
        xmlns="http://www.w3.org/2000/svg" width="143.23" height="143.23" viewBox="0 0 143.23 143.23">
        <rect fill="none" width="143.23" height="143.23" />
        <circle fill="currentColor" cx="71.62" cy="71.62" r="47.68" />
      </svg>
    </div>
    <div
      class="pointer-events-none group-hover:pointer-events-auto peer-hover:pointer-events-auto opacity-0 group-focus:pointer-events-none group-focus:opacity-100 group-hover:opacity-100 peer-hover:opacity-100 font-mono text-lg whitespace-nowrap transition overflow-hidden max-w-[10em] text-ellipsis inline-block py-2 h-12 pl-1 pr-4 bg-axis-yellow"
      <span>{{ the_field('artist_name', $thumbnail_id) }}</span>
    </div>


  </a>
@endif
