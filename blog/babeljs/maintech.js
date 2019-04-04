var config = {
  apiKey: "AIzaSyAbf34UvEU_A-ocwnGSlOdvwapjmjMNR5k",
  authDomain: "first-blog-d485b.firebaseapp.com",
  databaseURL: "https://first-blog-d485b.firebaseio.com",
  projectId: "first-blog-d485b",
  storageBucket: "first-blog-d485b.appspot.com",
  messagingSenderId: "851815099494"
};
firebase.initializeApp(config);

var a = document.createElement("a");
a.setAttribute(sessionStorage.setItem("user", sessionStorage.getItem("user")), sessionStorage.getItem("user"));
// document.body.append(sessionStorage.getItem("user"));
console.log(sessionStorage.getItem("user"));
if (sessionStorage.getItem("user") != "null") {
  $("#dem").append(sessionStorage.getItem("user"));
} else {
  $("#dem").append(" ");
  window.location.href = "index.html";
}

var messagesRef = firebase.database().ref('techBlogdb');

var doc = "";
var i = 0;
customElements.define('div-div', class extends HTMLElement {
  connectedCallback() {
    //....
    //var user_id = document.getElementById('user_id').value;

    messagesRef.on("value", function (snapshot) {
      // console.log(snapshot.val());
      document.getElementById('loader').style.display = 'none';
      snapshot.forEach(data => {

        var div = document.createElement("div");
        div.setAttribute('id', i);
        // document.body.appendChild(div);
        var data1 = data.val();
        var add = "<button class='button1' id='ed' onclick='try1(\"" + data1.title + "\");'>edit</button>";
        var remove = "<button class='button1' id='de' onclick='deleted(\"" + data1.user_id + "\");'>delete</button>";
        $("#tech").append(div);
        $("#tech").append(add);
        $("#tech").append(remove);

        //  try this in morning:
        /* $("#ed").click(function(){
              var uid=firebase.auth().currentUser;
              if(data1.user_id===uid){
                document.getElementById('user_id').setAttribute('value' ,data1.user_id);
                window.location.href = "create.html";
              }
              else{
                console.log(data1.user_id);
              }
            });*/

        /* var updates = {};
         updates['/techBlogdb/' + uid] = data;
         firebase.database().ref().update(updates);
         
         alert('The blog is updated successfully!');
         })
        $("#de").click(function(){
         var u = document.getElementById('id').data1.user_id.value;
         var user_id=u;
         firebase.database().ref().child('/techBlogdb/' + user_id).remove();
         alert('the user deleted');
        })
        */
        // console.log(div);

        document.getElementById(i).innerHTML = data1.title + "<br>" + data1.authorName + "<br> " + data1.description + "<br>" + data1.upload + "<br>" + data1.date;

        doc = doc + (data1.title + " " + data1.authorName + " " + data1.description);
        i++;
      });
    });
  }

});
function try1(title) {

  aa(title);
}

function deleted(user_id) {
  // document.getElementById('title').setAttribute('value',data1.title);
  // var user_id=document.getElementById('user_id').value;
  firebase.database().ref().child('/techBlogdb/' + user_id).remove();
  alert('the user deleted');
}
/*$("#ed").click(function(){
  console.log("hi");
var uid=firebase.auth().currentUser;
messagesRef.on("value",function(snapshot)
{
  // console.log(snapshot.val());
  //document.getElementById('loader').style.display = 'none';
    snapshot.forEach((data) =>
    {
      var data1=data.val();
      if(data1.user_id===uid){
        document.getElementById('user_id').setAttribute('value' ,data1.user_id);
        window.location.href = "create.html";
      }
      else{
        console.log("hi hello");
      }
    });
    });
  });*/
function aa(title) {
  var uid = firebase.auth().currentUser;
  messagesRef.on("value", function (snapshot) {
    // console.log(snapshot.val());
    //document.getElementById('loader').style.display = 'none';
    snapshot.forEach(data => {
      var data1 = data.val();
      if (data1.title === title) {
        // 
        window.location.href = "create1.html";
        //  document.getElementById('title').setAttribute('value',data1.title);
      }
    });
  });
}
/*function update(){
var updates = {};
  updates['/techBlogdb/' + uid] = data;
  firebase.database().ref().update(updates);
  
  alert('The blog is created successfully!');
}*/
