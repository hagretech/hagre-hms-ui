let nav = $('.mobile_nav'),
    dashboard = $('nav')

console.log(nav)

nav.click(function () {
    console.log('yes')
    dashboard.toggleClass('mobile_nav__active')
})
