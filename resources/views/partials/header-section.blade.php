<div class="container px-4 my-12 lg:my-24 flex flex-col lg:flex-row items-center gap-32 lg:gap-16 2xl:gap-32">
    <div class="lg:w-1/2 relative">

    @if(isset($pattern))
        @include('svg.' . $pattern, ['classes' => 'absolute w-1/3 transform -translate-x-6 -translate-y-12 h-auto'] )
    @endif
    {!! $thumbnail !!}
    @include('partials.image-tag', ['thumbnail_id' => get_post_thumbnail_id()])

    </div>

    <div class="w-full lg:w-1/2 lg:mt-0 max-w-lg">
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

    <h2 class="italic mb-6 font-bold text-4xl lg:text-5xl xl:text-6xl uppercase">
        {!! $title !!}
    </h2>

    @if ($excerpt)
        <p class="mt-8 text-lg 2xl:text-xl">
        {!! $excerpt !!}
        </p>
    @endif
    </div>
</div>