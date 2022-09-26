@if(isset($fields['memberships']))
<script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="axisweb"></script>

<div class="px-4 container relative py-24 grid lg:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-16">
@foreach($fields['memberships'] as $membership)
@php $post = get_post($membership['id']) @endphp
<div class="flex flex-col  lg:flex-row rounded-3xl bg-white @if($loop->iteration == 1) lg:col-span-3 @endif">
    <div class="px-8 py-8 lg:py-12 flex-1 flex flex-col">
<h3 class="mt-0 text-4xl mb-0 leading-none">{{ get_the_title($post->ID) }}</h3>
<p class="font-bold text-axis-purple text-lg">£{{ carbon_get_post_meta($post->ID, 'cost') }} per month</p>
<div class=" leading-normal font-bold max-w-md">{{ carbon_get_post_meta($post->ID, 'description') }}</div>
<div class="mt-auto"><button class="antialiased font-semibold transform transition duration-500 ease-out  group-hover:translate-y-2 mt-6 -ml-16 inline-block mr-3 rounded-r-full bg-axis-yellow px-16 py-4"
    onclick="document.body.classList.add('overflow-y-hidden');document.getElementById('dialog-{{ $post->ID }}').showModal()">find out more</button>
</div>
</div>
 @if($loop->iteration == 1)
 <div class="overflow-hidden h-48 lg:h-auto w-full lg:w-1/3 flex-none bg-gray-100 rounded-b-3xl lg:rounded-b-none lg:!rounded-r-3xl relative">
    {!! get_the_post_thumbnail($post->ID, null, ['class' => 'my-0 h-full w-full object-cover']) !!}
 </div>
 @endif
</div>

@if(count(carbon_get_post_meta($post->ID, 'benefits')))
<dialog onclose="document.body.classList.remove('overflow-y-hidden');" id="dialog-{{ $post->ID }}" class="w-full max-w-xl backdrop:bg-axis-purple open:shadow-lg open:ring-1 open:ring-black/5 bg-white rounded-3xl p-0">
    <button class="fixed top-4 right-4 bg-white p-2 rounded-full text-3xl" aria-label="Close">×</button>
    <div class="p-12 pb-0">
    <h3 class="text-3xl mt-0 mb-0">{{ get_the_title($post->ID) }} membership</h3>
    <p class="font-semibold text-lg text-axis-purple">£{{ carbon_get_post_meta($post->ID, 'cost') }} per month</p>

    <p class="mb-0">What’s included:</p>
    <div class="divide-y max-h-64 overflow-y-auto pb-12">
@foreach(carbon_get_post_meta($post->ID, 'benefits') as $benefit)
<div class="py-3">
<p class="my-0 text-lg"><strong>{{$benefit['title']}}</strong></p>
<p class="my-0 leading-snug">{{$benefit['description']}}</p>
</div>
@endforeach
</div>
</div>
<div class="px-12 py-3 border-t border-gray flex flex-row gap-2 items-center justify-end">
<button onclick="document.body.classList.remove('overflow-y-hidden');document.getElementById('dialog-{{ $post->ID }}').close();" data-cb-type="checkout" class="font-semibold border-2 border-axis-cream bg-axis-cream px-6 py-2" data-cb-plan-id="{{ carbon_get_post_meta($post->ID, 'monthly_plan_id') }}">
Subscribe monthly</button>
<button onclick="document.body.classList.remove('overflow-y-hidden');document.getElementById('dialog-{{ $post->ID }}').close();" data-cb-type="checkout" class="font-semibold border-2 border-axis-cream bg-axis-cream px-6 py-2" data-cb-plan-id="{{ carbon_get_post_meta($post->ID, 'monthly_plan_id') }}">
Subscribe annually</button>
</div>
</dialog>
@endif
@endforeach

<div class=" -z-10 bg-axis-purple absolute top-0 bottom-0 left-0 w-screen -ml-[calc((100vw-100%)/2)]"></div>

</div>

@endif