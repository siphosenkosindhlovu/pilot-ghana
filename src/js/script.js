(function () {
  var triggers = document.querySelectorAll('.trigger');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      var target = e.target.getAttribute('data-target');
      var collapsible = document.querySelector(target);
      if (collapsible.style.maxHeight) {
        collapsible.style.maxHeight = null;
      } else {
        collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
      }
    });
  });

  var toggleAll = document.querySelector('#showAll')
  toggleAll && toggleAll.addEventListener('click', showAll);

  function showAll() {
    var optionsEl = document.querySelectorAll('.options');
    optionsEl.forEach(function (option) {
      if (option.style.maxHeight) {
        option.style.maxHeight = null;
      } else {
        option.style.maxHeight = option.scrollHeight + 'px';
      }
    });
  }

  var fadeInScroll = document.querySelectorAll('.water-box')
  var waterBoxObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("playing");
      }
    })
  }, {
    rootMargin: '20px',
    threshold: 0.6
  })
  fadeInScroll.forEach(function(element){
    waterBoxObserver.observe(element);
  })

  var navTrigger = document.querySelector('.nav-trigger');
  var navbar = document.querySelector('.navbar');
  navTrigger.addEventListener('click', function(e){
    navbar.classList.toggle('open');
    console.log(document.body)
  })
})();
