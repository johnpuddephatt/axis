<div class="container relative py-24">

@foreach($fields['faq'] as $faq)
<details class="max-w-3xl mx-auto border-b border-axis-blue">
    <summary class="text-black list-none hover:bg-axis-blue hover:bg-opacity-20  cursor-pointer font-mono text-3xl pt-8 py-4">{{ $faq['question'] }}</summary>
    <div class="my-12 prose prose-lg">{{ $faq['answer'] }}</div>
</details>
@endforeach

<div class=" -z-10 bg-axis-cream absolute top-0 bottom-0 left-0 w-screen -ml-[calc((100vw-100%)/2)]"></div>
</div>