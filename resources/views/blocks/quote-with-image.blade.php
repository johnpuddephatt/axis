<div class="container max-w-3xl relative py-24">

<blockquote class="border-l-0 pl-0 not-italic">
    <div class="text-2xl font-bold mb-8"><span  style="vertical-align: bottom;"  class="text-9xl inline-block h-[0.6rem] leading-[0] text-axis-green font-mono">“</span>{{ $fields['quote'] }}<span  style="vertical-align: bottom;"  class="text-9xl inline-block h-0 leading-[0] text-axis-green font-mono">”</span></div>
    <div class="flex flex-row gap-4 items-center">
        {!! wp_get_attachment_image($fields['author_image'],'thumbnail',null,['class'=> 'my-0 w-20 h-20 rounded-full']) !!}
        <div>
            <div class="text-xl font-bold leading-tight">{{ $fields['author'] }}</div>
            <div class="font-semibold  leading-tight">{{ $fields['author_role'] }}</div>
        </div>
    </div>
</blockquote>

</div>