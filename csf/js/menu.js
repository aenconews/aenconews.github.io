function ShowContent(content) {
   document.getElementById("divHome").style.display = 'none'
   document.getElementById("divFacility").style.display = 'none'
   document.getElementById("divTeam").style.display = 'none';
   document.getElementById("divOpp").style.display = 'none';
   document.getElementById("divSolution").style.display = 'none';
   document.getElementById(content).style.display = 'block';

   let newUrlIS =  window.location.origin + window.location.path + '?p=' + content + '&l=' + lang;
   window.history.pushState({}, null, newUrlIS);
   return false;
}
