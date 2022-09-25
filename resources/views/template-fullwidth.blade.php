{{-- Template Name: Full-width template
--}}

@extends('layouts.app')
@section('content')
      
  @include('partials.header-section', ['pattern' => 'header-section'])
    <div class="container px-4 max-w-5xl">
      <div class="toc-horizontal">
        {!! do_shortcode('[toc]') !!}
      </div>
      {{ the_content() }}     
  </div>
@endsection
