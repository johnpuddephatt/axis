{{-- Template Name: Section template
--}}

@extends('layouts.app')
@section('content')
      
  @include('partials.header-section', ['pattern' => 'header-section'])
    <div class="container px-4">

      <ul class="block mx-auto lg:pt-12 mb-48 w-full max-w-lg">
        @foreach ($children as $child)
          <li class="border-b border-axis-blue-500 py-4 2xl:py-6 font-mono text-2xl lg:text-3xl 2xl:text-4xl">
            <a href="{{ get_permalink($child->ID) }}">{{ $child->post_title }}</a>
          </li>
        @endforeach
      </ul>
  </div>
@endsection
