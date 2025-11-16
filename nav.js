fetch('nav.html')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load navbar');
    return res.text();
  })
  .then(text => { 
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem); 
}).catch(err => console.error(err));