(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('#layout-menu a[data-tab]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('.content-section'));

  function activate(tabName) {
    if (!tabs.some(function (tab) { return tab.getAttribute('data-tab') === tabName; })) {
      tabName = 'about';
    }
    sections.forEach(function (section) {
      section.classList.toggle('is-active', section.getAttribute('data-section') === tabName);
    });
    tabs.forEach(function (tab) {
      var selected = tab.getAttribute('data-tab') === tabName;
      tab.classList.toggle('current', selected);
      if (selected) tab.setAttribute('aria-current', 'page');
      else tab.removeAttribute('aria-current');
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (event) {
      event.preventDefault();
      var tabName = tab.getAttribute('data-tab');
      activate(tabName);
      window.history.replaceState(null, '', '#' + tabName);
    });
  });
  window.addEventListener('hashchange', function () {
    activate(window.location.hash.substring(1));
  });
  activate(window.location.hash.substring(1));
}());
