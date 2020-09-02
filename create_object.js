function ex_obj(){
 var deb = new Object();
 deb.affiche = 5;
 deb.test = false;
var voir = deb.test.valueOf();
//var nouv = new deb();
 return deb.affiche +  " value : " + "" + voir;
}
ex_obj(); 
