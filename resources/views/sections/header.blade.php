<header class="fixed top-0 left-0 w-full">
  <div class="px-6 py-12 lg:px-12">
    <a
      class="inline-block font-mono text-3xl tracking-widest lowercase strikethrough"
      href="{{ home_url('/') }}"
    >
      {!! $siteName !!}
    </a>

    @if(has_nav_menu('primary_navigation'))


    <nav
      class="nav-primary"
      aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}"
    >
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' =>
      'nav', 'echo' => false]) !!}
    </nav>


@endif
  </div>
</header>
