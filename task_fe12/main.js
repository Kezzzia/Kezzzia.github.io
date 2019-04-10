function viewUserForm(){
    document.getElementById("user__form").style.display = "block";
};

function viewUserChildrenQuantity(){
    document.getElementById("user__childrenQuantity").style.display = "block";
};

function viewUserChildrenNames(){
  document.getElementById("user__childrenNames").style.display = "block";
};

function valid(form) {
  var fail = false;
  var strPattern = /[a-z]{2,50}/i;
  var numberPattern = /\d{2,3}/;
  var user = {};
    user.firstName = form.user__name.value;
    user.secondName = form.user__lastname.value;
    user.gender = form.user__gender.value;
    user.age = form.user__age.value;
    user.weight = form.user__weight.value;
    user.growth = form.user__growth.value;
    user.married = form.user__married.value;
    user.childs = form.user__havingchildren.value;
    user.childrenQuantity = form.user__childrenQuantity.value;
    user.childrenNames = form.user__childrenNames.value;

    if(strPattern.test(user.firstName) === false){
      fail = "You entered your name incorrectly";
    } else if (strPattern.test(user.secondName) === false){
      fail = "You entered your last name incorrectly";
    } else if (strPattern.test(user.gender) === false){
      fail = "You entered your gender incorrectly"
    } else if (numberPattern.test(user.age) === false){
      fail = "You entered your age incorrectly"
    } else if (numberPattern.test(user.weight) === false){
      fail = "You entered your weight incorrectly"
    } else if (numberPattern.test(user.growth) === false){
      fail = "You entered your growth incorrectly"
    } else if (user.married === ""){
      fail = "you did not answer whether you are married"
    } else if (user.childs === ""){
      fail = "you did not give the answer whether you have children"
    } 

      if(fail){
       alert(fail);
     }

    if(user.childs === "No"){
    user.info = document.getElementById("information_output");
    user.info.innerHTML = user.firstName + "<br>" + user.secondName + "<br>" + user.age + "<br>"
    + user.gender + "<br>" + user.growth + "<br>" + user.weight + "<br>" + user.married
    + "<br>" + user.childs;
    } else if (user.childs === "Yes"){
      viewUserChildrenQuantity();
      }
    
    if(user.childrenQuantity > 0){
      viewUserChildrenNames();
    }
    
    if(user.childrenNames !== ""){
      user.info = document.getElementById("information_output");
      user.info.innerHTML = user.firstName + "<br>" + user.secondName + "<br>" + user.age + "<br>"
      + user.gender + "<br>" + user.growth + "<br>" + user.weight + "<br>" + user.married
      + "<br>" + user.childs + "<br>" + user.childrenQuantity + "<br>" + user.childrenNames;
    }

}


