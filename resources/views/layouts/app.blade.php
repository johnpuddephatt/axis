
<a class="sr-only block  !py-6 text-center focus:not-sr-only bg-white" href="#main">
  {{ __('Skip to content') }}
</a>

<div class="wrapper {{ $background ?? null }}">

  @include('sections.header', ['strikethrough' => $strikethrough ?? 'strikethrough-yellow'])

  <main id="main" class="main w-full overflow-x-hidden">@yield('content')</main>

  @include('sections.footer')

</div>
