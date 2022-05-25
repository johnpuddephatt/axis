<article @php(post_class('flex flex-row'))>
  <header class="bg-axis-blue pl-12 xl:w-2/5 min-h-screen">
    <div class="h-[80vh] flex flex-col justify-center">
      <h1 class="text-6xl italic uppercase">{!! $title !!}</h1>
      @include('partials.entry-meta')
    </div>
  </header>

  <div class="entry-content xl:w-3/5 bg-white">

    {!! get_the_post_thumbnail(null, '2by1', ['class' => 'w-full', 'sizes' => '80vw']) !!}

    <div class="p-32 prose prose-lg max-w-none">
      @php(the_content())

    </div>
  </div>
</article>
