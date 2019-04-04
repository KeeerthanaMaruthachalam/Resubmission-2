var config = {
    apiKey: "AIzaSyAbf34UvEU_A-ocwnGSlOdvwapjmjMNR5k",
    authDomain: "first-blog-d485b.firebaseapp.com",
    databaseURL: "https://first-blog-d485b.firebaseio.com",
    projectId: "first-blog-d485b",
    storageBucket: "first-blog-d485b.appspot.com",
    messagingSenderId: "851815099494"
  };
  firebase.initializeApp(config);
 
    var databaseRef = firebase.database().ref('scienceBlogdb/');

    const publish = () =>{
    // var user_name = document.getElementById('user_name').value;
    var title = document.getElementById('title').value;
    var authorName = document.getElementById('aname').value;
    var upload = document.getElementById('upload').value;
    var description = document.getElementById('description').value;

    var date = new Date();
    var month =["jan","feb","marc","apr"];
    //var user_id=document.getElementById('user_id').value;
    var uid = firebase.database().ref().child('scienceBlogdb').push().key;
   
    var data = {
        user_id: uid,
        title: title,
        authorName: authorName,
        upload: upload,
        description:  description,
        date: date
    }
    
    var updates = {};
    updates['/scienceBlogdb/' + uid] = data;
    firebase.database().ref().update(updates);
    
    alert('The blog is created successfully!');
    
    reload_page();
    }

    const update_user = () => {

    var user_id = document.getElementById('user_id').value;
    var title = document.getElementById('title').value;
    var authorName = document.getElementById('aname').value;
    var upload = document.getElementById('upload').value;
    var description = document.getElementById('description').value;
    
    var data = {
        user_id: user_id,
        title: title,
        authorName: authorName,
        upload: upload,
        description: description
    }

    var updates = {};
    updates['/scienceBlogdb/' + user_id] = data;
    firebase.database().ref().update(updates);
    
    alert('The blog is updated successfully!');

    reload_page();
    }

    const delete_user = () => {
        var user_id=document.getElementById('user_id').value;
        firebase.database().ref().child('/scienceBlogdb/' + user_id).remove();
        alert('the user deleted');
        reload_page();
    }

    const reload_page = () => {
        window.location.reload();
    }
