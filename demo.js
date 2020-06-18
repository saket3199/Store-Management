const productList = document.querySelector('#productList');
var d = Date();
console.log(d);


var app = new Vue({
  el: '#app',
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    scans: []
  },
  mounted: function ()  {
    var self = this;
    self.scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });
    self.scanner.addListener('scan', function (content, image) {
      // console.log(typeof content);
      console.log(content);
      
      //add data to database....
      var user = firebase.auth().currentUser;
      console.log(user.email);  
      var day = Date().toLocaleString();
      // console.log(day.substring(0,15));
      
      db.collection('product-info').doc(user.email).collection('time').doc(day).set({
        productInfo:content,
        time:day,
      })
      console.log('data added to firebase!!')
      self.scans.unshift({ date: +(Date.now()), content: content });
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      self.cameras = cameras;
      if (cameras.length > 0) {
        self.activeCameraId = cameras[0].id;
        self.scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
    //retrieving data....
    
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
},
  methods: {
    formatName: function (name) {
      return name || '(unknown)';
    },
    selectCamera: function (camera) {
      this.activeCameraId = camera.id;
      this.scanner.start(camera);
    }
  },


});

function renderProduct(doc){
  // let div1=document.createElement('div');
//   console.log(doc.id);
//   let li=document.createElement('li');
//   let prdctInfo=document.createElement('span');
//   let time=document.createElement('span');
//   // let div2=document.createElement('div');
//   let cross = document.createElement('button');

//   li.setAttribute('data-id', doc.id);
//   prdctInfo.textContent=doc.data().productInfo;
//   time.textContent=doc.data().time;
//   cross.textContent='x';

//   console.log(li.appendChild(prdctInfo));
//   li.appendChild(cross);

//   productList.appendChild(li);
document.getElementById('productList').innerHTML = `
    <table>
        <tr>
        <th>PRODUCT NAME</th>
        <th>QUANTITY</th>
        <th>TOTAL</th>
        </tr>
        
    </table>
`;

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


