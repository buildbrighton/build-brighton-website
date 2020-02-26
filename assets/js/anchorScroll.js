/**
 * Listen for pressed on anchor links and smooth scroll to the elements rather than jumping
 */

document.addEventListener('DOMContentLoaded', () => {
  const anchorlinks = document.querySelectorAll('a[href^="/#"]')
  console.log("anchorlinks", anchorlinks)
 
  for (const item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
      console.log("click")
      const href = item.getAttribute('href')
      const parts = href.split("#")
      const hashval = "#" + parts[1]
      const target = document.querySelector(hashval)
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      history.pushState(null, null, hashval)
      e.preventDefault()
    })
  }
});
