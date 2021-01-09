let shareIt = document.getElementById('share-it');
let shareReturn = document.getElementById('share-return');
let socialButtons = document.getElementById('share-buttons')


shareIt.onclick = shareFunc;
shareReturn.onclick = shareFunc;


function shareFunc() {
    if (socialButtons.style.display === 'flex') {
        socialButtons.style.display = 'none';
        console.log(socialButtons.style.display);
    } else {
        socialButtons.style.display = 'flex';
        console.log(socialButtons.style.display);
    }
}