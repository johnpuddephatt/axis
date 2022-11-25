@extends('layouts.app')
@section('content')
  @while (have_posts())
    @php(the_post())
    <div class="">
      <div class="min-h-[6em]">
      {!! get_the_post_thumbnail(null, '3by1', ['class' => 'w-full xl:w-4/5 xl:ml-auto lg:mt-16 mb-12 lg:mb-24', 'sizes' => '80vw']) !!}
      </div>

      <div class="flex flex-col-reverse xl:flex-row mb-24 @if (!$siblings) justify-center @endif">
        @if ($siblings)
          <aside class="mt-16 pt-16 xl:pt-0 xl:mt-0 font-mono px-4 lg:px-0 py-2 xl:w-2/5 border-t xl:border-none">
            <nav class="xl:max-w-sm ml-auto block xl:mr-16">
              <h2 class="mb-8 2xl:text-2xl text-xl font-bold text-blue">
                <a class="" href=" {{ $parent->permalink }}">
                  {!! $parent->title !!}
                </a>
              </h2>
              @foreach ($siblings as $page)
                <a class="border-b border-axis-blue 2xl:py-5 hover:bg-sky-lightest block py-3 2xl:text-xl text-lg hover:bg-axis-blue-50 @if (get_permalink() == get_permalink($page->ID)) bg-axis-blue-100 @else text-gray-600 @endif"
                  href="{{ get_permalink($page->ID) }}">
                  {!! get_the_title($page->ID) !!}
                </a>
              @endforeach
            </nav>
          </aside>
        @endif

        <article class="xl:w-3/5 xl:border-l px-4 md:px-0 xl:px-32">
          <h1 class="2xl:text-6xl text-5xl mb-12 font-bold">{{ the_title() }} </h1>

          <div class="prose prose-lg 2xl:prose-xl">
            {{ the_content() }}
          </div>
        </article>
      </div>
    </div>
  @endwhile
@endsection
