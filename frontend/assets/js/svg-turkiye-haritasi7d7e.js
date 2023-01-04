/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
        console.log(event.target);
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');
        if (
          id === 'guney-kibris'
        ) {
          return;
        }

        var url = "/uyelerimiz/" + parent.getAttribute('data-plakakodu');

        window.location.pathname = url;
      }
    }
  );
    element.addEventListener(
        'touchstart',
        function (event) {
            console.log(event.target);
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');
                if (
                    id === 'guney-kibris'
                ) {
                    return;
                }

                var url = "/uyelerimiz/" + parent.getAttribute('data-plakakodu');

                window.location.pathname = url;
            }
        }
    );
    element.addEventListener(
        'touch click',
        function (event) {
            console.log(event.target);
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');
                if (
                    id === 'guney-kibris'
                ) {
                    return;
                }

                var url = "/uyelerimiz/" + parent.getAttribute('data-plakakodu');

                window.location.pathname = url;
            }
        }
    );
    element.addEventListener(
        'touch',
        function (event) {
            console.log(event.target);
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');
                if (
                    id === 'guney-kibris'
                ) {
                    return;
                }

                var url = "/uyelerimiz/" + parent.getAttribute('data-plakakodu');

                window.location.pathname = url;
            }
        }
    );

   var seciliilkodu =  window.location.pathname.split('/')[2] ?? false;
   if(seciliilkodu){
       document.querySelector("g[data-plakakodu='"+seciliilkodu+"'] > path").style.fill = "#211a17";
   }
}
