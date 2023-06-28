// code copy function
const copyContent = (element_id, text_copied_id)=> {
  console.log(element_id);
  let text =  document.getElementById(element_id).innerText;
  let textCopied =  document.getElementById(text_copied_id);
  console.log(text_copied_id)
  navigator.clipboard.writeText(text);
  textCopied.style.display = 'block';
  
}