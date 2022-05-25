@extends('layouts.app', ['strikethrough' => "strikethrough-white", 'background' => "bg-axis-blue"])
@section('content')
  @while (have_posts())
    @php(the_post()) @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
  @endwhile
@endsection
