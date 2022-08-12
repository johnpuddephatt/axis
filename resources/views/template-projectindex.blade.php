{{-- Template Name: Project index
--}}
@extends('layouts.app')
@section('content')
  
  @include('partials.header-section', ['pattern' => 'header-projectindex'])

    <div class="px-4 container mb-36 max-w-5xl space-y-24 lg:mt-48">
      @foreach ($projects as $project)
      @if($loop->index % 2)
          <a href="{{ get_permalink($project->ID) }}"
            class="group flex flex-col md:flex-row transition duration-500 ease-out hover:scale-105">
            <div class="flex flex-col items-start justify-center md:w-2/3 bg-axis-purple p-12 md:pr-36">
              <h3 class="mb-4 font-mono text-4xl ">{{ $project->post_title }}</h3>
              <p class="text-xl 2xl:text-2xl  leading-tight">
                {{ $project->post_excerpt }}
              </p>
              <span class="mr-auto transform transition duration-500 ease-out group-hover:translate-y-2 mt-6 -ml-16 inline-block antialiased font-semibold rounded-r-full bg-white px-16 py-4">Read more</span>
            </div>
            <div class="-mt-8 md:-ml-24 mx-8 md:mx-0 md:my-8 h-auto md:w-[calc(33%+6rem)] block">{!! get_the_post_thumbnail($project->ID, '4by3', ['class' => 'w-full']) !!}</div>
</a>

        @else
               <a href="{{ get_permalink($project->ID) }}"
            class="group lg:ml-24 flex flex-col md:flex-row items-center gap-4 lg:gap-8 transition duration-500 ease-out hover:scale-105">
                    <div class="w-full md:w-1/2 block" >{!! get_the_post_thumbnail($project->ID, '4by3', ['class' => 'w-full']) !!}</div>
            <div class="w-full md:w-1/2 px-8 md:mx-0">
              <h3 class="mb-4 font-mono text-4xl">{{ $project->post_title }}</h3>
              <p class="text-xl 2xl:text-2xl text-neutral-500 leading-tight">
                {{ $project->post_excerpt }}
              </p>
              <span class="relative z-10 transform transition duration-500 ease-out group-hover:translate-y-2 mt-6 -ml-24 inline-block antialiased font-semibold rounded-r-full bg-axis-yellow px-16 py-4">Read more</span>
            </div>
</a>
        @endif
      @endforeach
    </div>
  
@endsection
