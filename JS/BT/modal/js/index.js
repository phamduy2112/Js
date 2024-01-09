// mức trung bình
// const template =` 
// <div class="modal">
// <div class="modal-content">
//     <i class="fa fa-times modal-close" aria-hidden="true"></i>
//     <div class="modal-desc">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo sit enim omnis optio assumenda? Cumque quam magni quod! Pariatur, nostrum! Cupiditate, nihil et aliquid vitae dolores facere nisi sit?
//     </div>
//     <div class="modal-action">
//         <button class="modal-submit">Confirm</button>
//         <button class="modal-cancel">Cancel</button>
//     </div>
// </div>
// </div>
// `;
// const body=document.body;
// body.insertAdjacentHTML("afterbegin",template)
// mức khó

const modal=document.createElement('div');
modal.className="modal";
const modalContent=document.createElement('div');
modalContent.className="modal-content";
modal.appendChild(modalContent);
const faModal=document.createElement('i');
faModal.className="fa fa-times modal-close";
modalContent.appendChild(faModal);
document.body.appendChild(modal);
// 
const modalShow=document.querySelector('.modal');
if(modalShow){
    setTimeout(function(){
        modalShow.classList.add('is-show')
    },3000)
}
