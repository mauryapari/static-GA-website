const shareBtnEle = document.querySelectorAll('.custom-event-trigger');
const formEle = document.querySelectorAll('form');

formEle.forEach(ele=>{
   ele.addEventListener('submit', (e)=>{
      e.preventDefault();
      ele.reset();
      gtag('event', 'form_submit', {
         form_id: e.target.id
      })
   })
})

shareBtnEle.forEach(ele=>{
   console.log(ele);
   ele.addEventListener('click', (e)=>{
      gtag('event', 'share_click', {
         btn_name: e.target.innerText,
      }) 
   })
})