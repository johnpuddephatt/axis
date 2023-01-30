<article @php(post_class('flex flex-col xl:flex-row'))>  
  <header class="bg-axis-blue px-6 xl:px-12 flex-none xl:w-2/5 xl:min-h-screen">
    <div class="py-12 md:py-16 xl:h-[80vh] flex flex-col justify-center">
      <div class="text-white text-xl 2xl:text-2xl font-mono antialiased">Article. <time class="updated" datetime="{{ get_post_time('c', true) }}">{{ get_the_date() }}</time></div>
      <h1 class="max-w-2xl mt-8 mb-6 text-5xl sm:text-6xl 2xl:text-7xl italic uppercase">{!! $post->post_title !!}</h1>
      @include('partials.entry-author')
    </div>
  </header>

  <div class="entry-content xl:w-3/5 bg-white">

    {!! get_the_post_thumbnail(null, '2by1', ['class' => 'w-full', 'sizes' => '80vw']) !!}
<div class="py-16 p-6 lg:p-16 xl:py-24 xl:px-32">
    <div class="prose prose-lg 2xl:prose-xl">
      {{ the_content() }}
    </div>
  </div>
</div>
</article>
