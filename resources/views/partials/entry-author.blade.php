
    
    <a
        href="{{ get_author_posts_url(get_the_author_meta('ID')) }}"
        rel="author"
        class="text-white flex flex-row gap-2 items-center"
    >
       {!! get_avatar( get_the_author_meta( 'ID' ), 64, null, null, ['class' => 'w-12 sm:w-16 rounded-full'] ) !!}

       <span class="font-mono antialiased ml-1">
            <span class="capitalize leading-none 2xl:leading-none mb-0.5 block text-lg 2xl:text-xl">{{ get_the_author() }}</span>
            @if(class_exists('ACF') ) :
            <span class="block leading-none 2xl:leading-none text-base 2xl:text-lg">{{ the_field('role_title', 'user_' . get_the_author_meta( 'ID' )) }}</span>
            @endif
       </span>
    </a>
