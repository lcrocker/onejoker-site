
export default function CodeHome() {
  return (
    <div>
      <div class="flex flex-row justify-stretch content-start justify-items-start">
        <div class="p-2">
          <svg
            width="180"
            height="80"
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
        <div class="flex flex-row self-start space-x-4 justify-between w-full bg-gradient-to-r from-[#88cccc] to-[#ccdddd] from-10% to-90%">
          <div class="flex flex-row space-x-4 pl-4 items-center justify-start">
            <a href="/">Home</a>
            <a href="/code">Code</a>
            <a href="/images">Images</a>
            <a href="/articles">Articles</a>
          </div>
          <div class="flex flex-row space-x-4 items-center pr-4 justify-end">
            <a href="/about">About</a>
          </div>
        </div>
      </div>
      <br style="clear:both;" />
      <div>
        <div class="mt-4">
          <h1>Code</h1>
          <h3 class="mb-4">(Last updated October 20, 2024)</h3>
          <p>The project includes code libraries in this
          &nbsp;<a href="https://github.com/lcrocker/ojpoker">GitHub repository</a>.
            Current languages include
            &nbsp;<a href="https://dart.dev">Dart</a>&nbsp; and
            &nbsp;<a href="https://rust-lang.org">Rust</a>.
            API documentation for these is available
            &nbsp;<a href="https://lcrocker.github.io/ojpoker/">here</a>.
          </p>

          <ul class="flex space-x-4">
          <li class="inline"><a href="https://lcrocker.github.io/ojpoker/dart/index.html">
          <img class="h-12" alt="dart" src="/img/dart-logo.svg" />&nbsp;Dart</a></li>
          <li class="inline"><a href="https://lcrocker.github.io/ojpoker/rust/index.html">
          <img class="h-12" alt="dart" src="/img/rust-logo-blk.svg" />&nbsp;Rust</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
