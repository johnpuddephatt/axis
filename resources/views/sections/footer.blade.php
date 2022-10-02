<footer class="bg-axis-green px-4 pt-24 lg:pt-32 lg:p-12">
  <div class="mb-16 flex flex-col xl:flex-row gap-16 lg:gap-32">
  <div class="lg:w-7/12 ">
    <h2 class="max-w-lg 2xl:max-w-xl text-5xl mb-6 font-bold uppercase italic md:text-6xl 2xl:text-7xl">
      {{ carbon_get_theme_option('footer_title') }}
    </h2>

    <form class="max-w-lg 2xl:max-w-xl flex flex-row w-full">
      <input type="text" class="peer focus-within:outline-none focus-within:border-white flex-grow text-lg lg:text-xl px-0 py-3 lg:py-4 border-b-2 border-black bg-transparent placeholder:text-black" placeholder="Enter your email address" />
      <input class="hover:bg-white peer-focus-within:border-white lowercase hover:text-black transition text-lg lg:text-xl px-8 lg:px-12 py-3 lg:py-4 border-2 border-black font-mono  text-white" type="submit" value="Sign up" >
  </form>

</div>
<div class="lg:w-5/12">
  <p class="max-w-xl text-xl">{{ get_option('_footer_text') }}</p>
  <div class="antialiased mt-8 text-xl"><a class="italic font-semibold text-xl 2xl:text-2xl no-underline" href="mailto:hello@axisweb.org">hello@axisweb.org</a></div>
  @if(get_option('_address'))
  <div class="antialiased mt-1"><address class="text-xl 2xl:text-2xl font-medium">{{ get_option('_address') }}</address></div> 
  @endif

  @if (!empty($footerNavigation))
    <nav class="py-12"
      aria-label="{{ wp_get_nav_menu_name('footer_navigation') }}">
      {!! $footerNavigation !!}
    </nav>
    @endif

  <div class="flex flex-row gap-2 mt-4">
    @foreach(['facebook','twitter','youtube','instagram','linkedin', 'vimeo'] as $account)
      @if(get_option('_' . $account))
        <a
            rel="noopener"
            class="text-axis-green bg-black inline-block rounded-full p-1"
            aria-label="{{ $account }} link"
            href="{{ get_option('_' . $account) }}"
            target="_blank"
          >
          <x-dynamic-component :component="'icon.' . $account" class="mt-4" />
        </a>
      @endif
    @endforeach
  </div>
</div>
</div>

@include('sections.header', ['footer' => true, 'strikethrough' => ''])

<p class="2xl:text-lg">&copy; {!! $siteName !!} {{ date("Y") }}&nbsp; All Rights Reserved @if(get_option('_charitynumber')) &nbsp;|&nbsp; Registered Charity Number {{ get_option('_charitynumber') }} @endif</p>
</footer>
