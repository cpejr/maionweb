function change(){
var chos_id = document.getElementById("oia").value;
var linkToA = document.getElementById("linkA");
linkToA.href = (`http://localhost:3000/registred/pageA`);
var linkToB = document.getElementById("linkB");
linkToB.href = (`http://localhost:3000/registred/pageB/${chos_id}`);
var linkToC = document.getElementById("linkC");
linkToC.href = (`http://localhost:3000/registred/pageC/${chos_id}`);
}
