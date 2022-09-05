{{-- Template Name: Join template
--}}

@extends('layouts.app')
@section('content')
  
  @include('partials.header-section', ['pattern' => 'header-join'])

  <div class="container prose max-w-5xl">
    {!! the_content() !!}
  </div>
@endsection
