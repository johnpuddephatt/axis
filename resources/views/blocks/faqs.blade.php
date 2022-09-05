<div class="px-4 container relative pb-64 lg:pb-48 lg:py-48">
<span class="font-mono leading-none  absolute text-8xl text-transparent -right-8 top-0 transform -translate-y-1/2" style="font-size: 20em; -webkit-text-stroke: 1px rgb(102, 141, 237);">?</span>
<span class="font-mono leading-none absolute text-8xl text-transparent -left-24 bottom-4 transform" style="font-size: 20em; -webkit-text-stroke: 1px rgb(102, 141, 237);">?</span>

@foreach($fields['faq'] as $faq)
<details class="max-w-3xl mx-auto border-b border-axis-blue">
    <summary class="text-black list-none hover:bg-axis-blue hover:bg-opacity-20  cursor-pointer font-mono text-3xl pt-8 py-4">{{ $faq['question'] }}</summary>
    <div class="my-12 prose prose-lg">{{ $faq['answer'] }}</div>
</details>
@endforeach

<div class=" -z-10 bg-axis-cream absolute top-0 bottom-0 left-0 w-screen -ml-[calc((100vw-100%)/2)]"></div>
</div>