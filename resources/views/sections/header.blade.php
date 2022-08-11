<header class="relative z-10">
  <div class="flex">
    <div class="py-8 2xl:py-12 xl:w-2/5 {{ isset($footer) ? '' : 'pl-6 lg:pl-12'}}"> <a
        class="strikethrough leading-none inline-block font-mono text-4xl 2xl:text-5xl lowercase tracking-[0.4em] {{ $strikethrough }}"
        href="{{ home_url('/') }}">{!! $siteName !!}</a>
    </div>

    @if (!empty($primaryNavigation))
      <nav @if(!isset($footer)) id="main-menu" @endif class="transform transition translate-y-full xl:!transform-none fixed px-6 xl:pl-0 flex items-center xl:relative right-0 top-0 bottom-0 xl:bottom-auto xl:right-auto xl:top-auto w-full bg-axis-blue py-8 2xl:py-12  antialiased xl:block text-3xl xl:text-base 2xl:text-xl xl:w-3/5 font-mono {{ isset($footer) ? 'xl:bg-transparent' : 'xl:bg-white pr-6 2xl:pr-12 '}}"
        aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! $primaryNavigation !!}
      </nav>

      <button id="main-menu-button"
        class="mr-6 inline-block font-mono bg-transparent text-xl xl:hidden relative z-50 px-4 my-auto py-2 ml-auto font-semibold border-2 text-blue border-axis-pink {{ isset($footer) ? '' : 'bg-white'}} ">
        Menu
      </button>
    @endif
  </div>
</header>
