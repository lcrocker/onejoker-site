
export default function Home() {
  return (
    <div id="home-root" class="flex flex-col justify-start justify-items-start">
      <div id="hero" class="p-2">
        <svg
          width="360"
          height="160"
          viewBox="0 0 180 80"
          version="1.1"
          id="svg1"
          xmlns="http://www.w3.org/2000/svg">
          <defs id="defs1">
            <style type="text/css">
              @import url('https://fonts.googleapis.com/css2?family=Dai+Banna+SIL:ital,wght@0,600;1,300');
            </style>
          </defs>
          <g id="layer1">
            <text style="font-family:Dai Banna SIL;font-size:60px;">
              <tspan style="fill:#aa0000;" x="0" y="36">O</tspan>
              <tspan style="fill:#aa0000;" x="34" y="27.5">n</tspan>
              <tspan style="fill:#aa0000;" x="66" y="27.5">e</tspan>
              <tspan style="fill:black;" x="42" y="64">J</tspan>
              <tspan style="fill:black;" x="60" y="56">o</tspan>
              <tspan style="fill:black;" x="88" y="56">k</tspan>
              <tspan style="fill:black;" x="119" y="56">e</tspan>
              <tspan style="fill:black;" x="147" y="56">r</tspan>
          </text>
          </g>
        </svg>
      </div>
      <div class="flex flex-row space-x-4 justify-stretch justify-items-start">
        <div class="flex flex-grow content-start justify-stretch justify-items-stretch bg-gradient-to-r from-[#88cccc] to-[#ccdddd] from-10% to-90%">
          <div class="pl-4 flex flex-row space-x-4 items-center">
            <a href="/">Home</a>
            <a href="/code">Code</a>
            <a href="/images">Images</a>
            <a href="/articles">Articles</a>
          </div>
          <div class="flex-grow">
          </div>
          <div class="flex flex-row space-x-4 items-center pr-4">
            <a href="/about">About</a>
          </div>
        </div>
      </div>
      <br style="clear:both;" />
      <div class="mt-4 prose">
        <h1>Welcome</h1>
        <h3 class="mb-4">(Last updated September 27, 2024)</h3>
        <p>
          The OneJoker Project aspires to be a single source for all things
          in the intersection of computers and playing cards.
          It includes free code libraries in the Rust and Dart programming languages
          for handling cards and cards games.
          It includes free playing card images in many sizes and formats.
          And it includes articles about card games and programming.
        </p>
        <p>
          Everything on this site is free software: not just free as in beer,
          but free as in freedom. You are free to use, modify, and distribute it
          in any way you like with no restrictions.
        </p>
      </div>
    </div>
  )
}
