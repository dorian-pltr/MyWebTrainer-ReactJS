(this["webpackJsonpmywebtrainer-reactjs"]=this["webpackJsonpmywebtrainer-reactjs"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(3),l=a.n(n),c=a(4),i=a(5),o=a(1),u=a(8),m=a(7),h=function(e){var t=e.className,a=e.text,s=e.onClick,n=e.onMouseEnter,l=e.onMouseLeave;return r.a.createElement("div",{className:t,onClick:s,onMouseEnter:n,onMouseLeave:l},r.a.createElement("span",null,a))},E=function(e){var t,a=e.muscleName,s=e.onChange,n=e.value;switch(a){case"hamstringA":case"hamstringB":t=["","Soulev\xe9 de terre","Soulev\xe9 de terre jambes tendues","Flexion de jambes"];break;case"quadricepsA":case"quadricepsB":t=["","Squat","Presse \xe0 cuisses","Fentes","Squat bulgare","Extension de jambes"];break;case"chestA":case"chestB":t=["","D\xe9velopp\xe9 couch\xe9 \xe0 la barre","D\xe9velopp\xe9 couch\xe9 aux halt\xe8res","D\xe9velopp\xe9 couche \xe0 la machine","Dips","Pompes au sol"];break;case"backA":case"backB":t=["","Tractions","Tirage vertical","Rowing barre","Rowing halt\xe8res","Rowing invers\xe9","Tirage poulie basse"];break;case"shouldersA":case"shouldersB":t=["","D\xe9velopp\xe9 millitaire","D\xe9velopp\xe9 halt\xe8res","Rowing menton","Elevations lat\xe9rales","Elevations post\xe9rieures","Facepull"];break;case"bicepsA":case"bicepsB":t=["","Curl barre","Curl halt\xe8re","Curl pupitre","Curl invers\xe9","Curl inclin\xe9","Curl \xe0 la machine"];break;case"tricepsA":case"tricepsB":t=["","Barre au front","Extension nuque","Kick back","Extension poulie haute","D\xe9velopp\xe9 couch\xe9 s\xe9rr\xe9"];break;case"absA":case"absB":t=["","Crunch au sol","Relev\xe9s de bassin sur plan inclin\xe9","Sit-up","Relev\xe9s de genoux","Relev\xe9s de jambes","Crunch \xe0 la poulie haute","Flexions du buste \xe0 la machine","Roue abdominale"];break;default:t="x"}for(var l=[],c=0;c<t.length;c++)l.push(r.a.createElement("option",{value:t[c],key:c},t[c]));return r.a.createElement("div",{className:a},r.a.createElement("select",{name:a,id:a+"-select",className:"select",value:n,onChange:s},l))},f=(a(14),a(6)),b=a.n(f),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={hoverFew:[!1,!1,!1],hover:!1,frequencyChosen:"",programChosen:"",programDescription:"",step1of4:!0,step2of4:!1,step3of4:!1,step4of4:!1,fbExercicesA:["","","","","","","",""],fbExercicesB:["","","","","","","",""]},e.fullbodyExerciceChoice=e.fullbodyExerciceChoice.bind(Object(o.a)(e)),e.isProgramCompleted=e.isProgramCompleted.bind(Object(o.a)(e)),e.fullBodyPDF=e.fullBodyPDF.bind(Object(o.a)(e)),e}return Object(i.a)(a,[{key:"toggleHoverFew",value:function(e){var t=this.state.hoverFew;t[e]=!t[e],this.setState({hoverFew:t})}},{key:"toggleHover",value:function(){var e=!this.state.hover;this.setState({hover:e})}},{key:"fullBodyPDF",value:function(){var e=new b.a("p","pt");e.setFontType("bold"),e.text(20,40,"Mon programme d'entrainement"),e.setFontType("bold"),e.text(20,100,"FullBody A"),e.setFontType("normal");var t=120;this.state.fbExercicesA.forEach((function(a){t+=20,e.text(20,t,a)})),e.setFontType("bold"),e.text(20,340,"FullBody B"),e.setFontType("normal");var a=360;this.state.fbExercicesB.forEach((function(t){a+=20,e.text(20,a,t)})),e.save("fullbody.pdf")}},{key:"FrequencyChoose",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",null,"Laissez vous guider - \xe9tape 1/4"),r.a.createElement("h5",null,"Je choisi ma fr\xe9quence d'entrainement"),r.a.createElement("div",{id:"frequencyChoose"},r.a.createElement(h,{className:"button_"+this.state.hoverFew[0],text:"1 \xe0 3 fois par semaine",onClick:function(){return e.ProgramsList("1 \xe0 3 fois par semaine")},onMouseEnter:function(){return e.toggleHoverFew(0)},onMouseLeave:function(){return e.toggleHoverFew(0)}}),r.a.createElement(h,{className:"button_"+this.state.hoverFew[1],text:"4 fois par semaine",onClick:function(){return e.ProgramsList("4 fois par semaine")},onMouseEnter:function(){return e.toggleHoverFew(1)},onMouseLeave:function(){return e.toggleHoverFew(1)}}),r.a.createElement(h,{className:"button_"+this.state.hoverFew[2],text:"+ de 5 fois par semaine",onClick:function(){return e.ProgramsList("+ de 5 fois par semaine")},onMouseEnter:function(){return e.toggleHoverFew(2)},onMouseLeave:function(){return e.toggleHoverFew(2)}})))}},{key:"ProgramsList",value:function(e){switch(this.setState({frequencyChosen:e}),e){case"1 \xe0 3 fois par semaine":this.setState({programChosen:"FullBody",programDescription:"entrainer tout vos muscles \xe0 chaque s\xe9ances. Il est id\xe9al pour les d\xe9butants et pour les sportifs avec un emploi du temps charg\xe9."});break;case"4 fois par semaine":this.setState({programChosen:"HalfBody",programDescription:"d\xe9dier deux s\xe9ances d'entrainement aux muscles du haut de votre corps, et deux s\xe9ances au bas de votre corps. C'est le meilleur compromis pour les sportifs interm\xe9diaires."});break;case"+ de 5 fois par semaine":this.setState({programChosen:"Split",programDescription:"entrainer un groupe musculaire diff\xe9rent \xe0 chaque s\xe9ance. Il est id\xe9al pour les sportifs avanc\xe9s, mais aussi pour les sportifs avec beaucoup de temps libre."})}this.setState({step1of4:!1,step2of4:!0,hoverFew:[!1,!1,!1]})}},{key:"ProgramComfirm",value:function(){var e=this,t=this.state.programDescription,a=this.state.frequencyChosen;return r.a.createElement("div",null,r.a.createElement("h4",null,"Laissez vous guider - \xe9tape 2/4"),r.a.createElement("h5",null,"Je confirme mon format d'entrainement"),r.a.createElement("p",null,"Vous avez choisi de vous entrainer ",a,", votre coach vous recommande un programme de type"," ",r.a.createElement("b",null,this.state.programChosen),".",r.a.createElement("br",null),"Ce programme consiste \xe0 ",t),r.a.createElement("div",{id:"programComfirm"},r.a.createElement(h,{className:"button_"+this.state.hoverFew[0],text:"Retour",onClick:function(){return e.setState({step1of4:!0,step2of4:!1,hoverFew:[!1,!1,!1]})},onMouseEnter:function(){return e.toggleHoverFew(0)},onMouseLeave:function(){return e.toggleHoverFew(0)}}),r.a.createElement(h,{className:"button_"+this.state.hoverFew[1],text:"Je construis mon programme",onClick:function(){return e.setState({step2of4:!1,step3of4:!0,hoverFew:[!1,!1,!1]})},onMouseEnter:function(){return e.toggleHoverFew(1)},onMouseLeave:function(){return e.toggleHoverFew(1)}})))}},{key:"ProgramCreation",value:function(){return r.a.createElement("div",null,"FullBody"===this.state.programChosen&&this.fullbodyProgram(),"HalfBody"===this.state.programChosen&&this.halfbodyProgram(),"Split"===this.state.programChosen&&this.splitProgram())}},{key:"ProgramValidation",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",null,"Laissez vous guider - \xe9tape 4/4"),r.a.createElement("h5",null,"Je valide mon format d'entrainement"),r.a.createElement("div",{id:"jsx-template"},r.a.createElement("p",null,r.a.createElement("b",null,"FullBody A")),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Muscles")),r.a.createElement("td",null,"Ischio-jambiers "),r.a.createElement("td",null,"Quadriceps"),r.a.createElement("td",null,"Pectoraux"),r.a.createElement("td",null,"Dorsaux"),r.a.createElement("td",null,"Epaules"),r.a.createElement("td",null,"Biceps"),r.a.createElement("td",null,"Triceps"),r.a.createElement("td",null,"Abdominaux")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Exercices")),r.a.createElement("td",null,this.state.fbExercicesA[0]),r.a.createElement("td",null,this.state.fbExercicesA[1]),r.a.createElement("td",null,this.state.fbExercicesA[2]),r.a.createElement("td",null,this.state.fbExercicesA[3]),r.a.createElement("td",null,this.state.fbExercicesA[4]),r.a.createElement("td",null,this.state.fbExercicesA[5]),r.a.createElement("td",null,this.state.fbExercicesA[6]),r.a.createElement("td",null,this.state.fbExercicesA[7]))),r.a.createElement("p",null,r.a.createElement("b",null,"FullBody B")),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Muscles")),r.a.createElement("td",null,"Ischio-jambiers "),r.a.createElement("td",null,"Quadriceps"),r.a.createElement("td",null,"Pectoraux"),r.a.createElement("td",null,"Dorsaux"),r.a.createElement("td",null,"Epaules"),r.a.createElement("td",null,"Biceps"),r.a.createElement("td",null,"Triceps"),r.a.createElement("td",null,"Abdominaux")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Exercices")),r.a.createElement("td",null,this.state.fbExercicesB[0]),r.a.createElement("td",null,this.state.fbExercicesB[1]),r.a.createElement("td",null,this.state.fbExercicesB[2]),r.a.createElement("td",null,this.state.fbExercicesB[3]),r.a.createElement("td",null,this.state.fbExercicesB[4]),r.a.createElement("td",null,this.state.fbExercicesB[5]),r.a.createElement("td",null,this.state.fbExercicesB[6]),r.a.createElement("td",null,this.state.fbExercicesB[7])),r.a.createElement("br",null))),r.a.createElement("div",{id:"programComfirm"},r.a.createElement(h,{className:"button_"+this.state.hoverFew[0],text:"Retour",onClick:function(){return e.setState({step3of4:!0,step4of4:!1,hoverFew:[!1,!1,!1]})},onMouseEnter:function(){return e.toggleHoverFew(0)},onMouseLeave:function(){return e.toggleHoverFew(0)}}),r.a.createElement(h,{className:"button_"+this.state.hoverFew[1],text:"G\xe9n\xe9rer un fichier PDF",onClick:this.fullBodyPDF,onMouseEnter:function(){return e.toggleHoverFew(1)},onMouseLeave:function(){return e.toggleHoverFew(1)}})))}},{key:"fullbodyProgram",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",null,"Laissez vous guider - \xe9tape 3/4"),r.a.createElement("h5",null,"Je cr\xe9e mon programme d'entrainement"),r.a.createElement("div",null,r.a.createElement("p",null,"Le format d'entrainement propos\xe9 par votre coach est le FullBody. Ce format se compose de deux programmes d'entrainement \xe0 r\xe9aliser selon votre disponibilit\xe9."),r.a.createElement("ul",null,r.a.createElement("li",null,"Si vous vous entrainez une fois par semaine, vous devrez r\xe9aliser le programme A la premi\xe8re semaine, puis le programme B l'autre semaine."),r.a.createElement("br",null),r.a.createElement("li",null,"Dans le cas ou vous vous entraineriez deux fois par semaine, vous feriez les programmes A et B chaque semaine."),r.a.createElement("br",null),r.a.createElement("li",null,"Enfin, pour les plus motiv\xe9s qui souhaitent s'entrainer trois fois par semaine, vous feriez les programmes A-B-A la premi\xe8re semaine et les programmes B-A-B la deuxi\xe8me semaine."),r.a.createElement("br",null)),r.a.createElement("h5",null,"Assez parl\xe9, cr\xe9ons votre programme d'entrainement!")),r.a.createElement("div",{id:"fullbody"},r.a.createElement("div",{id:"fullbody_A"},r.a.createElement("h5",{className:"center"},"Programme A"),r.a.createElement("p",null,"Ischio-jambiers"),r.a.createElement(E,{muscleName:"hamstringA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[0],r.a.createElement("p",null,"Quadriceps et fessiers"),r.a.createElement(E,{muscleName:"quadricepsA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[1],r.a.createElement("p",null,"Pectoraux"),r.a.createElement(E,{muscleName:"chestA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[2],r.a.createElement("p",null,"Dorsaux"),r.a.createElement(E,{muscleName:"backA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[3],r.a.createElement("p",null,"Epaules"),r.a.createElement(E,{muscleName:"shouldersA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[4],r.a.createElement("p",null,"Biceps"),r.a.createElement(E,{muscleName:"bicepsA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[5],r.a.createElement("p",null,"Triceps"),r.a.createElement(E,{muscleName:"tricepsA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[6],r.a.createElement("p",null,"Abdos"),r.a.createElement(E,{muscleName:"absA",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesA[7]),r.a.createElement("div",{id:"fullbody_B"},r.a.createElement("h5",{className:"center"},"Programme B"),r.a.createElement("p",null,"Ischio-jambiers"),r.a.createElement(E,{muscleName:"hamstringB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[0],r.a.createElement("p",null,"Quadriceps et fessiers"),r.a.createElement(E,{muscleName:"quadricepsB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[1],r.a.createElement("p",null,"Pectoraux"),r.a.createElement(E,{muscleName:"chestB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[2],r.a.createElement("p",null,"Dorsaux"),r.a.createElement(E,{muscleName:"backB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[3],r.a.createElement("p",null,"Epaules"),r.a.createElement(E,{muscleName:"shouldersB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[4],r.a.createElement("p",null,"Biceps"),r.a.createElement(E,{muscleName:"bicepsB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[5],r.a.createElement("p",null,"Triceps"),r.a.createElement(E,{muscleName:"tricepsB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[6],r.a.createElement("p",null,"Abdos"),r.a.createElement(E,{muscleName:"absB",onChange:this.fullbodyExerciceChoice}),"Vous avez choisi : ",this.state.fbExercicesB[7])),r.a.createElement("div",{id:"exercicesComfirm"},r.a.createElement(h,{className:"button_"+this.state.hoverFew[0],text:"Retour",onClick:function(){return e.setState({step2of4:!0,step3of4:!1,hoverFew:[!1,!1,!1]})},onMouseEnter:function(){return e.toggleHoverFew(0)},onMouseLeave:function(){return e.toggleHoverFew(0)}}),r.a.createElement(h,{className:"button_"+this.state.hoverFew[1],text:"Je valide mon programme",onClick:this.isProgramCompleted,onMouseEnter:function(){return e.toggleHoverFew(1)},onMouseLeave:function(){return e.toggleHoverFew(1)}})))}},{key:"fullbodyExerciceChoice",value:function(e){var t=this.state.fbExercicesA,a=this.state.fbExercicesB;switch(e.target.name){case"hamstringA":(t=this.state.fbExercicesA)[0]=e.target.value,this.setState({fbExercicesA:t});break;case"quadricepsA":(t=this.state.fbExercicesA)[1]=e.target.value,this.setState({fbExercicesA:t});break;case"chestA":(t=this.state.fbExercicesA)[2]=e.target.value,this.setState({fbExercicesA:t});break;case"backA":(t=this.state.fbExercicesA)[3]=e.target.value,this.setState({fbExercicesA:t});break;case"shouldersA":(t=this.state.fbExercicesA)[4]=e.target.value,this.setState({fbExercicesA:t});break;case"bicepsA":(t=this.state.fbExercicesA)[5]=e.target.value,this.setState({fbExercicesA:t});break;case"tricepsA":(t=this.state.fbExercicesA)[6]=e.target.value,this.setState({fbExercicesA:t});break;case"absA":(t=this.state.fbExercicesA)[7]=e.target.value,this.setState({fbExercicesA:t});break;case"hamstringB":(a=this.state.fbExercicesB)[0]=e.target.value,this.setState({fbExercicesB:a});break;case"quadricepsB":(a=this.state.fbExercicesB)[1]=e.target.value,this.setState({fbExercicesB:a});break;case"chestB":(a=this.state.fbExercicesB)[2]=e.target.value,this.setState({fbExercicesB:a});break;case"backB":(a=this.state.fbExercicesB)[3]=e.target.value,this.setState({fbExercicesB:a});break;case"shouldersB":(a=this.state.fbExercicesB)[4]=e.target.value,this.setState({fbExercicesB:a});break;case"bicepsB":(a=this.state.fbExercicesB)[5]=e.target.value,this.setState({fbExercicesB:a});break;case"tricepsB":(a=this.state.fbExercicesB)[6]=e.target.value,this.setState({fbExercicesB:a});break;case"absB":(a=this.state.fbExercicesB)[7]=e.target.value,this.setState({fbExercicesB:a})}}},{key:"halfbodyProgram",value:function(){return r.a.createElement("em",null,"Cr\xe9er mon programme Halfbody, en cours de d\xe9veloppement...")}},{key:"splitProgram",value:function(){return r.a.createElement("em",null,"Cr\xe9er mon programme Split, en cours de d\xe9veloppement...")}},{key:"isProgramCompleted",value:function(){for(var e=-1,t=0;t<this.state.fbExercicesA.length;t++)if(""===this.state.fbExercicesA[t]){e=0;break}for(var a=0;a<this.state.fbExercicesB.length;a++)""===this.state.fbExercicesB[a]&&(e=0);0===e?alert("Veuillez compl\xe9ter la liste de vos exercices"):-1===e&&this.setState({step3of4:!1,step4of4:!0,hoverFew:[!1,!1,!1]})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.step1of4&&this.FrequencyChoose(),this.state.step2of4&&this.ProgramComfirm(),this.state.step3of4&&this.ProgramCreation(),this.state.step4of4&&this.ProgramValidation())}}]),a}(s.Component);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("monProgramme")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0d2aa0a3.chunk.js.map