document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('button').onclick = ()=> {

    var pdf = new jsPDF('p', 'pt', 'a4');

    var element = document.querySelector('#content').value;
    pdf.text(20, 50, element);

    pdf.save('form.pdf');
  }
});
