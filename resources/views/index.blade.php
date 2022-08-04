{{-- Template Name: Post index
--}}

@extends('layouts.app')
@section('content')
  
    @include('partials.header-section', ['pattern' => 'header-articleindex'])

    <div class="px-12 container flex flex-col xl:grid grid-cols-3 gap-16 2xl:gap-24 mb-36 pt-24 2xl:pt-36 " id="posts">

    <div class="col-span-1 row-span-1 font-mono">
      <h3 class="text-xl 2xl:text-2xl mb-8">Filter by</h3>

      <nav>
        <a href="/articles#posts" class="text-lg 2xl:text-xl  block py-3 border-b border-axis-blue">All articles</a>
        @foreach($categories as $category)
          @if($category->name != 'Uncategorized')
            <a href="?category={{ $category->term_id }}#posts" class="text-lg 2xl:text-xl block py-3 border-b border-axis-blue">{{ $category->name }}</a>
          @endif
        @endforeach
</nav>
    </div>

      @php
            $post_styles = [
              '',
              '',
              ''];
          @endphp
    @foreach($posts as $post)
    <a href="{{ get_permalink($post->ID) }}"
            class="{{ ($loop->index == 2 || $loop->index == 8) ? 'col-span-2' : '' }} transform mt-auto transition duration-500 ease-out group hover:scale-105">
              
                @if(has_post_thumbnail($post->ID))
                  {!! get_the_post_thumbnail($post->ID, '4by3', ['class' => 'w-full h-auto']) !!}
                @else
                <div class="rounded w-full pt-[75%] bg-gray-50"></div>
                @endif
              
            <div class="-mt-16">
              <span class="antialiased font-semibold transform transition duration-500 ease-out  group-hover:translate-y-2 mb-8 -ml-12 inline-block rounded-r-full bg-axis-yellow px-12 py-4">Read more</span>
              <h3 class="mb-2 text-3xl 2xl:text-4xl font-bold">{{ $post->post_title }}</h3>
              <p class="text-xl font-mono">
              {{ get_the_date('', $post->ID) }}</p>
            </div>
            </a>
    @endforeach

    </div>
  
@endsection
