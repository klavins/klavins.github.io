document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile nav toggle ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }

  // --- Number publications ---
  ['paper', 'report', 'thesis'].forEach(function (cls) {
    var elems = document.getElementsByClassName(cls);
    var n = elems.length;
    for (var i = 0; i < elems.length; i++) {
      elems[i].innerHTML = "<span class='num'>[" + n + "]</span> " + elems[i].innerHTML;
      n--;
    }
  });

  // --- Publication tab switching ---
  var tabs = document.querySelectorAll('.pub-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = this.getAttribute('data-target');
      // Deactivate all tabs
      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      // Show/hide sections
      document.querySelectorAll('.pub-section').forEach(function (sec) {
        sec.style.display = sec.id === target ? 'block' : 'none';
      });
    });
  });

});
