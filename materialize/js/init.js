const datePicker = document.querySelector('.datepicker');
const datePickerInstance = M.Datepicker.init(datePicker);

const parallax = document.querySelector('.parallax');
const parallaxInstance = M.Parallax.init(parallax);

const carousel = document.querySelector('.carousel');
const carouselInstance = M.Carousel.init(carousel);

const collapsible = document.querySelector('.collapsible');
const collapsibleInstance = M.Collapsible.init(collapsible);

const scrollspy = document.querySelector('.scrollspy');
const scrollspyInstance = M.ScrollSpy.init(scrollspy);

const autocomplete = document.querySelector('.autocomplete');
const autocompleteInstance = M.Autocomplete.init(autocomplete,{
    data: {
        "大连理工": null,
        "大连交通": null,
        "大连海事": null
    },
});

const textareaNeedCount = document.querySelector('textarea#description');
const textareaNeedCountInstance=new M.CharacterCounter(textareaNeedCount);
const textareaCountPlusResize=new M.textareaAutoResize(textareaNeedCountInstance);