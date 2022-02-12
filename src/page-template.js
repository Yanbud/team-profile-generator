const page = (staff) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">

  <title>Document</title>
</head>

<body>
  <div class="jumbotron text-white bg-dark"><h1 class="display-6 text-center">My Team</h1></div>
  <div class="container"><div class="row">
     
      </div>
  </div>
</body>
<script>
function displayTeam(staff) {

  const row = document.querySelector('.row')
  for (i = 0; i < staff.length; i++) {
      const person = staff[i];
      let h2 = document.createElement('h2');
      let h5 = document.createElement('h5');
      let li1 = document.createElement('li')
      let li2 = document.createElement('li')
      let li3 = document.createElement('li')
      let ul = document.createElement('ul')
      let header = document.createElement('div')
      let card = document.createElement('div')
      let col = document.createElement('div')

      card.classList.add('card','mb-4','shadow-sm');
      col.classList.add('col-md-4');
      header.classList.add('card-header','bg-info', 'text-white');
      ul.setAttribute('class', 'list-group');
      header.classList.add('bg-primary', 'card-header');
      li1.classList.add('list-group-item', 'item-1');
      li2.classList.add('list-group-item', 'item-2');
      li3.classList.add('list-group-item', 'item-3');

      h2.textContent = staff[i].name;
      h5.textContent = staff[i].type;
      li1.textContent = Object.keys(staff[i])[1] + ': ' + Object.values(staff[i])[1];
      li2.innerHTML = Object.keys(staff[i])[2] + ': ' + Object.values(staff[i])[2];
      li3.innerHTML = Object.keys(staff[i])[4] + ': ' + Object.values(staff[i])[4];
      header.append(h2, h5);
      ul.append(li1, li2, li3);
      card.append(header, ul);
      row.append(col);
      col.append(card);

  }
}
  displayTeam(${JSON.stringify(staff)})
</script>
</html>`
}
module.exports = page;