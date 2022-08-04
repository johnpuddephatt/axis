<footer class="bg-axis-green p-6 pt-24 lg:pt-32 lg:p-12">
  <div class="mb-16 flex flex-col xl:flex-row gap-16 lg:gap-32">
  <div class="lg:w-7/12 ">
    <h2 class="max-w-2xl text-5xl mb-4 font-bold uppercase italic md:text-6xl 2xl:text-7xl">Stay up to date with the latest</h2>

    <form class="max-w-2xl flex flex-row w-full">
      <input type="text" class="flex-grow text-lg lg:text-xl px-0 py-3 lg:py-4 border-b border-black bg-transparent placeholder:text-black" placeholder="Enter your email address" />
      <input class="text-lg lg:text-xl px-8 lg:px-12 py-3 lg:py-4 border border-black font-mono  text-white" type="submit" value="Sign up" >
  </form>

</div>
<div class="lg:w-5/12">
  <p class="max-w-xl text-xl">We actively seek new collaborations with artists, producers, curators, commissioners and organisations who share our values and seek to with, support and profile artists.</p>
  <div class="antialiased mt-8 text-xl"><a class="italic font-semibold text-2xl no-underline" href="mailto:hello@axisweb.org">hello@axisweb.org</a></div>
  @if(get_option('_address'))
  <div class="antialiased mt-1"><address class="text-2xl font-medium">{{ get_option('_address') }}</address></div> 
  @endif

  @if (!empty($footerNavigation))
    <nav class="py-12"
      aria-label="{{ wp_get_nav_menu_name('footer_navigation') }}">
      {!! $footerNavigation !!}
    </nav>
    @endif

  <div class="flex flex-row gap-2 mt-4">
    @foreach(['facebook','twitter','youtube','instagram','linkedin'] as $account)
      @if(get_option('_' . $account))
        <a
            rel="noopener"
            class="text-axis-green bg-black block rounded-full w-10 h-10 p-1"
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

<p class="2xl:text-lg">&copy; {!! $siteName !!} {{ date("Y") }}&nbsp; All Rights Reserved &nbsp;|&nbsp;  @if(get_option('_charitynumber')) Registered Charity Number {{ get_option('_charitynumber') }} @endif</p>
</footer>
