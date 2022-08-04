<article {{ post_class("flex flex-col xl:flex-row") }}>  
   <header class="bg-axis-purple px-6 xl:px-12 flex-none xl:w-2/5 xl:min-h-screen">
    <div class="py-12 md:py-16 xl:h-[80vh] flex flex-col justify-center">
      <div class="text-xl 2xl:text-2xl font-mono antialiased text-white">Project.</div>
      <h1 class="max-w-2xl mt-8 mb-6 text-5xl sm:text-6xl 2xl:text-7xl italic uppercase">{!! $post->post_title !!}</h1>
      <div class="text-3xl 2xl:text-4xl max-w-xs">{{ $post->post_excerpt }}</div>
    </div>
    <nav class="max-w-xs xl:-mt-12 mb-24">
      <p class="ez-toc-link"><a href="#project-overview">Overview</a></p>
      {!! do_shortcode('[toc]') !!}
      @if($posts)
      <p class="ez-toc-link"><a href="#project-posts">Updates</a></p>
      @endif 
    </nav>
  </header>

  <div class="entry-content xl:w-3/5 bg-white">

    {!! get_the_post_thumbnail(null, '2by1', ['class' => 'w-full', 'sizes' => '80vw']) !!}
    
    


<div class="py-16 p-6 lg:p-16 xl:p-32">
  
    <div class="prose prose-lg 2xl:prose-xl">
      {{ the_content() }}
  
    @if($posts)
       
          <h2 id="project-posts" class="text-3xl lg:!-mb-12 xl:!-mb-24">Project updates</h2>
          <div class="-mb-32 xl:-mb-48">
 <div class="alignfull pb-32" ">
          <div class="mx-auto max-w-7xl">
      @foreach($posts as $related_post)
        <div
          class=" group flex transform flex-row items-center gap-8 transition duration-500 ease-out hover:scale-105">
          <a href="{{ get_permalink($related_post->ID) }}" class="w-1/2">
            @if(has_post_thumbnail($related_post->ID))
              {!! get_the_post_thumbnail($related_post->ID,  '4by3', []) !!}
            @else
              <div class="rounded w-full pt-[75%] bg-gray-50"></div>
            @endif
          </a>
          <div class="w-1/2">
            <h3 class="mb-6 text-3xl 2xl:text-4xl font-semibold font-sans">{{ $related_post->post_title }}</h3>
             <p class="text-xl font-mono">
              {{ get_the_date('', $related_post->ID) }}</p>
            <p class="font-medium">
              {{ $related_post->post_excerpt }}
            </p>
            <a class="no-underline font-semibold antialiased transform transition duration-500 ease-out  group-hover:translate-y-2 mt-4 -ml-16 inline-block rounded-r-full bg-axis-yellow px-16 py-4" href="{{ get_permalink($post->ID) }}">Read more</a>
          </div>
        </div>
      @endforeach
</div>
</div>
</div>
<div class="mt-16"> 
       <a class="inline-block  no-underline font-mono font-bold border-2 border-axis-cream px-6 py-2 text-lg 2xl:text-xl" href="{{ get_permalink( get_option( 'page_for_posts' ) ) }}?projects={{ $post->post_name }}">
         see all {{ $post->post_title }} updates</a>

         </div>
    @endif
    </div>

  </div>
  </div>
</article>
