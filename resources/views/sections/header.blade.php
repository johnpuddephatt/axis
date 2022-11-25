<header class="relative z-10">
  <div class="flex">
    <div class="py-8 2xl:py-12 xl:w-2/5 {{ isset($footer) ? '' : 'pl-6 lg:pl-12'}}"> <a
        class="strikethrough leading-none inline-block font-mono text-4xl 2xl:text-5xl lowercase tracking-[0.4em] {{ $strikethrough }}"
        href="{{ home_url('/') }}">{!! $siteName !!}</a>
    </div>

    @if (!empty($primaryNavigation))
      <nav @if(!isset($footer)) id="main-menu" @endif class="transform transition translate-y-full xl:!transform-none fixed px-6 xl:pl-0 flex items-center xl:relative right-0 top-0 bottom-0 xl:bottom-auto xl:right-auto xl:top-auto w-full bg-axis-blue py-8 2xl:py-12  antialiased xl:block text-xl xl:text-base 2xl:text-xl xl:w-3/5 font-mono {{ isset($footer) ? 'xl:bg-transparent' : 'xl:bg-white pr-6 2xl:pr-12 '}}"
        aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! $primaryNavigation !!}

        <script>
          document.querySelector('.login-button').addEventListener("click", (e) =>{
            e.preventDefault();
            document.body.classList.add('overflow-y-hidden');
            document.getElementById('dialog-login').showModal();
          });
        </script>

      </nav>

      @if(!isset($footer)) 
      <button id="main-menu-button"
        class="mr-6 inline-block lowercase font-mono bg-transparent xl:hidden relative z-50 px-4 my-auto py-2 ml-auto font-semibold border-2 border-black {{ isset($footer) ? '' : 'bg-white'}} ">
        Menu
      </button>
      @endif
    @endif
  </div>
</header>


<dialog onclose="document.body.classList.remove('overflow-y-hidden');" id="dialog-login" class="w-full max-w-xl backdrop:bg-axis-purple open:shadow-lg open:ring-1 open:ring-black/5 bg-white rounded-3xl p-0">
  <button onclick="document.body.classList.remove('overflow-y-hidden');document.getElementById('dialog-login').close();" class="fixed top-4 right-4 bg-white p-2 rounded-full h-10 w-10 text-4xl leading-none" aria-label="Close">×</button>
  <div class="p-12">

    <h3 class="text-3xl mt-0 mb-0">Login</h3>
    <p class="font-semibold text-lg text-axis-purple">Here are your login options</p>

    <div class="space-y-2 mt-6">
    <a class="font-bold block px-6 py-2 border rounded text-center" href="https://login.circle.so/sign_in?request_host=community.axisweb.org" target="_blank">Log in to the Axis Community</a>
    <a class="font-bold block px-6 py-2 border rounded text-center" href="https://www.axisweb.org/signin/" target="_blank">Log in to view or submit opportunities</a>
    <a class="font-bold block px-6 py-2 border rounded text-center" href="https://www.axisweb.org/signin/" target="_blank">Log in to manage your directory profile</a>
    <button class="font-bold w-full block px-6 py-2 border rounded text-center" onclick="document.body.classList.remove('overflow-y-hidden');document.getElementById('dialog-login').close()" data-cb-type = "portal" >Manage your membership </button>
    </div>


  </div>
</dialog>
