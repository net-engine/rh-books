el = document.getElementsByClassName('productname')[0]
string = el.innerHTML
el.innerHTML = string.replace("Red Hat", "")
