//  <script type="text/javascript" src="//rawgit.com/SimonWaldherr/ColorConverter.js/master/colorconverter.min.js"></script>
//  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>
//  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dustjs-linkedin/2.7.4/dust-full.min.js"></script>
//  <link rel="stylesheet" href="//unpkg.com/tachyons@4.5.3/css/tachyons.min.css" />
//  <link rel="stylesheet" href="//rawgit.com/isagalaev/highlight.js/master/src/styles/monokai-sublime.css">
//  <style type="text/css">
//    .adv-hide {
//      visibility: hidden;
//    }
//  </style>

//        <a href="javascript:slides.retreat()">◀</a>
//        <a href="javascript:slides.advance()">▶</a>
//
//      <div class="adv-1 adv-hide"> </div>
//      <div class="adv-2 adv-hide"> </div>
//      <div class="adv-3 adv-hide"> </div>
//
//      <div id="iphone-container" class="adv-0 adv-hide"></div>


var advCounter = 0;

function advance() {
  var elems = document.getElementsByClassName('adv-' + advCounter)
  if (!elems.length) {
    return
  }

  for (var i = 0; i < elems.length; i++) {
    elems.item(i).classList.remove('adv-hide')
  }
  advCounter++
}

function retreat() {
  if (advCounter > 0) {
    advCounter--
  }

  var elems = document.getElementsByClassName('adv-' + advCounter)
  for (var i = 0; i < elems.length; i++) {
    elems.item(i).classList.add('adv-hide')
  }
}

document.addEventListener('keydown', e => (e.keyCode == 39) && advance())
document.addEventListener('keydown', e => (e.keyCode == 37) && retreat())

function registerForClicks() {
  document.addEventListener('contextmenu', e => e.preventDefault())
  document.addEventListener('click', e => e.button ? retreat() : advance())
}

function slideNumber() {
  return advCounter
}

module.exports = { advance, retreat, slideNumber, registerForClicks }
