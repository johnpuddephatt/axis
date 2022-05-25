<div>
  <div class="container my-24 flex flex-row">
    <div class="w-7/12 relative">
      {!! get_the_post_thumbnail(null, 'square-s', ['class' => '']) !!}
      @include('partials.image-tag', ['thumbnail_id' => get_post_thumbnail_id()])
    </div>

    <div class="p-24">
      @if (isset($post) && isset($post->post_type) && $post->post_type == 'post')
        <div class="mb-4 text-xl font-bold md:text-2xl md:mb-8">
          {{ get_the_date() }}
        </div>
      @elseif(isset($parent))
        <div class="inline-flex mt-12 mb-4 text-gray-500 lg:text-xl md:mb-6">
          <a class="" href="/">Home</a>
          <span class="px-3">&gt;</span>
          <a class="" href="{{ $parent->permalink }}">{!! $parent->title !!}</a>
        </div>
      @endif

      <h2 class="max-w-3xl italic font-bold text-4xl lg:text-5xl xl:text-6xl uppercase">
        {!! $title !!}
      </h2>

      @if (!empty($post->post_excerpt))
        <p class="max-w-xl mt-8 text-lg">
          {!! $post->post_excerpt !!}
        </p>
      @endif
    </div>
  </div>
</div>
