{{-- Template Name: Section Template --}}
@extends('layouts.app')
@section('content')
  <div class="container">
    @while (have_posts())
      @php(the_post())

      <div>
        <div class="container my-24 flex flex-row">
          <div class="w-1/2 relative">
            {!! get_the_post_thumbnail(null, '2by1', ['class' => '']) !!}

            @include('partials.image-tag', ['thumbnail_id' => get_post_thumbnail_id()])

          </div>

          <div class="w-1/2 p-24">
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

            <h2 class="max-w-3xl italic mb-6 font-bold text-4xl lg:text-5xl xl:text-6xl uppercase">
              {!! $title !!}
            </h2>

            @if (the_excerpt())
              <p class="max-w-xl mt-8 text-lg">
                {!! get_the_excerpt() !!}
              </p>
            @endif
          </div>
        </div>
      </div>


      <ul class="mx-auto mb-48 w-full max-w-lg">
        @foreach ($children as $child)
          <li class="border-b border-axis-blue-500 py-4 font-mono text-3xl">
            <a href="{{ get_permalink($child->ID) }}">{{ $child->post_title }}</a>
          </li>
        @endforeach
      </ul>
    @endwhile
  </div>
@endsection
