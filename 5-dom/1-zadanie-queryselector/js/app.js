const value1 = document.querySelectorAll('.first-attempt');
value1.forEach(function(el){
    el.classList.add('active');
});

const value2 = document.querySelectorAll('div');

for(const el of value2){
if(el.hasAttribute('data-border')){
    el.dataset.elActive="";
    }
}

const value3 = document.querySelectorAll('.hack');

for(const el of value3){
    el.setAttribute("title", "hacking");
}

const val4 = document.querySelectorAll('.hijack');

for(const el of val4){
    el.removeAttribute('title');
}

const val5 = document.querySelectorAll('.st1.st2');

for(const el of val5){
    el.style.color='red';
    el.style.fontSize='15px';
}

const val6 = document.querySelectorAll('.attrib');

for(const el of val6){
    el.dataset.hackActive='';
    el.removeAttribute('data-hack-inactive');
}

const val7 = document.querySelectorAll('.last-attempt');
for(const el of val7){
  let o =  el.firstElementChild;
   o.style.display='none';
}