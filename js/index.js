window.addEventListener('DOMContentLoaded', function() {


  // здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
      }
    });
  }

  // здесь мы вызываем функцию и передаем в нее классы наших элементов
  setBurger({
    btnClass: "header__burger", // класс бургера
    menuClass: "header__menu-wrap", // класс меню
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });

  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function(evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;

      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

  setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });

  // скрываем меню при клике по ссылке
  document.querySelectorAll('.header__link').forEach(function(headerLink) {
    headerLink.addEventListener('click', function() {
      document.querySelector('.header__menu-wrap').classList.remove('is-opened')
      document.querySelector('.header__burger').classList.remove('is-opened')
      document.body.removeAttribute('style');
    });
  });

  // section-hero__swiper
  const sectionHeroSwiperContainer = document.querySelector('.section-hero__swiper-container');

  let mySectionHeroSwiperContainer = new Swiper(sectionHeroSwiperContainer, {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4770,
    },
    effect: 'fade',
  })

  // open/close section-hero__dropdown
  // drop0
  document.querySelector('#section-hero__btn0').addEventListener('click', function() {
    document.querySelector('#section-hero__dropdown0').classList.toggle('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown1').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown2').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown3').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown4').classList.remove('section-hero__dropdown-is-active')
  })
  // drop1
  document.querySelector('#section-hero__btn1').addEventListener('click', function() {
    document.querySelector('#section-hero__dropdown1').classList.toggle('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown0').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown2').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown3').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown4').classList.remove('section-hero__dropdown-is-active')
  })
  // drop2
  document.querySelector('#section-hero__btn2').addEventListener('click', function() {
    document.querySelector('#section-hero__dropdown2').classList.toggle('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown0').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown1').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown3').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown4').classList.remove('section-hero__dropdown-is-active')
  })
  // drop3
  document.querySelector('#section-hero__btn3').addEventListener('click', function() {
    document.querySelector('#section-hero__dropdown3').classList.toggle('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown0').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown1').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown2').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown4').classList.remove('section-hero__dropdown-is-active')
  })
  // drop4
  document.querySelector('#section-hero__btn4').addEventListener('click', function() {
    document.querySelector('#section-hero__dropdown4').classList.toggle('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown0').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown1').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown2').classList.remove('section-hero__dropdown-is-active')
    document.querySelector('#section-hero__dropdown3').classList.remove('section-hero__dropdown-is-active')
  })

  // rotate section-hero__btn::after
  $('.section-hero__btn').click(function() {
    $('.section-hero__btn').not(this).removeClass('section-hero__btn-is-active');
    $(this).toggleClass('section-hero__btn-is-active');
  });

  // close section-hero__dropdown if click outside
  window.onclick = function(event) {
    if (!event.target.matches('.section-hero__btn')) {
      var dropdowns = document.getElementsByClassName("section-hero__dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('section-hero__dropdown-is-active')) {
          openDropdown.classList.remove('section-hero__dropdown-is-active');
        }
      }
      // rotate section-hero__btn::after if click outside
      var dropbtn = document.getElementsByClassName("section-hero__btn");
      var i;
      for (i = 0; i < dropbtn.length; i++) {
        var openDropbtn = dropbtn[i];
        if (openDropbtn.classList.contains('section-hero__btn-is-active')) {
          openDropbtn.classList.remove('section-hero__btn-is-active');
        }
      }
    }
  }

  // section-gallery__select
  const element = document.querySelector('.section-gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
  });

  // section-gallery__swiper
  const sectionGallerySwiperContainer = document.querySelector('.section-gallery__swiper-container');
  let mysectionGallerySwiperContainer = new Swiper(sectionGallerySwiperContainer, {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 20,
    pagination: {
      el: '.section-gallery .section-gallery__swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.section-gallery__swiper-button-next',
      prevEl: '.section-gallery__swiper-button-prev'
    },

    breakpoints: {
      481: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true,
    watchSlidesProgress: true,
    slideVisibleClass: 'slide-visible',
    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
  });

  // section-catalog__tabs
  document.querySelectorAll('.section-catalog__tabs-btn').forEach(function(sectionCatalogTabsBtn) {
    sectionCatalogTabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-catalog__tab-content').forEach(function(sectionCatalogTabContent) {
        sectionCatalogTabContent.classList.remove('section-catalog__tab-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__tab-content-active')
      // refresh section-catalog__accordion
      $('.section-catalog__accordion').accordion("refresh");
      $('.ui-accordion-header').attr('tabindex','0');
    });
  });

  // section-catalog__tabs-btn-is-active
  document.querySelector('.section-catalog__tabs').addEventListener('click', function(e) {
    if (e.target.classList.contains('section-catalog__tabs-btn')) {
      const selected = this.querySelector('.section-catalog__tabs-btn-is-active');
      if (selected) {
        selected.classList.remove('section-catalog__tabs-btn-is-active');
      }
      e.target.classList.add('section-catalog__tabs-btn-is-active');
    }
  });

  // section-catalog__accordion-tabs
  document.querySelectorAll('.section-catalog__accordion-tabs-link').forEach(function(sectionCatalogAccordionTabsBtn) {
    sectionCatalogAccordionTabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-catalog__accordion-tabs-content').forEach(function(sectionCatalogAccordionTabsContent) {
        sectionCatalogAccordionTabsContent.classList.remove('section-catalog__accordion-tabs-content-is-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__accordion-tabs-content-is-active')
    });
  });

  // section-catalog__accordion-tabs-link-is-active
  $('.section-catalog__accordion-tabs-link').click(function() {
    $('.section-catalog__accordion-tabs-link').not(this).removeClass('section-catalog__accordion-tabs-link-is-active');
    $(this).addClass('section-catalog__accordion-tabs-link-is-active');
  });

  // section-catalog__accordion
  $( function() {
    $( '.section-catalog__accordion' ).accordion({
      collapsible: true,
      heightStyle: 'content',
      create: function ( event, ui ) {
        $('h3').attr('tabindex','0');
      }
    });
  });

  // section-events__swiper
  const sectionEventsSlider = document.querySelector('.section-events__slides-container');

  let mySectionEventsSlider;

  function mobileSectionEventsSlider () {
    if (window.innerWidth <= 620 && sectionEventsSlider.dataset.mobile == 'false') {
      mySectionEventsSlider = new Swiper(sectionEventsSlider, {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        slideClass: 'section-events__swiper-slide',
        pagination: {
          el: '.section-events .section-events__swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
      });

      sectionEventsSlider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 620) {
      sectionEventsSlider.dataset.mobile = 'false';
      if (sectionEventsSlider.classList.contains('swiper-initialized')) {
        mySectionEventsSlider.destroy();
      }
    }
  }

  mobileSectionEventsSlider();

  window.addEventListener('resize', () => {
    mobileSectionEventsSlider();
  });

  // show/hide all section-events__swiper-slide
  document.querySelector('.section-events__btn-show').addEventListener('click', function() {
    document.querySelectorAll('.section-events__swiper-slide').forEach(function(sectionEventsSwiperSlideShow) {
      sectionEventsSwiperSlideShow.classList.add('section-events__swiper-slide-show')
    });
    document.querySelector('.section-events__btn-show').classList.toggle('section-events__btn-is-active')
    document.querySelector('.section-events__btn-hide').classList.toggle('section-events__btn-is-active')
  });

  document.querySelector('.section-events__btn-hide').addEventListener('click', function() {
    document.querySelectorAll('.section-events__swiper-slide').forEach(function(sectionEventsSwiperSlideHide) {
      sectionEventsSwiperSlideHide.classList.remove('section-events__swiper-slide-show')
    });
    document.querySelector('.section-events__btn-show').classList.toggle('section-events__btn-is-active')
    document.querySelector('.section-events__btn-hide').classList.toggle('section-events__btn-is-active')
  });

  // section-editions__swiper
  const sectionEditionsSlider = document.querySelector('.section-editions__slides-container');

  let mySectionEditionsSlider;

  function mobileSectionEditionsSlider () {
    if (window.innerWidth >= 621 && sectionEditionsSlider.dataset.mobile == 'false') {
      mySectionEditionsSlider = new Swiper(sectionEditionsSlider, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        grid: {
          rows: 1,
          fill: "row"
        },
        pagination: {
          el: ".section-editions .section-editions__swiper-pagination",
          type: "fraction",
          clickable: true
        },
        navigation: {
          nextEl: ".section-editions__swiper-button-next",
          prevEl: ".section-editions__swiper-button-prev"
        },
        breakpoints: {
          901: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 49
          },
          1201: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50
          }
        },
        a11y: false,
        keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

        // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
        watchSlidesProgress: true,
        slideVisibleClass: 'slide-visible',

        on: {
          init: function () {
            this.slides.forEach(slide => {
              if (!slide.classList.contains('slide-visible')) {
                slide.tabIndex = '-1';
              } else {
                slide.tabIndex = '';
              }
            });
          },
          slideChange: function () {
            this.slides.forEach(slide => {
              if (!slide.classList.contains('slide-visible')) {
                slide.tabIndex = '-1';
              } else {
                slide.tabIndex = '';
              }
            });
          }
        }
      });

      sectionEditionsSlider.dataset.mobile = 'true';
    }
    if (window.innerWidth < 621) {
      sectionEditionsSlider.dataset.mobile = 'false';
      if (sectionEditionsSlider.classList.contains('swiper-initialized')) {
        mySectionEditionsSlider.destroy();
      }
    }
  }

  mobileSectionEditionsSlider();

  window.addEventListener('resize', () => {
    mobileSectionEditionsSlider();
  });




  // checkboxes
  (() => {
    const checkBtn = document.querySelector('.checkboxes__js-check-heading');
    checkBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
    });
  })();


  // section-projects__swiper
  const sectionProjectSlider = document.querySelector('.section-projects__swiper-container');

  let mySectionProjectSlider = new Swiper(sectionProjectSlider, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 15,
    navigation: {
      nextEl: '.section-projects__swiper-button-next',
      prevEl: '.section-projects__swiper-button-prev'
    },

    breakpoints: {
      481: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true,
    watchSlidesProgress: true,
    slideVisibleClass: 'slide-visible',
    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
  });

  // tooltip
  tippy('#tooltip0', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'purple',
  });
  tippy('#tooltip1', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'purple',
  });
  tippy('#tooltip2', {
    content: 'В стремлении повысить качество',
    theme: 'purple',
  });

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("section-contacts__map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.758468, 37.601088],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14,
      controls: []
    }, {
      suppressMapOpenBlock: true
    });

    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //   geometry: {
    //       type: "Point", // тип геометрии - точка
    //       coordinates: [55.8, 37.8] // координаты точки
    //   }
    // });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/section-contacts/section-contacts__placemark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0]
    });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
    // Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl', {
      // Отключим отображение масштабного отрезка рядом с линейкой.
      // Подробнее о настройке опций.
      size: 'small',
      position: {
        top: '283px',
        right: '10px'
      }
    });
    myMap.controls.add('geolocationControl', {
      position: {
        top: '350px',
        right: '10px'
      }
    });
  }

  // section-contacts__form
  // inputMask
  let selector = document.querySelectorAll("input[type='tel']");
  let im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  let validateForms = function(selector, rules, messages, colorWrong, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: messages,
      colorWrong: '#D11616',
      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr =  new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php',  true);
        xhr.send(formData);

        form.reset();
      }
    });
  }

  validateForms('.section-contacts__form', { name: { required: true, minLength: 2, maxLength: 30, strength: { custom: '^[A-Za-zА-Яа-яЁё\s]+$' } }, tel: { required: true } }, { name: { required: 'Введите имя', minLength: 'Имя слишком короткое', strength: 'Недопустимый формат' } ,  tel: { required: 'Это поле обязательно' } }, '.thanks-popup', 'send goal' );

  // HystModal
  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: false,
    // настройки (не обязательно), см. API
  });

  // smoth scroll
  // Найти все ссылки начинающиеся на '.js-scroll-link'
  const anchors = document.querySelectorAll('.js-scroll-link')

  // Цикл по всем ссылкам
  for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

});



