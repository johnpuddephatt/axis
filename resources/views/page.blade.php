@extends('layouts.app')
@section('content')
  @while (have_posts())
    @php(the_post())
    <div class="">
      {!! get_the_post_thumbnail(null, '3by1', ['class' => 'w-full xl:w-4/5 xl:ml-auto mt-16 mb-24', 'sizes' => '80vw']) !!}

      <div class="flex flex-col-reverse xl:flex-row mb-24">
        @if ($siblings)
          <aside class="font-mono px-4 lg:px-0 py-2 xl:w-2/5">
            <nav class="xl:max-w-sm ml-auto block mr-16">
              <h2 class="mb-8 text-xl font-bold text-blue">
                <a class="" href=" {{ $parent->permalink }}">
                  {!! $parent->title !!}
                </a>
              </h2>
              @foreach ($siblings as $page)
                <a class="border-b border-axis-blue hover:bg-sky-lightest block py-3 text-lg @if (get_permalink() == get_permalink($page->ID)) bg-axis-blue-100 @else text-gray-600 @endif"
                  href="{{ get_permalink($page->ID) }}">
                  {!! get_the_title($page->ID) !!}
                </a>
              @endforeach
            </nav>
          </aside>
        @endif

        <article class="xl:w-3/5 xl:border-l px-4 md:px-0 xl:px-32">
          <h1 class="text-4xl mb-12 font-bold">{{ the_title() }} </h1>

          <div class="prose prose-lg max-w-none">
            {{ the_content() }}
          </div>
        </article>
      </div>
    </div>
  @endwhile
@endsection
