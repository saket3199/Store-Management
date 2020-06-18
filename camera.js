// const productList = document.querySelector('#productList');

// firebase.auth().onAuthStateChanged(function (user) {
// if (user) {
//     db.collection('product-info').doc(user.email).collection('time').onSnapshot(snapshot=>{
//     console.log(snapshot);
//     let changes = snapshot.docChanges();
//     changes.forEach(change=>{
//       if(change.type=='added'){
//         console.log(change.doc);
//         renderProduct(change.doc);
//       }
//       // }else if(change.type=='removed'){
//       //   let li = productList.querySelector('[data-id='+change.doc.data().time+']');
//       //   productList.removeChild(li);
//       // }
//     })
//   });}else{
//     alert('no user found!!');
//   }; 
// },

// function renderProduct(doc){
// // let div1=document.createElement('div');
// console.log(doc.id);
// let li=document.createElement('li');
// let prdctInfo=document.createElement('span');
// let time=document.createElement('span');
// // let div2=document.createElement('div');
// let cross = document.createElement('button');

// li.setAttribute('data-id', doc.id);
// prdctInfo.textContent=doc.data().productInfo;
// time.textContent=doc.data().time;
// cross.textContent='x';

// console.log(li.appendChild(prdctInfo));
// li.appendChild(cross);

// productList.appendChild(li);

// // //deleting data....
// cross.addEventListener('click', (e) => {
// var user = firebase.auth().currentUser;
//   console.log(user.email);  

// // let id = e.target.parentElement.getAttribute('data-id');
// db.collection('product-info').doc(user.email).collection('time').doc(doc.data().time).delete();
// location.reload()


// });
// });

const productList = document.querySelector('#productList');
var d = Date();
console.log(d);

firebase.auth().onAuthStateChanged(function(user){  
      console.log(user.email);
      if (user){      
        db.collection('product-info').doc(user.email).collection('time').onSnapshot(snapshot=>{
        console.log(snapshot);
        let changes = snapshot.docChanges();
        changes.forEach(change=>{
          if(change.type=='added'){
            console.log(change.doc);
            renderProduct(change.doc);
          }
          // }else if(change.type=='removed'){
          //   let li = productList.querySelector('[data-id='+change.doc.data().time+']');
          //   productList.removeChild(li);
          // }
        })
      });}else{
        alert('no user found!!');
      };  
});

function renderProduct(doc)  {
  // let div1=document.createElement('div');
  console.log(doc.id);
  let li=document.createElement('li');
  let prdctInfo=document.createElement('span');
  let time=document.createElement('span');
  // let div2=document.createElement('div');
  let cross = document.createElement('button');

  li.setAttribute('data-id', doc.id);
  prdctInfo.textContent=doc.data().productInfo;
  time.textContent=doc.data().time;
  cross.textContent='x';

  console.log(li.appendChild(prdctInfo));
  li.appendChild(cross);

  productList.appendChild(li);

  // //deleting data....
  cross.addEventListener('click', (e) => {
    var user = firebase.auth().currentUser;
      console.log(user.email);  

    // let id = e.target.parentElement.getAttribute('data-id');
    db.collection('product-info').doc(user.email).collection('time').doc(doc.data().time).delete().then(
      ()=>{location.reload()}
      
    );
    

});

}


