{{-- Template Name: Full-width template
--}}

@extends('layouts.app')
@section('content')
      
  @include('partials.header-section', ['pattern' => 'header-opportunities'])
    <div class="container px-4">
      <div class="toc-horizontal my-12">
        {!! do_shortcode('[toc]') !!}
      </div>
      <div class="prose !max-w-6xl">
      {{ the_content() }}     
      </div>
  </div>
@endsection
