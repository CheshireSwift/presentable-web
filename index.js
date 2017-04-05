var slideCounter = 0

function styleElems(classListUpdate, slideModifier) {
  var modifier = slideModifier || 0
  var slideToChange = slideCounter + modifier
  var elems = document.getElementsByClassName('slide-' + slideToChange)
  for (var i = 0; i < elems.length; i++) {
    classListUpdate(elems.item(i).classList)
  }
  
  return !!elems.length
}

function advance() {
  slideCounter++
  var found = styleElems(classList => classList.add('slide-current'))
  if (!found) {
    slideCounter--
    return
  }
  
  styleElems(classList => {
    classList.remove('slide-current')
    classList.add('slide-previous')
  }, -1)
}

function retreat() {
  var elems = document.getElementsByClassName('slide-' + slideCounter)
  var found = styleElems(classList => classList.remove('slide-current'))
  if (!found) {
    return
  }
  
  slideCounter--
  styleElems(classList => {
    classList.remove('slide-previous')
    classList.add('slide-current')
  })
}

function slideNumber() {
  return slideCounter
}

function registerForKeys() {
  // right cursor, page down
  document.addEventListener('keydown', e => (e.keyCode == 39 || e.keyCode == 34) && advance())
  
  // left cursor, page up
  document.addEventListener('keydown', e => (e.keyCode == 37 || e.keyCode == 33) && retreat())
}

function registerForClicks() {
  document.addEventListener('contextmenu', e => e.preventDefault())
  document.addEventListener('click', e => e.button ? retreat() : advance())
}

function configure(opts) {
  if (opts.keyboard) registerForKeys()
  if (opts.mouse) registerForClicks()
}

module.exports = { advance, retreat, slideNumber, configure }
