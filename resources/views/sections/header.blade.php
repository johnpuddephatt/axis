<header class="">
  <div class="flex">
    <div class="py-4 pl-12 lg:w-2/5"> <a
        class="strikethrough inline-block font-mono text-4xl lowercase tracking-widest {{ $strikethrough }}"
        href="{{ home_url('/') }}">
        {!! $siteName !!}
      </a>
    </div>

    @if (!empty($primaryNavigation))
      <nav class="pr-12 py-8 hidden xl:block text-lg font-bold lg:w-3/5 bg-white"
        aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! $primaryNavigation !!}
      </nav>

      <button id="main-menu-button"
        class="hidden relative z-50 px-4 py-2 ml-auto font-semibold bg-white border-2 rounded text-blue border-blue">
        Menu
      </button>
    @endif
  </div>
</header>
