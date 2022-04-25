<a class="sr-only focus:not-sr-only" href="#main">
  {{ __('Skip to content') }}
</a>

@include('sections.header')

<main id="main" class="w-full overflow-x-hidden main">@yield('content')</main>

@include('sections.footer')
